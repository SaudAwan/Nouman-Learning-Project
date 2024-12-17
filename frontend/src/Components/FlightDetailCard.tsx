import React from 'react'
import ImageWrapper from './Image'
import H3 from './Headings/Heading3'
import H4 from './Headings/Heading4'
import departureIcon from "../../public/icons/departure icon.svg"
import Seaticon from "../../public/icons/Seat.svg"
import Aircrafticon from "../../public/icons/Aircraft.svg"
import stopCircle from "../../public/images/StopCircle.svg"
import TextMain from './Headings/TextMain'

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
    <div className='border border-[#DEE2E6] p-6 rounded-md' >

      <div>
        <ImageWrapper imgsrc={flightImage} imgwidth={200} imgheight={150} imgalt="PlaneImage" />
      </div>

      <div>
        {/* destination heading box */}
        <div>
          <H3>
            {DestinationHeading}
          </H3>
        </div>

        {/* flight detail box */}
        <div>
          <div>

            <div>
              <ImageWrapper imgsrc={departureIcon} imgwidth={16} imgheight={16} imgalt="Departure Icon" />
              <H4>Departure Date</H4>

            </div>
            <TextMain>
              {DepartureDate}
            </TextMain>


          </div>

          <div>

            <div>
              <ImageWrapper imgsrc={Seaticon} imgwidth={16} imgheight={16} imgalt="Seat Icon" />
              <H4>Seats Available</H4>

            </div>
            <TextMain>
              {Seats}
            </TextMain>

          </div>

          <div>

          <div>
              <ImageWrapper imgsrc={Aircrafticon} imgwidth={16} imgheight={16} imgalt="Aircraft Icon" />
              <H4>Aircraft Type</H4>

            </div>
            <TextMain>
              {AircraftType}
            </TextMain>
          

          </div>

          <div>

          <div>
              <ImageWrapper imgsrc={stopCircle} imgwidth={16} imgheight={16} imgalt="Stop Circle Icon" />
              <H4>Number of Stops</H4>

            </div>
            <TextMain>
              {NumberOfStops}
            </TextMain>


          </div>



        </div>


        <div></div>


      </div>

    </div>
  )
}

export default FlightDetailCard