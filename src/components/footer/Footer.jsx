import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'> Anh Vuong</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#Experience'>Experience</a></li>
        <li><a href='#Services'>Services</a></li>
        <li><a href='#Portfolio'>Portfolio</a></li>
        <li><a href='#Testimonials'>Q&A</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/bushvuong/'><FaFacebookF/></a>
        <a href='https://www.instagram.com/aadragon_/'><FiInstagram/></a>
        <a href='https://twitter.com/Aadragon_'><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Anh Vuong Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer