import React from 'react'
import H1 from "./Headings/Heading1"
import TextMain from "./Headings/TextMain"



const LeaderPrivateAviation  = () => {
  return (
    <div className="bg-[#F7F7F7] lg:py-12 lg:px-36 lg:gap-8 sm:p-5 flex justify-center md:items-center sm:flex-col md:gap-7 md:p-7">

      <div>
            <H1 width="lg:w-96 md:w-72 sm:w-56" color='text-[#121212]'>
              THE LEADER IN PRIVATE AVIATION
            </H1>   

            <TextMain letterSpacing="tracking-[4px]" weight="font-light" color="text-[#121212]">

              FLY PRIVATE WITH CONFIDENCE
              </TextMain>    
              
      </div>


      <div className='sm:mt-4'>

      <TextMain weight="font-medium" width="lg:w-[685px] md:w-[406px]" color="text-[#121212]">

        

      Swoop is an innovative Marketplace in the private jet travel industry. Swoop is a completely new 
      and common-sense business model based on the wants & needs of private jet charter
      customers. Swoop allow customers to initiate a private jet travel trip with departure city,
      destination city, and date of travel. <br /> <br /> 

      Swoop innovated engine connects customers who have signed up to be able to book seats on a
      private jet. If a customer finds and initiated flight that they would like to purchase seats for, they 
      will simply tap on the seats they want to book on that jet and click confirm. That's it. You have
      now been swooped. <br /> <br /> 

      Swoop offers private jet travel to Americans in the top 17 percent of income earners. Currently, 
      only. 1% of Americans can afford to fly privately on a regular basis. Swoop is a Marketplace for 
      people who want to fly on a private jet but, either. <br /> <br />
           
           <span className='font-normal'>
           &nbsp; .&nbsp; Can't afford purchasing the entire jet <br />
           &nbsp; .&nbsp; Feel guilty flying on a jet with empty seats <br />
           &nbsp; .&nbsp; Are conscious of the carbon footprint effect from private jets <br />
           &nbsp; .&nbsp; Like to be social <br />
           &nbsp; .&nbsp; Like saving/making money
           </span>


      
      </TextMain>   

       
        

      </div>

    </div>
  )
}

export default LeaderPrivateAviation;