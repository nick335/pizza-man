import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className=' bg-NavBg pt-10 pb-4 w-full overflow-hidden'>
      <div className='layout'>
        <div className="md:flex md:justify-between">
          <div className=' flex flex-col items-center text-center justify-center xsm:text-start xsm:flex-row xsm:items-center xsm:justify-between xsm:w-[97%] mx-auto sm:w-[70%] md:w-[55%] md:mx-0'>
            <div>
              <h3 className='footerHeader tracking-wider'>Company</h3>
              <ul className='mt-4'>
                <li className='footerLi'>About Us</li>
                <li className='footerLi'>faq</li>
                <li className='footerLi'>Contact us</li>
              </ul>
            </div>
            <div>
              <h3 className='footerHeader tracking-wider'>Legal</h3>
              <ul className='mt-4'>
                <li className='footerLi'>terms & condition</li>
                <li className='footerLi'>privacy policy</li>
                <li className='footerLi'>disclaimer</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className='footerHeader text-center mt-9 md:mt-0 '>Social Media</h3>
            <div className='mt-4 flexCenter gap-16 md:gap-10 lg:gap-16 lg:mt-6'>
              <FontAwesomeIcon className='socialIcons text-facebook' icon={faFacebookF} />
              <FontAwesomeIcon className='socialIcons text-twitter' icon={faTwitter} />
              <FontAwesomeIcon className='socialIcons insta' icon={faInstagram} />
              <FontAwesomeIcon className='socialIcons text-youtube' icon={faYoutube} />
            </div>
          </div>
        </div>
        <div>
          <p className='text-center font-sans font-medium text-sm mt-11'>COPYRIGHT © 2023 TAP FOODWORKS LTD. | ALL RIGHTS RESERVED</p>
        </div>
      </div>
      
    </footer>
  )
}
