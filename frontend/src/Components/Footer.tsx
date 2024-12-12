import React from 'react'
import companylogo from "../../public/icons/swoop-logo.svg"
import IconImage from './Images/Image';
const Footer = () => {
  return (
    <footer className='w-full bg-[#121212] py-12 px-44 flex justify-between items-center'>
      <div>
      <IconImage imgsrc={companylogo} imgwidth={112} imgheight={30} imgalt="Company Logo"/>
      <p className='text-[#FFFFFF] font-light leading-5 mt-9'>
        Every empty seat has its price on the environment and you. Stop <br />
        the waste and join Swoop on their mission to not only make <br />
        private travel more affordable but to have a big part in saving <br />
        our environment for years to come.
      </p>
      </div>
      <div className='flex justify-between w-56'>
        <div>
          <ul className='text-[#FFFFFF] leading-5 font-light'>
            <li className='font-bold pb-3'>About Us</li>
            <li className='pb-3'>About Us</li>
            <li className='pb-3'>How it work</li>
            <li className='pb-3'>FAQs</li>
            <li className='pb-3'>Contact</li>
          </ul>
        </div>
        <div>
          <ul className='text-[#FFFFFF] leading-5 font-light'>
            <li className='font-bold pb-3'>Get started</li>
            <li className='pb-3'>Private Jet</li>
            <li className='pb-3'>Register</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;