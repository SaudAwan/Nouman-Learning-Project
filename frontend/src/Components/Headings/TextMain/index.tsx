import React, { ReactNode } from 'react'

type textmain ={
  children: ReactNode;
  letterSpacing?: string;
  weight: string;
  width?:string;
  color: string;
  align?: string;
}

const TextMain = ({children, letterSpacing,weight, width,color , align}:textmain ) => {
  return (
    <p className={` ${weight} leading-[19px] ${color} ${letterSpacing} ${width} ${align}`}>
      {children}
    </p>
  )
}

export default TextMain