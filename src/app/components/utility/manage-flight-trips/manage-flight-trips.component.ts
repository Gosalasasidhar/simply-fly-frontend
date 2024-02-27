import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { flightTrip } from 'src/app/model/flightTrip.model';
import { FlightOwnerDashboardService } from 'src/app/service/flight-owner-dashboard.service';

@Component({
  selector: 'app-manage-flight-trips',
  templateUrl: './manage-flight-trips.component.html',
  styleUrls: ['./manage-flight-trips.component.css']
})
export class ManageFlightTripsComponent implements OnInit{
  @Input() flightcode!:string
 


  flightTripsList : flightTrip[] = [];

  constructor(private dashboardService : FlightOwnerDashboardService, private route : ActivatedRoute) {} 

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.flightcode = params['flightcode'];
      this.getFlightTrips();
    });
  }

  getFlightTrips() {
    this.dashboardService.findByFlightId(this.flightcode).subscribe((list) => {
      this.flightTripsList = list.map(trip => ({ ...trip, isEditing: false }));
    });
  }
}
