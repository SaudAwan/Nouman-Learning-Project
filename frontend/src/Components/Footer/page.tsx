import React from 'react'
import companylogo from "../../../public/icons/swoop-logo.svg"
import IconImage from '../IconImage/page';
const Footer = () => {
  return (
    <footer className='w-full bg-[#121212] py-12 px-44'>
      <div>
      <IconImage imgsrc={companylogo} imgwidth={112} imgheight={30} imgalt="Company Logo"/>
      <p className='text-[#FFFFFF] font-light leading-5 mt-9'>
        Every empty seat has its price on the environment and you. Stop <br />
        the waste and join Swoop on their mission to not only make <br />
        private travel more affordable but to have a big part in saving <br />
        our environment for years to come.
      </p>
      </div>
      <div className='flex'>
        <div>
          <ul className='text-[#FFFFFF] leading-5'>
            <li className='font-bold'>About Us</li>
            <li>About Us</li>
            <li>How it work</li>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <ul className='text-[#FFFFFF] leading-5'>
            <li className='font-bold'>Get started</li>
            <li>Private Jet</li>
            <li>Register</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;