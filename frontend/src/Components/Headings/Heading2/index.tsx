import React from 'react'
type h2={
  children: string;
  width? : string;
  align?: string;
  color?:string;
  
}

const H2  = ({children, width , align,color}:h2) => {
  return (
    <h2 className={`lg:text-[24px] md:text-[16px] font-semibold lg:leading-[29px] md:leading-[19px] ${color? (color): "text-[#121212]"} ${width} ${align}`}>
      
      {children}
      
    </h2>
  )
}

export default H2;