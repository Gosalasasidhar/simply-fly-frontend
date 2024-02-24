import { Component } from '@angular/core';
import { flightTrip } from 'src/app/model/flightTrip.model';

@Component({
  selector: 'app-manage-flight-trips',
  templateUrl: './manage-flight-trips.component.html',
  styleUrls: ['./manage-flight-trips.component.css']
})
export class ManageFlightTripsComponent {
  flightTripsList : flightTrip[] = [];
}
