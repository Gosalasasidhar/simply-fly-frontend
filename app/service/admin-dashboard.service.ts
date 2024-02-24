import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService{
  selected : string = 'airports';

  constructor() { }

  setSelected(input : string){
    this.selected = input;
  }

  getSelected() : string{
    return this.selected;
  }
}
