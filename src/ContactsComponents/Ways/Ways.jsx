import React from 'react'
import './Ways.css'
import call from '../Assets/call.png'
import mail from '../Assets/mail.png'
import loc from '../Assets/loc.png'

const Ways = () => {
  return (
    <div className='waysmain'>
        <div className='w1'>
            <img src={call} alt="" />
            <h2>Phone</h2>
            <p>Serenity has taken possession of my <br />entire</p>
            <p><strong>+1-334-3452-345</strong></p>
        </div>
        <div className='w1'>
            <img src={mail} alt="" />
            <h2>Email</h2>
            <p>A wonderful serenity my entire soul, <br />like these.</p>
            <p><strong>contactinfo@financy.com</strong></p>
        </div>
        <div className='w1'>
            <img src={loc} alt="" />
            <h2>Location</h2>
            <p>4 apt. Flawing Street. The Grand <br />Avenue.</p>
            <p><strong>Liverpool, UK 33342</strong></p>
        </div>
    </div>
  )
}

export default Ways