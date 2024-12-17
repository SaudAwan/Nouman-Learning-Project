import React, { ReactNode } from 'react'
import ImageWrapper from './Image'
import TextMain from './Headings/TextMain'
type HomePageTextPic={
  children:ReactNode;
  image:string;
  height:number;
  width:number;
  flexdirection?:string;
}
const HomePageTextPicBox = ({children, image, height,width,flexdirection}:HomePageTextPic) => {
  return (
    <div className={`flex ${flexdirection} md:flex-nowrap sm:flex-wrap `}>
      <div className='lg:p-14 md:p-8 lg:w-[694px] md:[450px] bg-[#F3F5F9]'>
       <TextMain width='lg:w-[555px] md:w-[320px]' padding='sm:p-5' >
        
        {children}

       </TextMain> 

       </div>
       <div className=''>
        <ImageWrapper imgsrc={image} imgwidth={width} imgheight={height} imgalt="planeInterior"/>
       </div>
    </div>
  )
}

export default HomePageTextPicBox