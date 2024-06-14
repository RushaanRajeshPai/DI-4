import React from 'react'
import './Details.css'
import date from '../Assets/date.png'
import mid from '../Assets/mid.png'

const Details = () => {
  return (
    <div className='detmain'>
        <h1 id='dh1'>Project Details</h1>
        <div className='detcol'>
            <div className='detl'>
                <p>Our Trading helps clients run and transform their front, middle and <br />back-office trading operations. We provide buy-side, sell-side and <br /> market infrastructure firms with a full-service offering, including <br /> systems integration and technology consulting services, to assist <br /> in delivering high. Our Trading helps clients run and transform their <br /> front, middle and back-office trading operations. We provide <br /> buy-side, sell.</p>
                <img src={date} alt="" id='date' />
            </div>
            <div className='detr'>
                <img src={mid} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Details