import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSignupComponent } from './components/customer-signup/customer-signup.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SearchFlightComponent } from './components/search-flight/search-flight.component';
import { ManageAirportsComponent } from './components/utility/manage-airports/manage-airports.component';
import { ManageAirlinesComponent } from './components/utility/manage-airlines/manage-airlines.component';
import { FlightOwnerDashboardComponent } from './components/flight-owner-dashboard/flight-owner-dashboard.component';

const routes: Routes = [
  {path:'home',component:SearchFlightComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:CustomerSignupComponent},
  {path:'admin',component:AdminDashboardComponent},
  {path:'flight-owner', component:FlightOwnerDashboardComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
