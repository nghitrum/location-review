import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LocationsComponent } from './components/locations/locations.component';
import { LocationDetailComponent } from './components/location-detail/location-detail.component';
import { ReviewComponent } from './components/review/review.component';

import { LocationService } from './services/location.service';
import { ReviewService } from './services/review.service';
import { OtherService } from './services/other.service';

import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    LocationDetailComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    LocationService,
    ReviewService,
    OtherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
