import React from 'react'
import './Level.css'

const Level = () => {
    return (
        <div className='levelMain'>
            <h1 id='lets'>Let's</h1>
            <h1 id='levelup'>Level Up <br /> Your Businesses</h1>
            <p id='levpara'>We help you managing assets, provide financial advices. <br />
                Leave money issues with us and you can focus on the core of your <br /> business
            </p>
            <input type="text" placeholder='Your email...' id='levip' />
            <button id='levbtn'><strong>Get Started</strong></button>
        </div>
    )
}

export default Level