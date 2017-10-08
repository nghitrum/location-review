import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationsComponent } from '../components/locations/locations.component';
import { LocationDetailComponent } from '../components/location-detail/location-detail.component';
import { ReviewComponent } from '../components/review/review.component';

// Route Configuration
export const routes: Routes = [
  { path: 'locations', component: LocationsComponent },
  { path: 'locations/:id', component: LocationDetailComponent },
  { path: '', redirectTo: '/locations', pathMatch: 'full' },
  { path: 'locations/:id/reviews/new', component: ReviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
