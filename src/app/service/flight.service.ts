import { Injectable } from '@angular/core';
import { flight } from '../model/flight.model';
import { HttpClient } from '@angular/common/http';
import { FlightOwnerDashboardService } from './flight-owner-dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  updateFlight(selectedflight: flight) {
    return this.dashboardService.updateFlight(selectedflight);
  }

  constructor(private dashboardService : FlightOwnerDashboardService) {}

  getAllFlights() {
     return this.dashboardService.getAllFlights();
  }

}
