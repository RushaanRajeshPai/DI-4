import React from 'react'
import './Provisions.css'
import rect from '../Assets/rect.png'

const Provisions = () => {
    return (
        <div className='proMain'>
            <div className='proTitle'>
                <h1>Services We Provide</h1>
                <p>Covered in these areas</p>
            </div>
            <div className='proTop'>
                <div className='prot'>
                    <img src={rect} alt="" />
                    <h2>Capital Market</h2>
                    <p id='pp'>Providing insight-driven <br /> transformation to investment banks, <br /> wealth and asset managers, <br /> exchanges, clearing houses.</p>
                </div>
                <div className='prot'>
                    <img src={rect} alt="" />
                    <h2>Insurance</h2>
                    <p id='pp'>Providing insight-driven <br /> transformation to investment banks, <br /> wealth and asset managers, <br /> exchanges, clearing houses.</p>
                </div>
                <div className='prot'>
                    <img src={rect} alt="" />
                    <h2>Blockchain</h2>
                    <p id='pp'>Providing insight-driven <br /> transformation to investment banks, <br /> wealth and asset managers, <br /> exchanges, clearing houses.</p>
                </div>
            </div>
            <div className='proBottom'>
                <div className='prot'>
                    <img src={rect} alt="" />
                    <h2>Tech Advisory</h2>
                    <p id='pp'>Providing insight-driven <br /> transformation to investment banks, <br /> wealth and asset managers, <br /> exchanges, clearing houses.</p>
                </div>
                <div className='prot'>
                    <img src={rect} alt="" />
                    <h2>Finance and Risk</h2>
                    <p id='pp'>Providing insight-driven <br /> transformation to investment banks, <br /> wealth and asset managers, <br /> exchanges, clearing houses.</p>
                </div>
                <div className='prot'>
                    <img src={rect} alt="" />
                    <h2>Portfolio Management</h2>
                    <p id='pp'>Providing insight-driven <br /> transformation to investment banks, <br /> wealth and asset managers, <br /> exchanges, clearing houses.</p>
                </div>
            </div>
        </div>
    )
}

export default Provisions