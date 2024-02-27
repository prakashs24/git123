import '../Components/HeroImgStyle.css';
import React from 'react'
import IntroImg from '../assets/IntroImg.png'
import { Link } from 'react-router-dom';
const HeroImg = () => {
  return (
    <>
      <div className='Hero'>

         <div className='Mask'>
         <img className='Intro-Img'  src={IntroImg} alt='IntroImg'></img>
         </div>

         <div className='Content'>
          <p>HI, I'M A FREELANCER.</p>
          <h1>React Developer</h1>
          <div>
            <Link to='/Project' className='btn'>Projects</Link>
            <Link to='/Contact' className='btn btn-light'>Contact</Link>
          </div>
         </div>

      </div>
    </>
  )
}

export default HeroImg
