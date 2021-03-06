import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '../../models/Location';
import { LocationService } from '../../services/location.service';
import { OtherService } from '../../services/other.service';


@Component({
    selector: 'app-location-detail',
    templateUrl: './location-detail.component.html',
    styleUrls: ['./location-detail.component.css']
})

export class LocationDetailComponent implements OnInit {

    location: Location;

    constructor(
        private locationService: LocationService,
        private route: ActivatedRoute,
        private otherService: OtherService
    ) { }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.locationService.getLocationDetail(params.get('id')))
            .subscribe(location => {
                this.location = location;
                this.otherService.setTitle(this.location.name);
            });

    }

}
