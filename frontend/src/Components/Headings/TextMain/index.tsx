import React, { ReactNode } from 'react'

type textmain ={
  children: ReactNode;
  letterSpacing?: string;
  weight?: string;
  width?:string;
  color?: string;
  align?: string;
}

const TextMain = ({children, letterSpacing,weight, width,color , align}:textmain ) => {
  return (
    <p className={` ${weight} lg:leading-[19px] md:leading-[14px] sm:leading-[12px] lg:text-[16px] md:text-[12px] sm:text-[10px] ${color? (color): "text-[#000000]"} ${letterSpacing} ${width} ${align}`}>
      {children}
    </p>
  )
}

export default TextMain