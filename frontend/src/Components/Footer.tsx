import React from 'react'
import companylogo from "../../public/icons/swoop-logo.svg"
import IconImage from './Images';
const Footer = () => {
  return (
    <footer className='w-full bg-[#121212] lg:py-12  md:py-7 lg:px-44 md:px-12 sm:p-5 flex md:justify-between items-center sm:flex-col'>
      <div>
      <IconImage imgsrc={companylogo} imgwidth={112} imgheight={30} imgalt="Company Logo"/>
      <p className='text-[#FFFFFF] lg:w-auto md:w-[340px] sm:w-[330px] lg:font-light lg:leading-5 md:leading-[14px] sm:leading-[12px] md:mt-9 lg:text-[16px] md:text-[12px] sm:text-[10px] sm:pt-2.5'>
        Every empty seat has its price on the environment and you. Stop <br />
        the waste and join Swoop on their mission to not only make <br />
        private travel more affordable but to have a big part in saving <br />
        our environment for years to come.
      </p>
      </div>
      <div className='flex justify-between md:w-56 sm:w-44 sm:mr-36 sm:mt-3.5'>
        <div>
          <ul className='text-[#FFFFFF] lg:leading-5 md:leading-[14px] sm:leading-[12px] font-light lg:text-[16px] md:text-[12px] sm:text-[10px]'>
            <li className='font-bold pb-3 lg:text-[16px] md:text-[14px] sm:text-[14px] lg:leading-5 md:leading-4 sm:leading-4'>About Us</li>
            <li className='pb-3'>About Us</li>
            <li className='pb-3'>How it work</li>
            <li className='pb-3'>FAQs</li>
            <li className='pb-3'>Contact</li>
          </ul>
        </div>
        <div>
          <ul className='text-[#FFFFFF] lg:leading-5 md:leading-[14px] sm:leading-[12px] font-light lg:text-[16px] md:text-[12px] sm:text-[10px]'>
            <li className='font-bold pb-3 lg:text-[16px] md:text-[14px] sm:text-[14px] lg:leading-5 md:leading-4 sm:leading-4'>Get started</li>
            <li className='pb-3'>Private Jet</li>
            <li className='pb-3'>Register</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;