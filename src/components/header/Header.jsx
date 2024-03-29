import React from 'react'
import './header.css'
import CTA from './CTA'
import DKNY from '../../assets/DKNY.png'
import HeaderSocials from './HeaderSocials'
import ME1 from "../../assets/fbpfp.jpg";
import napa from "../../assets/napa.jpg"
import LA from "../../assets/LA.jpg"


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <div className='header'>
          <h1>Anh Vuong</h1>
        </div>

        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={DKNY} alt="" />
        </div>

        <div className='me__onebackground'>
          <div className="me__one">
          <img src={napa} alt="fbpfp" />
          </div>
        </div>

        <div className='me__twobackground'>
          <div className="me__two">
          <img src={LA} alt="fbpfp" />
          </div>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header