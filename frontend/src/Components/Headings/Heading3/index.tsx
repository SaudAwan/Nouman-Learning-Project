import React, { ReactNode } from 'react'
type h3={
  children: ReactNode;
  width? : string;
  align?: string;
  color?:string;
  
}

const H3  = ({children, width , align,color}:h3) => {
  return (
    <h3 className={`lg:text-[20px] font-semibold lg:leading-[24px]  ${color? (color): "text-[#000000]"} ${width} ${align}`}>
      
      {children}
      
    </h3>
  )
}

export default H3;