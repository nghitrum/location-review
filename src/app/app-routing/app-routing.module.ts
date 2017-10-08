import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationsComponent } from '../components/locations/locations.component';
import { LocationDetailComponent } from '../components/location-detail/location-detail.component';
import { LocationNewComponent } from '../components/location-new/location-new.component';
import { ReviewComponent } from '../components/review/review.component';
import { AboutComponent } from '../components/about/about.component';

// Route Configuration
export const routes: Routes = [
  { path: 'locations', component: LocationsComponent },
  { path: 'locations/:id', component: LocationDetailComponent },
  { path: '', redirectTo: '/locations', pathMatch: 'full' },
  { path: 'locations/:id/reviews/new', component: ReviewComponent },
  { path: 'about', component: AboutComponent },
  { path: 'add-new-location', component: LocationNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
