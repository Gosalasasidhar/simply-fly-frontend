import { Component } from '@angular/core';
import { flight } from 'src/app/model/flight.model';

@Component({
  selector: 'app-manage-flights',
  templateUrl: './manage-flights.component.html',
  styleUrls: ['./manage-flights.component.css']
})
export class ManageFlightsComponent {

  flightsList : flight[] = [];

  
}
