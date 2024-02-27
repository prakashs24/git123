import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/AboutContactStyle.css'
import React1 from '../assets/b1.jpg'
import React2 from '../assets/b2.jpg'
const AboutContact = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>who Am I?</h1>
        <p>
            Im a react font-end developer. I create responsive secure websites formmy clients.
        </p>
        <Link to="/Contact">
            <button className='btn'>Contact</button>
        </Link>
      </div>

     <div className='right'>
        <div className='img-container'>
            <div className='img-stack top'>
                <img src={React1} className='img' alt='true'/>
            </div>
            <div className='img-stack bottom'>
                <img src={React2} className='img' alt='true'/>
            </div>
        </div>
     </div>

    </div>
  )
}

export default AboutContact
