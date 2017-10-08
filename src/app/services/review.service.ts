import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ReviewService {

    constructor(private http: Http) {
        console.log('Task Service Initialize');
    }

    addReview(id, newReview) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/locations/' + id + '/reviews', JSON.stringify(newReview), { headers: headers })
            .map(res => res.json());
    }

}
