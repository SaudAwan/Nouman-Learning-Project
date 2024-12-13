import React from 'react'
import IconImage from './Images'
type HomePageTextPic={
  children:string;
  image:string;
  height:number;
  width:number;
}
const HomePageTextPicBox = ({children, image, height,width}:HomePageTextPic) => {
  return (
    <div>
       <div>
        {children}
       </div> 
       <div>
        <IconImage imgsrc={image} imgwidth={width} imgheight={height} imgalt="planeInterior"/>
       </div>
    </div>
  )
}

export default HomePageTextPicBox