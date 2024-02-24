import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { airline } from '../model/airline.model';

@Injectable({
  providedIn: 'root'
})
export class AirlinesService {

  constructor(private http : HttpClient) { }

  baseURL : string = 'http://localhost:8080/simply-fly/admin/list-all-airlines'

  getAirlines() : Observable<airline[]>{
    return this.http.get<airline[]>(this.baseURL);
  }
}
