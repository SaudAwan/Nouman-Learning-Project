import React, { Dispatch, SetStateAction } from 'react'
import ImageWrapper from './Image'
import loginImage from "../../public/images/loginImage.svg" 
import Bell from "../../public/icons/Whitebell.svg"

 type loginuser ={
  setLogin: Dispatch<SetStateAction<boolean>>;
}

const LoginUser = ({ setLogin}: loginuser) => {
  
  return (
    <div className='flex gap-3'>
      <ImageWrapper imgsrc={Bell} imgwidth={24} imgheight={29} imgalt='Bell' />
      <ImageWrapper imgsrc={loginImage } imgwidth={36} imgheight={36} imgalt='User pic' setLogin={setLogin} />



    </div>
  )
}

export default LoginUser
