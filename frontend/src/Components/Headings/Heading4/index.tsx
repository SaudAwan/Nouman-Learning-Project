import React from 'react'
type h2={
  children: string;
  width? : string;
  align?: string;
  color?:string;
  
}

const H4  = ({children, width , align,color}:h2) => {
  return (
    <h1 className={`text-[16px] font-bold leading-[19px] ${color? (color): "text-[#000000]"} ${width} ${align}`}>
      
      {children}
      
    </h1>
  )
}

export default H4;