import React from 'react'
import H1 from './Headings/Heading1'
import TextMain from './Headings/TextMain'

type heading={
  heading:string;
  children:string;
}
const HomePageHeadingBox = ({heading,children}:heading) => {
  return (
    <div className='bg-[#121212] py-5 px-48 flex flex-col gap-2'>

      
   <H1 align="text-center" color='text-[#FFFFFF]'> {heading} </H1>
    
   


     <TextMain weight="font-light" color="text-[#FFFFFF]" width='w-[1048px] ' align="text-center">
      
      {children}
      
     </TextMain>
     
    </div>
  )
}

export default HomePageHeadingBox ;