import React from 'react'
import './Serve.css'
import heart from '../Assets/heart.png'
import top from '../Assets/top.png'
import support from '../Assets/support.png'
import fast from '../Assets/fast.png'
import tree from '../Assets/tree.png'

const Serve = () => {
    return (
        <div className='servemain'>
            <div className='servetop'>
                <div className='servetop1'>
                    <img src={heart} alt="" />
                    <h1 id='seh1'>Service With Love</h1>
                    <p id='sep'>Transforming distribution and <br /> marketing with key capabilities in <br />customer insight</p>
                </div>
                <div className='servetop1'>
                    <img src={top} alt="" />
                    <h1 id='seh1'>Bring To The Top</h1>
                    <p id='sep'>A wonderful serenity has taken <br />possession of my entire soul, like <br />these sweet.</p>
                </div>
                <div className='servetop1'>
                    <img src={support} alt="" />
                    <h1 id='seh1'>Great Support</h1>
                    <p id='sep'>A wonderful serenity has taken <br /> possession of my entire soul, spring <br /> which I enjoy with.</p>
                </div>
            </div>
            <div className='servebot'>
                <div className='servetop1'>
                    <img src={fast} alt="" />
                    <h1 id='seh1'>Go Very Fast</h1>
                    <p id='sep'>A wonderful serenity has taken <br />possession of my entire soul, like <br />these sweet.</p>
                </div>
                <div className='servetop1'>
                    <img src={tree} alt="" />
                    <h1 id='seh1'>Growing Business</h1>
                    <p id='sep'>A wonderful serenity has taken <br />possession of my entire soul, like <br />these sweet.</p>
                </div>
            </div>
        </div>
    )
}

export default Serve