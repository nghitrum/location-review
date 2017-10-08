import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ReviewService } from '../../services/review.service';


@Component({
    selector: 'app-review',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

    rForm: FormGroup;
    post: any;                     // A property for our submitted form

    id: string;
    name: string = '';
    rating: number;
    reviewText: string = '';
    titleAlert: string = "All fields are required, please try again.";

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private reviewService: ReviewService,
        private route: ActivatedRoute) {
        this.rForm = fb.group({
            'name': [null, Validators.required],
            'rating': [null, Validators.required],
            'reviewText': [null, Validators.compose([Validators.required, Validators.minLength(0), Validators.maxLength(500)])]
        });
    }

    ngOnInit() {
        this.route.params.subscribe((params: ParamMap) => {
            this.id = params['id'];
        });
    }

    addReview(post) {
        this.reviewText = post.reviewText;
        this.name = post.name;
        this.rating = post.rating;

        var newReview = {
            author: this.name,
            rating: this.rating,
            reviewText: this.reviewText,
            createdOn: Date.now()
        }
        this.reviewService.addReview(this.id, newReview).subscribe(data => {
            //console.log(data);
            this.router.navigate(['/locations/', this.id]);
        });


    }

}
