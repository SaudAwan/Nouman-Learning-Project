import React from 'react'
type h2={
  children: string;
  width? : string;
  align?: string;
  color?:string;
  
}

const H2  = ({children, width , align,color}:h2) => {
  return (
    <h1 className={`text-[24px] font-semibold leading-[29px] ${color? (color): "text-[#121212]"} ${width} ${align}`}>
      
      {children}
      
    </h1>
  )
}

export default H2;