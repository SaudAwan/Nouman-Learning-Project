"use client";
import SimpleButton from "./Buttons/SimpleButton";
import companylogo from "../../public/icons/swoop-logo.svg"
import IconImage from "./Images";
import searchicon from "../../public/icons/search.svg"
import { useState } from "react";
import LoginUser from "./LoginUser"


const Navbar=()=>{
  const [Login, setLogin]=useState<boolean>(false);
return(
  <div className="w-full h-[79px] bg-[#0E0F11] py-4 px-[50px] flex justify-between items-center ">
    <IconImage imgsrc={companylogo} imgwidth={88} imgheight={24} imgalt="Company Logo"/>

    <div className="w-1/2 flex justify-between items-center">
      <ul className="w-full flex justify-evenly items-center ">
        <li className="text-[#FFFFFF] font-extrabold leading-5">Home</li>
        <li className={`text-[#BBBBBB] ${Login? "hidden" : ""} `}>About us</li>
        <li className="text-[#BBBBBB]">{Login? "Dashboard" :"How it works"}</li>
        <li className="text-[#BBBBBB]">{Login? "Marketplace":"Why use Swoop"}</li>
        <li className="text-[#BBBBBB]">{Login? "FBO Flights" :"Our Mission"}</li>
        <li className="text-[#BBBBBB] flex items-center justify-between"> <IconImage imgsrc={searchicon} imgwidth={16} imgheight={16} imgalt="search icon"/> &nbsp; Free Search</li>
      </ul>
    </div>

    <div className={`${Login? "" : "w-52" } flex justify-evenly`}>
      { Login ? (<LoginUser setLogin={setLogin} />) : (
        <>
       <SimpleButton setLogin={setLogin} text="Log in" width="w-auto" bgcolor="bg-[#FFFFFF]" textcolor="text-[#121212]" lineheight="leading-5" fontsize="text-sm" weigth="font-normal" borderradius="rounded-md" padding_X="px-[24px]" padding_Y="py-[14px]" textalign="text-center" hover="hover:bg-[#0E0F11]  hover:text-white"/>
       <SimpleButton text="Sign up" width="w-auto" bgcolor="bg-[#FED130]" textcolor="text-[#121212]" lineheight="leading-5" fontsize="text-sm" weigth="font-normal" borderradius="rounded-md" padding_X="px-[24px]" padding_Y="py-[14px]" textalign="text-center" hover="hover:bg-[#0E0F11]  hover:text-white"/>
       </> 
      )
      }
       </div>
  </div>

)
}

export default Navbar;