import { Component } from '@angular/core';
import { flightSearch } from 'src/app/model/flightSearch.model';
import { flightTrip } from 'src/app/model/flightTrip.model';
import { FlightTripService } from 'src/app/service/flight-trip.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent {
  flightList : flightTrip[] = [];

  constructor(private service : FlightTripService){

  }

  searchFlight(formdata : flightSearch){
     this.service.searchFlights(formdata).subscribe((list) => this.flightList = list);
  }
}
