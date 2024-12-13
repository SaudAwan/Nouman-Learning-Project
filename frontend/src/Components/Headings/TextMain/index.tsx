import React, { ReactNode } from 'react'

type textmain ={
  children: ReactNode;
  letterSpacing?: string;
  weight: string;
  width?:string;
}

const TextMain = ({children, letterSpacing,weight, width}:textmain ) => {
  return (
    <p className={` ${weight} leading-[19px] text-[#121212] ${letterSpacing} ${width}`}>
      {children}
    </p>
  )
}

export default TextMain