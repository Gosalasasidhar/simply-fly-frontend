import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}  from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightTripComponent } from './component/flight-trip/flight-trip.component';
import { FlightsComponent } from './component/flights/flights.component';
import { FormsModule } from '@angular/forms';
import { AuthenticateComponent } from './component/authenticate/authenticate.component';
import { CustomerRegisterComponent } from './component/customer-register/customer-register.component';


@NgModule({
  declarations: [
    AppComponent,
    FlightTripComponent,
    FlightsComponent,
    AuthenticateComponent,
    CustomerRegisterComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
