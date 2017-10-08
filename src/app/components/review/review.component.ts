import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ReviewService } from '../../services/review.service';
import { OtherService } from '../../services/other.service';


@Component({
    selector: 'app-review',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

    rForm: FormGroup;
    id: string;
    
    titleAlert: string = "All fields are required, please try again.";

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private reviewService: ReviewService,
        private route: ActivatedRoute,
        private otherService: OtherService) {
        this.rForm = fb.group({
            'name': [null, Validators.required],
            'rating': [null, Validators.required],
            'reviewText': [null, Validators.compose([Validators.required, Validators.minLength(0), Validators.maxLength(500)])]
        });
    }

    ngOnInit() {
        this.route.params.subscribe((params: ParamMap) => {
            this.id = params['id'];
            this.otherService.setTitle("Add review");
        });
    }

    addReview(post) {
        var newReview = {
            author: post.name,
            rating: post.rating,
            reviewText: post.reviewText,
            createdOn: Date.now()
        }
        this.reviewService.addReview(this.id, newReview).subscribe(data => {
            //console.log(data);
            this.router.navigate(['/locations/', this.id]);
        });


    }

}
