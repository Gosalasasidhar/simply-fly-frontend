import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTripComponent } from './flight-trip.component';

describe('FlightTripComponent', () => {
  let component: FlightTripComponent;
  let fixture: ComponentFixture<FlightTripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightTripComponent]
    });
    fixture = TestBed.createComponent(FlightTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
