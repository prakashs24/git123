import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from '../Components/HeroImg2';
import AboutContact from '../Components/AboutContact';
const About = () => {
  return (
<>
    <Navbar />
    <HeroImg2 Heading="ABOUT." text=" Im a friendly Front-End-Developer "/>
    <AboutContact />
    <Footer />
</>
  )
}

export default About
