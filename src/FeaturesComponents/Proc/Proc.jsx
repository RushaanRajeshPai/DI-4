import React from 'react'
import './Proc.css'
import mid from '../Assets/mid.png'

const Proc = () => {
  return (
    <div className='procmain'>
        <h1 id='prop'>Our Process</h1>
        <p id='prop'>We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and <br /> technology consulting services, to assist in delivering high performance trading and settlement More than 25 years of experience <br /> working in the industry has enabled us to build our services and solutions in strategy, consulting, digital, technology and operations <br /> that help our clients with their trading projects around the world. Capabilities we leverage for our clients include
        </p>
        <div className='proccol'>
            <div className='proccoll'>
                <img src={mid} alt="" />
            </div>
            <div className='proccolr'>
                <li id='pli'>Amet Sollicitudin Quam Dolor Mollis</li>
                <li id='pli'>Diipiscing Vestibulum Nullam Venenatis</li>
                <li id='pli'>Diipiscing Vestibulum Nullam Venenatis</li>
                <li id='pli'>Vehicula Vulputate Ligula Mollis</li>
            </div>
        </div>
    </div>
  )
}

export default Proc