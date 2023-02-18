import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/anhvuong146/" target="blank"><BsLinkedin/> LinkedIn</a>
        <a href="https://github.com/AnhVuong146" target="blank"><FaGithub/> GitHub</a>
        <a href="https://dribble.com" target="blank"><BsFacebook/> Facebook</a>
    </div>
  )
}

export default HeaderSocials