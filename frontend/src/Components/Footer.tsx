import React from 'react'
import companylogo from "../../public/icons/swoop-logo.svg"
import IconImage from './Images';
const Footer = () => {
  return (
    <footer className='w-full bg-[#121212] lg:py-12  md:py-7 lg:px-44 md:px-12 flex justify-between items-center'>
      <div>
      <IconImage imgsrc={companylogo} imgwidth={112} imgheight={30} imgalt="Company Logo"/>
      <p className='text-[#FFFFFF] lg:w-auto md:w-[340px] lg:font-light lg:leading-5 md:leading-[14px] sm:leading-[12px] mt-9 lg:text-[16px] md:text-[12px] sm:text-[10px]'>
        Every empty seat has its price on the environment and you. Stop <br />
        the waste and join Swoop on their mission to not only make <br />
        private travel more affordable but to have a big part in saving <br />
        our environment for years to come.
      </p>
      </div>
      <div className='flex justify-between w-56'>
        <div>
          <ul className='text-[#FFFFFF] lg:leading-5 md:leading-[14px] font-light lg:text-[16px] md:text-[12px]'>
            <li className='font-bold pb-3 lg:text-[16px] md:text-[14px] lg:leading-5 md:leading-4'>About Us</li>
            <li className='pb-3'>About Us</li>
            <li className='pb-3'>How it work</li>
            <li className='pb-3'>FAQs</li>
            <li className='pb-3'>Contact</li>
          </ul>
        </div>
        <div>
          <ul className='text-[#FFFFFF] lg:leading-5 md:leading-[14px] font-light lg:text-[16px] md:text-[12px]'>
            <li className='font-bold pb-3 lg:text-[16px] md:text-[14px] lg:leading-5 md:leading-4'>Get started</li>
            <li className='pb-3'>Private Jet</li>
            <li className='pb-3'>Register</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;