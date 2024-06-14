import React from 'react'
import './Cases.css'
import rect from '../Assets/rect.png'

const Cases = () => {
  return (
    <div className='cmain'>
        <div className='ctitle'>
            <h1>Our Cases</h1>
            <p>View all out works</p>
        </div>
        <div className='cmid'>
            <div className='cmid1'>
                <img src={rect} alt="" />
                <h1>Startup Funding</h1>
                <p id='cp'>Providing insight-driven <br /> transformation to investment <br />banks, wealth and asset <br /> managers.</p>
                <button id='exbt'><strong>Read More</strong></button>
            </div>
            <div className='cmid1'>
                <img src={rect} alt="" />
                <h1>Asset Management</h1>
                <p id='cp'>Insight-driven transformation to <br />investment banks, wealth and <br />asset managers, exchanges, <br /> clearing houses.</p>
                <button id='exbt'><strong>Read More</strong></button>
            </div>
            <div className='cmid1'>
                <img src={rect} alt="" />
                <h1>Accounting Advisory</h1>
                <p id='cp'>Driven transformation to <br />investment banks, wealth and <br />asset managers, exchanges. <br /> of forex.</p>
                <button id='exbt'><strong>Read More</strong></button>
            </div>
        </div>
    </div>
  )
}

export default Cases