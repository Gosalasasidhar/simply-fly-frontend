import { createAction, props } from "@ngrx/store";
import { FlightModule } from "src/app/models/flight/flightTrip.model";


export const addFlightTripAcction=createAction(
    '[FlightTrips]  Add FlightTrip',
    props<{flightTrip:FlightModule}>()
)

export const updateFlightTripAcction=createAction(
    '[FlightTrips]  Update FlightTrip',
    props<{price:number}>()
)

export const rmeoveFlightTripAcction=createAction(
    '[FlightTrips]  Remove FlightTrip',
    props<{id:string}>()
)

