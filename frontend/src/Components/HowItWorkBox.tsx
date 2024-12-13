import React from 'react'
import HomePageHeadingBox from './HomePageHeadingBox '
import HomePageTextPicBox from './HomePageTextPicBox'
import planeInterior from "../../public/images/planeInterior.svg"
import menandwomenpic from "../../public/images/MenandWomen.svg"
const HowItWorkBox = () => {
  return (
    <div>
      <HomePageHeadingBox heading="How it Works"> 
      Swoop is a marketplace that allows a jet charterer or a flight initiator to offers seats for sale to the public.
      The jet charterer or the flight initiator offers available seats on a jet allowing Swoop members and Non-members to purchase a seat
      or seats on a given flight.
      </HomePageHeadingBox>
      
     <HomePageTextPicBox image={planeInterior} height={425} width={760}>

     The Swoop members, non-members, and flight initiators are all 
     screened and preferences are defined upfront so that the jet 
     charterer and the seat purchasers are compatible. We don't want a 
     jet charterer who likes to sleep on the plane matched up with 
     someone who likes to crank the music and drink alcohol.

     The swoop member or non-member logs on to Swoop and finds a 
     flight that they would like to take. Click on “book now” and you are on
      your way.

      Drive to the departure private airport 30 minutes before departure,
       valet your car, walk to your jet and grab a seat. No crowds, no
        security lines. Just a non-invasive security screening to insure your
         safety and other passengers.
       </HomePageTextPicBox>
       <HomePageTextPicBox image={menandwomenpic} height={548} width={679}>
       Why Use Swoop for your private jet travel?
          </HomePageTextPicBox>

    </div>
  )
}

export default HowItWorkBox