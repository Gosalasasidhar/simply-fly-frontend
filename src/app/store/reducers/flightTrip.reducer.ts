
import {  createReducer, on } from "@ngrx/store";
import { FlightModule } from "src/app/models/flight/flightTrip.model";
import { addFlightTripAcction } from "../actions/flightTrip.action";




export interface flightTripState{
    flightTrips:FlightModule[];
}

export const initialState:flightTripState={
    flightTrips:[
        {
            id:"AIR-1",
            source:"HYD",
            destination:"DEL",
            departure: new Date(), // Current date and time
      arrival: new Date(),
            price:1000
        }
    ]
}


export const ToolsReducer=createReducer(
    initialState,
    on(addFlightTripAcction,(state,{flightTrip})=>({
        ...state,
        flightTrips:[...state.flightTrips,flightTrip]
    }))
   
)