import { Component } from '@angular/core';
import { flightTrip } from 'src/app/models/flightTrip';
import { FlightTripService } from 'src/app/service/flight-trip.service';

@Component({
  selector: 'app-flight-trip',
  templateUrl: './flight-trip.component.html',
  styleUrls: ['./flight-trip.component.css']
})
export class FlightTripComponent {
  flightTripList:flightTrip[]=[];
  flightIdInput!: string ;
  constructor(private flightTripService:FlightTripService){}


getAllFlightTrips(){
  this.flightTripService.getAllFlightDetails(this.flightIdInput).subscribe(
    (list)=>{this.flightTripList=list}
  );
}


}
