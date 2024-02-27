import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";
import Form from '../Components/Form'

const Contact = () => {
  return (
<>
    <Navbar />
    <HeroImg2 Heading="CONTACT." text="Lets have a chat"/>
    <Form />
    <Footer />
</>
  )
}

export default Contact
