import React, { ReactNode } from 'react'
import IconImage from './Images'
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
    <div className={`flex ${flexdirection}`}>
      <div className='p-14'>
       <TextMain width='w-[480px]' >
        
        {children}

       </TextMain> 

       </div>
       <div className=''>
        <IconImage imgsrc={image} imgwidth={width} imgheight={height} imgalt="planeInterior"/>
       </div>
    </div>
  )
}

export default HomePageTextPicBox