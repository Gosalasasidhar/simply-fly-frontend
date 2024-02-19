import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightTripComponent } from './flight-trip/flight-trip.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FlightTripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
