import React from 'react'
import ImageWrapper from './Image'
import departureIcon from "../../public/icons/departure icon.svg"
import Seaticon from "../../public/icons/Seat.svg"
import Aircrafticon from "../../public/icons/Aircraft.svg"
import H3 from './Headings/Heading3'
import H4 from './Headings/Heading4'
import TextMain from './Headings/TextMain'
import SimpleButton from './Buttons/SimpleButton'


type card={
  planeImage:string;
  Heading:string;
  DepartureDate:string;
  Seats:string;
  AircraftName:string;
  SeatPrice:number;
  buttonText:string;
}


const Card = ({planeImage, Heading, DepartureDate, Seats, AircraftName, SeatPrice, buttonText }:card) => {
  return (
    <div className='lg:w-[368px] lg:h-[487px] border rounded-[10px] p-6 flex flex-col justify-between items-center ' >
     
     <div>
     <ImageWrapper imgsrc={planeImage} imgwidth={320} imgheight={180} imgalt="Plane Image"/>
     </div>

     <div className='flex flex-col gap-3 border-b w-80' >
      <H3>
        {Heading}
        </H3>

        <div className='flex justify-between'>

          <div className='flex gap-1' >

          <ImageWrapper imgsrc={departureIcon} imgwidth={16} imgheight={16} imgalt="Departure Icon"/>
          
          <H4> Daparture Date   </H4>

          </div>

          <div>

            <TextMain>{DepartureDate}</TextMain>

          </div>

        </div>


        <div className='flex justify-between'>

          <div className='flex gap-1' >

          <ImageWrapper imgsrc={Seaticon} imgwidth={16} imgheight={16} imgalt="Seat Icon"/>
          
          <H4> Seats Available   </H4>

          </div>

          <div>

            <TextMain>{Seats}</TextMain>

          </div>

        </div>



        <div className='flex justify-between'>

          <div className='flex gap-1' >

          <ImageWrapper imgsrc={Aircrafticon} imgwidth={16} imgheight={16} imgalt="Aircraft Icon"/>
          
          <H4> Aircraft  </H4>

          </div>

          <div>

            <TextMain>{AircraftName}</TextMain>

          </div>

        </div>



        <div className='flex justify-between mb-3'>

          <div className='flex gap-1' >

          <ImageWrapper imgsrc={Seaticon} imgwidth={16} imgheight={16} imgalt="Seat Icon"/>
          
          <H4> Seat Price  </H4>

          </div>

          <div>

            <TextMain>${SeatPrice}</TextMain>

          </div>

        </div>

     </div>

     <div>
             <SimpleButton text={buttonText} bgcolor="bg-[#FED130]" width="w-[141px]" textcolor="text-[#121212]" padding_X="px-6" padding_Y="py-3.5" textalign="text-center" borderradius="rounded-md"  lineheight="leading-[19px]" />
     </div>

    </div>
  )
}

export default Card