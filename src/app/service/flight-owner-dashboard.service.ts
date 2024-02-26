import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { flight } from '../model/flight.model';
import { flightTrip } from '../model/flightTrip.model';
import { flightSearch } from '../model/flightSearch.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightOwnerDashboardService {

  selected : string = 'flights';

  baseURL : string = 'http://localhost:8080/simply-fly';

  constructor(private http : HttpClient) { }

  private getHeaders() : HttpHeaders{
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
    )
  }

  setSelected(input : string){
    this.selected = input;
  }

  getSelected(){
    return this.selected;
  }

  getAllFlights() {
    return this.http.get<flight[]>(this.baseURL+'/flights/get-flights-by-username/'+localStorage.getItem('username'),{headers : this.getHeaders()})
  }

  updateFlightTrip(flighttrip: flightTrip) {
    return this.http.put<flightTrip>(this.baseURL+'/flightTrips/reschedule-flight/'+localStorage.getItem('username'),flighttrip,{headers : this.getHeaders()});
  }
  findByFlightId(flightcode: string) {
    return this.http.get<flightTrip[]>(this.baseURL+'/flightTrips/get-all-flight-details/'+flightcode,{headers : this.getHeaders()})
  }

  searchFlights(data : flightSearch) : Observable<flightTrip[]>{
    return this.http.get<flightTrip[]>(this.baseURL+'/flightTrips/search-flights-by-date-source-destination/'+data.date+'/'+data.source+'/'+data.destination);
  }

  
}
