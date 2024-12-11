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
};

const SimpleButton: React.FC<prop> = (props) => {
  const {text,bgcolor,width,textcolor,padding_X,padding_Y,textalign,borderradius}=props;
  return (
    <button className={`${width} ${bgcolor} ${padding_X} ${padding_Y} ${textcolor} ${borderradius} ${textalign}`}>
      {text}
    </button>
  )
}

export default SimpleButton