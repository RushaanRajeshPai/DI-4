import React from 'react'
import './Past.css'

const Past = () => {
  return (
    <div className='pastmain'>
        <h1 id='pasth2'>Our Past Projects</h1>
        <p id='pastp'>View all of our works</p>
        <div className='pastcols'>
            <div className='pastcol1'>
                <h1 id='pasth1'>1000</h1>
                <h3 id='pasth3'>All Time Clients</h3>
            </div>
            <div className='pastcol1'>
                <h1 id='pasth1'>979</h1>
                <h3 id='pasth3'>Clients In This Year</h3>
            </div>
            <div className='pastcol1'>
                <h1 id='pasth1'>300</h1>
                <h3 id='pasth3'>New Projects</h3>
            </div>
            <div className='pastcol1'>
                <h1 id='pasth1'>35%</h1>
                <h3 id='pasth3'>Avg Profit Increased</h3>
            </div>
        </div>
    </div>
  )
}

export default Past