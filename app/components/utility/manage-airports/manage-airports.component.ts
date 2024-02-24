import { Component } from '@angular/core';
import { airports } from 'src/app/model/airport.model';
import { AirportsService } from 'src/app/service/airports.service';

@Component({
  selector: 'app-manage-airports',
  templateUrl: './manage-airports.component.html',
  styleUrls: ['./manage-airports.component.css']
})
export class ManageAirportsComponent {
  airportList : airports[] = [];

  constructor(private airportService : AirportsService){}

  getAirportList(){
    this.airportService.getAirports().subscribe((list) => this.airportList = list);
  }
}
