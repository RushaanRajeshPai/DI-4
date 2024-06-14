import React from 'react'
import './Experts.css'
import rect from '../Assets/rect.png'

const Experts = () => {
    return (
        <div className='exMain'>
            <div className='ex1'>
                <div className='ex1left'><img src={rect} alt="" /></div>
                <div className='ex1right'>
                    <h1>We are trusted by more <br />than 5,000 clients</h1>
                    <p id='ep'>A wonderful serenity has taken possession of my entire soul, like <br />these sweet mornings of spring which I enjoy with my whole <br />heart. I am alone, and feel the charm of existence in this spot,<br /> which was created for the bliss of souls like mine.</p>
                    <button id='exbtn'><strong>Read our story</strong></button>
                </div>
            </div>
            <div className='ex1'>
                <div className='ex1left1'>
                    <h1>We are an expert in <br />this field</h1>
                    <p id='ep'>Yet I feel that I never was a greater artist than now <br />When, while the lovely valley teems</p>
                    <p id='ep2'>Premium services and beyond your expectation <br />
                        Get the best support among all venders <br />
                        Fully responsive and works great on all major devices <br />
                        Tons of admin panel options</p>
                    <button id='exbtn'><strong>Read our story</strong></button>

                </div>
                <div className='ex1right'><img src={rect} alt="" /></div>
            </div>
        </div>
    )
}

export default Experts