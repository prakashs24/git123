import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";
import PricingCard from "../Components/PricingCard";
import Work from '../Components/work';

const Project = () => {
  return (
<>
    <Navbar />
    <HeroImg2 Heading='PROJECTS.' text='Some of my most recent works'/>
    <Work />
    <PricingCard/>
    <Footer />
</>
  )
}

export default Project
