import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CreateBookingComponent } from './components/create-booking/create-booking.component';
import { ReadBookingComponent } from './components/read-booking/read-booking.component';
import { UpdateBookingComponent } from './components/update-booking/update-booking.component';
import { DeleteBookingComponent } from './components/delete-booking/delete-booking.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'create', component:CreateBookingComponent},
  {path:'read', component:ReadBookingComponent},
  {path:'update', component:UpdateBookingComponent},
  {path:'delete', component:DeleteBookingComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
