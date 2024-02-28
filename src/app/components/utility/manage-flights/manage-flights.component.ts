import { Component } from '@angular/core';
import { flight } from 'src/app/model/flight.model';
import { FlightService } from 'src/app/service/flight.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminDashboardService } from 'src/app/service/admin-dashboard.service';
import { FlightOwnerDashboardService } from 'src/app/service/flight-owner-dashboard.service';
import { ManageFlightTripsComponent } from '../manage-flight-trips/manage-flight-trips.component';


@Component({
  selector: 'app-manage-flights',
  templateUrl: './manage-flights.component.html',
  styleUrls: ['./manage-flights.component.css'],
})
export class ManageFlightsComponent {


  flightsList: flight[] = [];
showFormBox: boolean=false;
selectedflight: flight = {} as flight;
flightForm!: FormGroup;
showflightTrips=false;
  constructor(private flightservice: FlightService,private fb: FormBuilder,private dashboardservice:FlightOwnerDashboardService,
   ) {
    this.flightForm = this.fb.group({
      cabinWeight: [0],
      checkInWeight: [0],
    });
  }

  ngOnInit() {
    
    this.getAllFlights();

    
  }

  getAllFlights() {
    this.flightservice
      .getAllFlights()
      .subscribe((list) => (this.flightsList = list));
  }

  openEditForm(flight: flight) {
    console.log("the method is called")
    this.selectedflight = { ...flight }; // Create a copy to isolate changes
    this.showFormBox = true;
    
  }

  closeEditForm() {
    this.selectedflight= {} as flight; // Reset state on close
    this.showFormBox = false;
    
  }

  onSubmit() {
    if (this.flightForm.valid) {
      // Update selected flight object with form values
      this.selectedflight.cabinWeight = this.flightForm.value.cabinWeight;
      this.selectedflight.checkInWeight = this.flightForm.value.checkInWeight;

      
       this.flightservice.updateFlight(this.selectedflight).subscribe((flight)=>this.selectedflight=flight);
       console.log(this.selectedflight.checkInWeight);
       this.getAllFlights();
    }
  }

  
  
}
