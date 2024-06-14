import React from 'react'
import './Done.css'
import img from '../Assets/img.png'

const Done = () => {
  return (
    <div className='donemain'>
        <h1>What We've Done</h1>
        <p>We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and <br />technology consulting services, to assist in delivering high performance trading and settlement
        </p>
        <p>More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, <br />digital, technology and operations that help our <br />clients with their trading projects around the world. Capabilities we leverage for our clients include</p>
        <img src={img} alt="" id='img'/>
    </div>
  )
}

export default Done