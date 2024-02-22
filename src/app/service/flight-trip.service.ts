import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { flightTrip } from '../models/flightTrip';


@Injectable({
  providedIn: 'root'
})
export class FlightTripService {

  constructor(private http:HttpClient) { }

  baseUrl:string="http://localhost:8080/simply-fly/";


  getAllFlightDetails(flightId: string): Observable<flightTrip[]> {
    const token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrdW1hcjEyMyIsImlhdCI6MTcwODQ1MjQ5OCwiZXhwIjoxNzA4NDU0Mjk4fQ.V3PKXyRQPaExC_ffO83th4_Cu6JVo0y4IqFRaBHzjmk";
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    }).set("Authorization", token);
    return this.http.get<flightTrip[]>(`${this.baseUrl}flightTrips/get-all-flight-details/${flightId}`, { headers,responseType:'json'});
  }
}
