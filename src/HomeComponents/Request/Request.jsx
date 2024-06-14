import React from 'react'
import './Request.css'
import ar from '../Assets/ar.png'

const Request = () => {
    return (
        <div className='reqmain'>
            <h1 id='rh1'>Request a call back?</h1>
            <p id='rp1'>Please fill out the form and press the submit button. <br /> We will get back to you with 1-2 business days.</p>
            <div className='ripp'>
                <input type="text" placeholder='Enter your e-mail' id="rip" />
                <div><img src={ar} alt="" id='ar' /></div>
            </div>
        </div>
    )
}

export default Request