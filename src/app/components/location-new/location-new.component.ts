import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LocationService } from '../../services/location.service';
import { OtherService } from '../../services/other.service';

@Component({
    selector: 'app-location-new',
    templateUrl: './location-new.component.html',
    styleUrls: ['./location-new.component.css']
})
export class LocationNewComponent implements OnInit {

    rForm: FormGroup;

    titleAlert: string = "All fields are required, please try again.";

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private locationService: LocationService,
        private otherService: OtherService
    ) {
        this.rForm = fb.group({
            'name': [null, Validators.required],
            'address': [null, Validators.required],
            'facilities': [null, Validators.required],
            'mtfopen': [null, Validators.required],
            'mtfclose': [null, Validators.required],
            'saturdayopen': [null, Validators.required],
            'saturdayclose': [null, Validators.required],
            'sundayopen': [null, Validators.required],
            'sundayclose': [null, Validators.required],
            'lattitude': [null, Validators.required],
            'longtitude': [null, Validators.required]
        });
    }

    formatTime(num) {
        if (num < 12) {
            return num + ":00 AM";
        } else {
            return num + ":00 PM";
        }
    }

    addLocation(post) {
        var mtfClosed = true;
        if (post.mtfclose != "24" && post.mtfopen != "24") {
            mtfClosed = false;
        }

        var saturdayClosed = true;
        if (post.saturdayclose != "24" && post.saturdayopen != "24") {
            saturdayClosed = false;
        }

        var sundayClosed = true;
        if (post.sundayclose != "24" && post.sundayopen != "24") {
            sundayClosed = false;
        }

        var newLocation = {
            name: post.name,
            address: post.address,
            facilities: post.facilities,
            lng: post.longtitude,
            lat: post.lattitude,
            days1: "Monday - Friday",
            opening1: this.formatTime(post.mtfopen),
            closing1: this.formatTime(post.mtfclose),
            closed1: mtfClosed,
            days2: "Saturday",
            opening2: this.formatTime(post.saturdayopen),
            closing2: this.formatTime(post.saturdayclose),
            closed2: saturdayClosed,
            days3: "Sunday",
            opening3: this.formatTime(post.sundayopen),
            closing3: this.formatTime(post.sundayclose),
            closed3: sundayClosed
        };

        this.locationService.addNewLocation(newLocation)
            .subscribe(data => {
                this.router.navigate(['/locations']);
            })
    }

    ngOnInit() {
    }

}
