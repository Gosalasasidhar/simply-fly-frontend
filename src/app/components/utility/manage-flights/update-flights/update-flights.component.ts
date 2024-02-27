import { Component, Input } from '@angular/core';
import { flight } from 'src/app/model/flight.model';

@Component({
  selector: 'app-update-flights',
  templateUrl: './update-flights.component.html',
  styleUrls: ['./update-flights.component.css']
})
export class UpdateFlightsComponent {

  @Input()
  selectedFlight!:flight;

}
