import React from 'react'
import ImageWrapper from './Image'
import H3 from './Headings/Heading3'
import H4 from './Headings/Heading4'
import departureIcon from "../../public/icons/departure icon.svg"
import Seaticon from "../../public/icons/Seat.svg"
import Aircrafticon from "../../public/icons/Aircraft.svg"
import stopCircle from "../../public/images/StopCircle.svg"
import TickSign from "../../public/images/TickSign.svg"
import TextMain from './Headings/TextMain'
import SimpleButton from './Buttons/SimpleButton'

type FlightDetail = {
  DestinationHeading: string;
  DepartureDate: string;
  Seats: string;
  AircraftType: string;
  NumberOfStops: string;
  SaetPrice: number;
  flightImage: string;
}

const FlightDetailCard: React.FC<FlightDetail> = ({ DestinationHeading, DepartureDate, Seats, AircraftType, NumberOfStops, SaetPrice, flightImage }) => {
  return (
    <div className='border border-[#DEE2E6] p-6 rounded-md flex items-center justify-evenly w-[1148px] h-48' >

      <div>
        <ImageWrapper imgsrc={flightImage} imgwidth={200} imgheight={150} imgalt="PlaneImage" />
      </div>

      <div>
        {/* destination heading box */}
        <div className='mb-4'>
          <H3>
            {DestinationHeading}
          </H3>
        </div>

        {/* flight detail box */}
        <div className='flex gap-7'>
          <div className='flex flex-col items-center'>

            <div className="flex gap-2 ">
              <ImageWrapper imgsrc={departureIcon} imgwidth={16} imgheight={16} imgalt="Departure Icon" />
              <H4>Departure Date</H4>

            </div>
            <TextMain>
              {DepartureDate}
            </TextMain>


          </div>

          <div className='flex flex-col items-center'>

            <div className="flex gap-2 ">
              <ImageWrapper imgsrc={Seaticon} imgwidth={16} imgheight={16} imgalt="Seat Icon" />
              <H4>Seats Available</H4>

            </div>
            <TextMain>
              {Seats}
            </TextMain>

          </div>

          <div className='flex flex-col items-center'>

            <div className="flex gap-2 ">
              <ImageWrapper imgsrc={Aircrafticon} imgwidth={16} imgheight={16} imgalt="Aircraft Icon" />
              <H4>Aircraft Type</H4>

            </div>
            <TextMain>
              {AircraftType}
            </TextMain>


          </div>

          <div className='flex flex-col items-center gap-1'>

            <div className="flex gap-2 ">
              <ImageWrapper imgsrc={stopCircle} imgwidth={16} imgheight={16} imgalt="Stop Circle Icon" />
              <H4>Number of Stops</H4>

            </div>
            <TextMain>
              {NumberOfStops}
            </TextMain>


          </div>


        </div>


        <div className="flex gap-2 mt-5 ">
            <ImageWrapper imgsrc={TickSign} imgwidth={16} imgheight={16} imgalt="Tick Circle Icon" />
            <TextMain>picking you up at your nearest airport for an extra fee</TextMain>
          </div>


      </div>

      {/* button and price container  */}
      <div>
            
         <div className='flex flex-col items-end gap-[3px}'>
         <TextMain>Seat Price</TextMain>
         <H3>
            ${SaetPrice}
          </H3>
         </div>

         <SimpleButton text="View Details" bgcolor="bg-[#FED130]" textcolor="text-[#121212]" padding_X="px-6" 
         padding_Y="py-3.5" textalign="text-center" borderradius="rounded-md" lineheight="leading-5"/>

      </div>



    </div>
  )
}

export default FlightDetailCard