import React from 'react'
type prop = {
text: string;
bgcolor: string;
width:string;
textcolor:string;
textalign:string;
padding_X:string;
padding_Y:string;
borderradius:string;
lineheight:string;
weigth:string;
fontsize:string;
hover?:string;
};

const SimpleButton: React.FC<prop> = (props) => {
  const {text,bgcolor,width,textcolor,padding_X,padding_Y,textalign,borderradius,weigth,lineheight,fontsize,hover}=props;
  return (
    <button className={`${width} ${bgcolor} ${padding_X} ${padding_Y} ${textcolor} ${borderradius}  ${hover} `}>
     <p className={`${weigth} ${lineheight} ${textalign} ${fontsize}`}>{text}</p> 
    </button>
  )
}

export default SimpleButton  