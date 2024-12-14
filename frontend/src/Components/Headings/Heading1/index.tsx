import React, { ReactNode } from 'react'
type h1={
  children: ReactNode;
  width? : string;
  align?: string;
  color:string;
  
}

const H1  = ({children, width , align,color}:h1) => {
  return (
    <h1 className={`lg:text-[40px] font-bold lg:leading-[48px] md:leading-9 sm:leading-7 md:text-[30px] sm:text-[24px] ${color} ${width} ${align} `}>
      
      {children}
      
    </h1>
  )
}

export default H1;