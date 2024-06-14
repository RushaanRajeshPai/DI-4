import React from 'react'
import './Team.css'
import clock from '../Assets/clock.png'
import bag from '../Assets/bag.png'
import graph from '../Assets/graph.png'

const Team = () => {
  return (
    <div className='teamMain'>
        <div className='teams'>
            <img src={clock} alt="" />
            <h2>On Time <br /> Services</h2>
            <p id='tp'>Distribution and marketing with <br /> key capabilities in customer <br /> analytics.</p>
        </div>
        <div className='teams'>
            <img src={bag} alt="" />
            <h2>A Team Of <br /> Professionals</h2>
            <p id='tp'>Transforming distribution and <br />marketing with key capabilities in <br />customer insight.</p>
        </div>
        <div className='teams'>
            <img src={graph} alt="" />
            <h2>Analayze Your <br /> Business</h2>
            <p id='tp'>Marketing with key capabilities <br />in customer insight</p>
        </div>
    </div>
  )
}

export default Team