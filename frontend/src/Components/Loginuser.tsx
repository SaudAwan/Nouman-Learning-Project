import React, { Dispatch, SetStateAction } from 'react'
import IconImage from './Images' 
import loginImage from "../../public/images/loginImage.svg" 
import Bell from "../../public/icons/Whitebell.svg"

 type loginuser ={
  setLogin: Dispatch<SetStateAction<boolean>>;
}

const LoginUser = ({ setLogin}: loginuser) => {
  
  return (
    <div className='flex gap-3'>
      <IconImage imgsrc={Bell} imgwidth={24} imgheight={29} imgalt='Bell' />
      <IconImage imgsrc={loginImage } imgwidth={36} imgheight={36} imgalt='User pic' setLogin={setLogin} />



    </div>
  )
}

export default LoginUser
