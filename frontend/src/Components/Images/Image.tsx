import React from 'react'
import Image from 'next/image'

type imgprop={
  imgsrc:string;
  imgwidth:number;
  imgheight:number;
  imgalt:string;
}

const IconImage: React.FC<imgprop> = (props) => {
  const {imgsrc,imgwidth,imgheight,imgalt}=props;
  return (
    <div>
    <Image
      src={imgsrc}
      width={imgwidth}
      height={imgheight}
      alt={imgalt}
    />
  </div>
  )
}
export default IconImage;
