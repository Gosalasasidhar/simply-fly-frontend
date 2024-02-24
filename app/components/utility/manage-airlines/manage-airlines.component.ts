import { Component } from '@angular/core';
import { airline } from 'src/app/model/airline.model';
import { AirlinesService } from 'src/app/service/airlines.service';

@Component({
  selector: 'app-manage-airlines',
  templateUrl: './manage-airlines.component.html',
  styleUrls: ['./manage-airlines.component.css']
})
export class ManageAirlinesComponent {
  airlinesList : airline[] = [
    {
      'id' : 'AI',
      "name" : "Air India"
    }
  ];

  constructor(private airlineService : AirlinesService){}

  getAirlinesList(){
    this.airlineService.getAirlines().subscribe((list) => this.airlinesList = list);
  }
}
