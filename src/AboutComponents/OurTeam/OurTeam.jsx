import React from 'react'
import './OurTeam.css'
import square from '../Assets/square.png'

const OurTeam = () => {
  return (
    <div className='otmain'>
        <h1>Meet Our Team</h1>
        <div className='otcols'>
            <div className='otcol1'>
                <img src={square} alt="" />
                <h2 id='oth2'>Brooklyn Simmons</h2>
                <h4 id='oth4'>Chief Executive Officer</h4>
                <p id='otp'>+1-334-3452-345</p>
                <p id='otp1'>brook@financymail.com</p>
            </div>
            <div className='otcol1'>
                <img src={square} alt="" />
                <h2 id='oth2'>Albert Flores</h2>
                <h4 id='oth4'>Vice President</h4>
                <p id='otp'>+1-334-3452-345</p>
                <p id='otp1'>brook@financymail.com</p>
            </div>
            <div className='otcol1'>
                <img src={square} alt="" />
                <h2 id='oth2'>Brooklyn Simmons</h2>
                <h4 id='oth4'>Chief Financial Officer</h4>
                <p id='otp'>+1-334-3452-345</p>
                <p id='otp1'>brook@financymail.com</p>
            </div>
        </div>
    </div>
  )
}

export default OurTeam