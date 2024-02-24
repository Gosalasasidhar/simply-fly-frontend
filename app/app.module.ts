import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { CustomerSignupComponent } from './components/customer-signup/customer-signup.component';
import { SearchFlightComponent } from './components/search-flight/search-flight.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { ContentComponent } from './components/admin/content/content.component';
import { LoginComponent } from './components/login/login.component';
import { ManageAirportsComponent } from './components/utility/manage-airports/manage-airports.component';
import { ManageAirlinesComponent } from './components/utility/manage-airlines/manage-airlines.component';
import { ManageFlightOwnersComponent } from './components/utility/manage-flight-owners/manage-flight-owners.component';
import { ManageUsersComponent } from './components/utility/manage-users/manage-users.component';
import { FlightOwnerDashboardComponent } from './components/flight-owner-dashboard/flight-owner-dashboard.component';
import { FlSidebarComponent } from './components/flight-owner/fl-sidebar/fl-sidebar.component';
import { FlContentComponent } from './components/flight-owner/fl-content/fl-content.component';
import { ManageFlightsComponent } from './components/utility/manage-flights/manage-flights.component';
import { ManageFlightTripsComponent } from './components/utility/manage-flight-trips/manage-flight-trips.component';
import { ManageBookingsComponent } from './components/utility/manage-bookings/manage-bookings.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomerDashboardComponent,
    CustomerSignupComponent,
    SearchFlightComponent,
    AdminDashboardComponent,
    SidebarComponent,
    ContentComponent,
    LoginComponent,
    ManageAirportsComponent,
    ManageAirlinesComponent,
    ManageFlightOwnersComponent,
    ManageUsersComponent,
    FlightOwnerDashboardComponent,
    FlSidebarComponent,
    FlContentComponent,
    ManageFlightsComponent,
    ManageFlightTripsComponent,
    ManageBookingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
