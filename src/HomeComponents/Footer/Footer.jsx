import React from 'react'
import './Footer.css'
import social from '../Assets/social.png'

const Footer = () => {
    return (
        <div className='footermain'>
            <div className='footercols'>
                <div className='footercol1'>
                    <h2>Services</h2>
                    <p id='fcp'>Capital Market</p>
                    <p id='fcp'>Insurance</p>
                    <p id='fcp'>Blockchain</p>
                    <p id='fcp'>Tech Advisory</p>
                    <p id='fcp'>Finance and Risk</p>
                    <p id='fcp'>Portfolio Management</p>
                </div>
                <div className='footercol1'>
                    <h2>Information</h2>
                    <p id='fcp'>Sign Up</p>
                    <p id='fcp'>Download App</p>
                    <p id='fcp'>Drop Question</p>
                </div>
                <div className='footercol1'>
                    <h2>Company</h2>
                    <p id='fcp'>Partnership</p>
                    <p id='fcp'>Terms of Use</p>
                    <p id='fcp'>About</p>
                    <p id='fcp'>Pricing</p>
                    <p id='fcp'>Contact</p>
                </div>
                <div className='footercol1'>
                    <h2>Get In Touch</h2>
                    <p id='fcp'>Stay connected with us and <br /> let's know more stories</p>
                    <img src={social} alt="" id='imgsoc' />
                </div>
            </div>
            <div className='footerend'>
                <p id='fpe'>© Financy 2024 all rights reserved</p>
            </div>
        </div>
    )
}

export default Footer