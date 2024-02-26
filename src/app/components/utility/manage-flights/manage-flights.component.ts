import { Component } from '@angular/core';
import { flight } from 'src/app/model/flight.model';
import { FlightService } from 'src/app/service/flight.service';

@Component({
  selector: 'app-manage-flights',
  templateUrl: './manage-flights.component.html',
  styleUrls: ['./manage-flights.component.css'],
})
export class ManageFlightsComponent {
  flightsList: flight[] = [];

  constructor(private flightservice: FlightService) {}

  ngOnInit() {
    this.getAllFlights();
  }

  getAllFlights() {
    this.flightservice
      .getAllFlights()
      .subscribe((list) => (this.flightsList = list));
  }
}
