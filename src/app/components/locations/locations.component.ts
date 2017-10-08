import { Component, OnInit } from '@angular/core';
import { Location } from '../../models/Location';
import { LocationService } from '../../services/location.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-locations',
    templateUrl: './locations.component.html',
    styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

    //  Use for front end
    formatDistance(distance: number) {
        var numDistance, unit;
        if (distance > 1000) {
            numDistance = parseFloat((distance / 1000).toString()).toFixed(1);
            unit = 'km';
        } else {
            numDistance = parseInt(distance.toString(), 10);
            unit = 'm';
        }
        return numDistance + " " + unit;
    };
    locations: Location[];

    constructor(private locationService: LocationService) {
        this.locationService.getLocations()
            .subscribe(locations => { this.locations = locations });
    }

    ngOnInit() {
    }

}
