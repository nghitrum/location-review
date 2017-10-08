import { Component } from '@angular/core';
import { LocationService } from './services/location.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [LocationService]
})
export class AppComponent {
    title = 'app';
}
