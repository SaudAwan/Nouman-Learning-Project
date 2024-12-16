import React, { ReactNode } from 'react'
type h4={
  children: ReactNode;
  width? : string;
  align?: string;
  color?:string;
  
}

const H4  = ({children, width , align,color}:h4) => {
  return (
    <h4 className={`lg:text-[16px] md:text-[14px] font-bold lg:leading-[19px] md:leading-[16px] ${color? (color): "text-[#000000]"} ${width} ${align}`}>
      
      {children}
      
    </h4>
  )
}

export default H4;