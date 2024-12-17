"use client";
import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'

type imgprop={
  imgsrc:string;
  imgwidth:number;
  imgheight:number;
  imgalt:string;
  setLogin?: Dispatch<SetStateAction<boolean>>;

}

const ImageWrapper: React.FC<imgprop> = (props) => {
  const {imgsrc,imgwidth,imgheight,imgalt, setLogin}=props;
  function handleclick (){
    setLogin?.((prev)=>!prev);
   }
  return (
    // <div>
    <Image
      src={imgsrc}
      width={imgwidth}
      height={imgheight}
      alt={imgalt}

      onClick={handleclick}
    />
  // </div>
  )
}
export default ImageWrapper;
