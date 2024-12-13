import React from 'react'
type h1={
  children: string;
  width : string;
  // Element?: IntrensicAttributes;
}

const H1  = ({children, width }:h1) => {
  return (
    <h1 className={`text-[40px] font-bold leading-[48px] text-[#121212] ${width}`}>
      
      {children}
      
    </h1>
  )
}

export default H1;