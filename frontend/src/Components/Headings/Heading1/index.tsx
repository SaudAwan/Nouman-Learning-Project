import React from 'react'
type h1={
  children: string;
  width? : string;
  align?: string;
  color:string;
  
}

const H1  = ({children, width , align,color}:h1) => {
  return (
    <h1 className={`text-[40px] font-bold leading-[48px] ${color} ${width} ${align}`}>
      
      {children}
      
    </h1>
  )
}

export default H1;