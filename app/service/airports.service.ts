import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { airports } from '../model/airport.model';

@Injectable({
  providedIn: 'root',
})
export class AirportsService {
  constructor(private http: HttpClient) {}

  baseURL: string = 'http://localhost:8080/simply-fly/admin/list-all-airports';

  getAirports(): Observable<airports[]> {
    return this.http.get<airports[]>(this.baseURL);
  }
}
