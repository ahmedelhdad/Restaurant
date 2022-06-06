import React from 'react'
import { FaFacebookF,FaLinkedin,FaPaypal,FaSkype,FaTelegramPlane } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
                <div className='container py-5'>
                <div className='row text-center'>
                    <div className='col-12'>
                        <a href='##' className='h5 text-decoration-none px-2'>Resgister</a>
                        <a href='##' className='h5 text-decoration-none px-2'>Forum</a>
                        <a href='##' className='h5 text-decoration-none px-2'>Affiliate</a>
                        <a href='##' className='h5 text-decoration-none px-2'>FAQ</a>
                    </div>
                    <div className='col-12 fs-2 g-3'>
                        <FaFacebookF/>
                        <FaLinkedin/>
                        <FaPaypal/>
                        <FaSkype/>
                        <FaTelegramPlane/>
                    </div>
                    <div className='col-12 py-3 h4 text-white'>© 2021. Foodera. All rights reserved.</div>
                </div>
                </div>
    </div>
  )
}

export default Footer
