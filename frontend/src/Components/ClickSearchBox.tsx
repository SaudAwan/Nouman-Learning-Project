import React from 'react'
import IconImage from "./Images"
import mapimage from "../../public/images/mapimage.svg"
import planeOne from "../../public/images/plane1.svg"
import planeTwo from "../../public/images/plane2.svg"
import planeThree from "../../public/images/plane3.svg"
import Card from './Card'

const ClickSearchBox = () => {
  return (
    <div className="flex justify-center flex-col items-centre">
         
         <div className='flex gap-6'>
          <Card planeImage={planeOne} Heading="Los Angeles to San Francisco" DepartureDate="Jan 25/2024" Seats={03} AircraftName="Light Jet" SeatPrice={3000}/>
          <Card planeImage={planeTwo} Heading="New York to Miami" DepartureDate="Feb 12/2024" Seats={05} AircraftName="Medium Jet" SeatPrice={5000} />
          <Card planeImage={planeThree} Heading="London to Paris" DepartureDate="Mar 05/2024" Seats={02} AircraftName="Small Jet" SeatPrice={2500} />
         </div>

      <div>
       {/* IconImage component imported from images component   */}

        <IconImage imgsrc={mapimage} imgwidth={1240} imgheight={340} imgalt="map Image"/>
        </div>
    </div>
  )
}

export default ClickSearchBox
