import React from 'react'
import HomePageHeadingBox from './HomePageHeadingBox '
import HomePageTextPicBox from './HomePageTextPicBox'
import mountainpic from "../../public/images/mountainpic.svg"

const OurMissionBox = () => {
  return (
    <div>
       <HomePageHeadingBox heading="Our Mission" mobFont="sm:text-[8px]"> 
       Increase the number of people who can afford to fly privately from 1% to at least 17% of the population. <br /> <br />


      
       Decrease the number of Private planes flying that are emitting 10 times the pollutants into our <br />
       
      atmosphere than commercial flights, by filling every seat on every private plane.   <br /> <br /> 

            Saving the environment one seat at a time.
      </HomePageHeadingBox>

      <HomePageTextPicBox image={mountainpic} height={374} width={655}>
      One out of every six flights that the <b>Federal Aviation Administration (FAA) </b>
      handles are flown by private jets. <br /> <br />

      Private jets emit at least 10 times more pollutants than commercial planes per
        passenger <br /> <br />

      The reason being is commercial flights are at 80% filled to capacity
       while private flights are at 23% filled to capacity. If Swoop can change
        the private jet travel capacity filled rates to 80%, we would be saving 
        the pollutant
        
      </HomePageTextPicBox>
      
    </div>
  )
}

export default OurMissionBox