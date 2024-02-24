import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightOwnerDashboardService {

  selected : string = 'flights';

  constructor() { }

  setSelected(input : string){
    this.selected = input;
  }

  getSelected(){
    return this.selected;
  }
}
