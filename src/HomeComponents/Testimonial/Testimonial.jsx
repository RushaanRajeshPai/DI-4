import React from 'react'
import './Testimonial.css'
import stars from '../Assets/stars.png'
import arrowll from '../Assets/arrowll.png'
import arrowrr from '../Assets/arrowrr.png'
import balls from '../Assets/balls.png'

const Testimonial = () => {
  return (
    <div className='testmain'>
        <h1>Client's Testimonials</h1>
        <img src={stars} alt="" id='stars'/>
        <div className='testmid'>
            <div id='arrowll'><img src={arrowll} alt="" /></div>
            <h3 id='th3'>“Far far away, behind the word mountains, far from the <br />countries Vokalia and Consonantia, there live the blind texts. <br />Separated they live in Bookmarksgrove right at the coast of <br /> the Semantics, a large language ocean.”</h3>
            <div id='arrowrr'><img src={arrowrr} alt="" /></div>
        </div>
        <h3>Cameron Williamson</h3>
        <p id='ep'>CEO, Cameron Industries</p>
        <img src={balls} alt="" id='balls' />
    </div>
  )
}

export default Testimonial