import React, { Component } from 'react'
import '../Components/HeroImg2style.css'
class HeroImg2 extends Component {
    render(){
        return (
            <div className='Hero-img'>
            <div className='Heading'>
            <h1>{this.props.Heading}</h1>
            <p>{this.props.text}</p>
            </div>    
            </div>
          )
    }
 
}

export default HeroImg2
