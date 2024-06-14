import React from 'react'
import './Success.css'
import rect from '../Assets/rect.png'

const Success = () => {
  return (
    <div className='sumain'>
        <div className='suleft'>
            <img src={rect} alt="" />
        </div>
        <div className='suright'>
            <h1>Read The Story Behind <br /> Our Success</h1>
            <p>We provide buy-side, sell-side and market infrastructure firms <br />with a full-service offering, including systems integration and <br />technology consulting services, to assist in delivering high <br />performance trading and settlement.
            </p>
            <p>More than 25 years of experience working in the industry has <br />enabled us to build our services and solutions in strategy, <br /> consulting, digital, technology and operations that help our clients <br /> with their trading projects around the world. Capabilities we <br />leverage.</p>
            <button id='exbtn'><strong>Read our story</strong></button>
        </div>
    </div>
  )
}

export default Success