import React from "react";
import '../Components/Footerstyle.css'
import { FaHome, FaPhone ,FaFacebook, FaTwitter, FaLinkedin, FaMailBulk} from "react-icons/fa";

const Footer = () => {
  return (
<>                  
    <div className="Footer">
    <div className="Footer-container">  

      <div className="left">
       <div className="location">
        <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
        <div>
            <p>123 Housing Society</p>
            <p>Bangladesh.</p>
        </div>
       </div>
       <div className="phone">
        <h4 style={{color:"#fff",marginRight:"2rem"}}><FaPhone size={20} style={{marginRight:"2rem"}}/>1-2323-343-23</h4>
        <h4 style={{color:"#fff",marginRight:"2rem"}}><FaMailBulk size={20} style={{marginRight:"2rem"}}/>info@gmail.com</h4>
       </div>
      </div>

      <div className="right">
       <h4>About the Company</h4>
       <p>This is me Fahimul Kabir.CEO & Founder of Tech2etc. I enjoy discussing new projects and design challenges.</p>
       <div className="social">
        <FaFacebook size={30} style={{color:"#fff",marginRight:"2rem"}}/>
        <FaTwitter size={30} style={{color:"#fff",marginRight:"2rem"}}/>
        <FaLinkedin size={30} style={{color:"#fff",marginRight:"2rem"}}/>
       </div>


      </div>

    </div> 
    </div>               
</>               
  )
}

export default Footer
