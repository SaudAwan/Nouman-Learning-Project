import React from 'react'
import FlightDetailCard from './FlightDetailCard'
import FlightCardpic1 from "../../public/images/flightdetailpic1.svg"

const FlightDetails = () => {
  return (
    <div>
      <FlightDetailCard DestinationHeading="Islamabad, Pakistan TO Karachi, Pakistan" DepartureDate="Jan 25/2024" 
      Seats="08 Seats" AircraftType="Very Light Jet" NumberOfStops="0 Stops - ISB TO KHI" SaetPrice={2000} flightImage={FlightCardpic1}
      />
    </div>
  )
}

export default FlightDetails