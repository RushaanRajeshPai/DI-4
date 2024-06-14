import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar-main'>
        <div id='nav-logo'><img src={logo} alt="" /></div>
        <div id='nav-contents'>
            <p id='home'>Home</p>
            <p id='about'>About</p>
            <p id='services'>Our Services</p>
            <p id='features'>Features</p>
        </div>
        <div><button id='nav-btn'>Contact Us</button></div>
    </div>
  ) 
}

export default Navbar