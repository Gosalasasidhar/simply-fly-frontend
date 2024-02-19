import { Component } from '@angular/core';
import { FlightModule } from '../models/flight/flightTrip.model';
import { Store } from '@ngrx/store';
import { addFlightTripAcction } from '../store/actions/flightTrip.action';

@Component({
  selector: 'app-flight-trip',
  templateUrl: './flight-trip.component.html',
  styleUrls: ['./flight-trip.component.css']
})
export class FlightTripComponent {

  flight: FlightModule = {
    id: '',
    source: '',
    destination: '',
    departure: new Date(),
    arrival: new Date(),
    price: 0
  };

    flightTripList:FlightModule[]=[];
    constructor(private store:Store<{flightTrips:{flightTrips:FlightModule[]}}>){
      store.select('flightTrips').subscribe((flightTripsState:{flightTrips:FlightModule[]})=>{
        this.flightTripList=flightTripsState.flightTrips;
        console.log(this.flightTripList);
      })
  }

 addflightList(){
  console.log(this.flight.arrival)
  console.log(this.flight.source)
  this.store.dispatch(addFlightTripAcction({flightTrip:this.flight}))
 }

}
