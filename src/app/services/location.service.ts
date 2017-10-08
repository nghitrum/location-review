import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LocationService {

    constructor(private http: Http) {
        console.log('Task Service Initialize');
    }

    //  Still harded code
    getLocations() {
        return this.http.get('/api/locations?lng=65.034345&lat=25.463181&maxDistance=20000')
            .map(res => res.json());
    }

    getLocationDetail(id: string) {
        return this.http.get('/api/locations/' + id)
            .map(res => res.json());
    }

    addNewLocation(newLocation) {
        console.log(newLocation);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/locations', JSON.stringify(newLocation), { headers: headers })
            .map(res => res.json());
    }

}
