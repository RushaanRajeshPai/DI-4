import React from 'react'
import './OurServices.css'
import handle from '../Assets/handle.png'
import grow from '../Assets/grow.png'

const OurServices = () => {
    return (
        <div className='osmain'>
            <div className='osleft'>
                <h2>Our Services</h2>
                <p id='osp'>Capital Market</p>
                <p id='osp'>Insurance</p>
                <p id='osp'>Blockchain</p>
                <p id='osp'>Tech Advisory</p>
                <p id='osp'>Finance and Risk</p>
                <p id='osp'>Portfolio Management</p>
            </div>
            <div className='osright'>
                <p>Our Trading helps clients run and transform their front, middle and back-office trading <br /> operations. We provide buy-side, sell-side and market infrastructure firms with a full-service offering, <br /> including systems integration and technology consulting services, to assist in delivering high <br />performance trading and settlement capabilities across all asset classes. This includes strategy, <br />architecture design, operating model work, process improvement, systems building and trading <br /> package integration as well as application  management, application outsourcing and business <br /> process outsourcing. More than 25 years of experience working in the industry has enabled us to <br /> build our services and solutions in strategy, consulting, digital, technology and operations that help <br /> our clients with their trading projects around the world. Capabilities we leverage for our clients <br /> include a powerful alliance network with leading capital markets software vendors, and programs <br />such as the FinTech Innovation Lab that keep us at the forefront of innovation. Our Trading helps <br /> clients run and transform their front, middle and back-office trading operations.</p>
                <div className='oscol'>
                    <div className='oscol1'>
                        <img src={handle} alt="" />
                        <div className='oscolr'>
                            <h3>A Team Of <br /> Professionals</h3>
                            <p>Transforming distribution and <br />marketing with key capabilities <br />in customer insight</p>
                        </div>
                    </div>
                    <div className='oscol1'>
                        <img src={grow} alt="" />
                        <div className='oscolr'>
                            <h3>Analayze Your <br /> Business</h3>
                            <p>Marketing with key capabilities <br /> in customer insight</p>
                        </div>
                    </div>
                </div>
                <p id='endp'>Our Trading helps clients run and transform their front, middle and back-office trading operations. We <br /> provide buy-side, sell-side and market infrastructure firms with a full-service offering, including <br /> systems integration and technology consulting services, to assist in delivering high performance <br /> trading and settlement capabilities across all asset classes. This includes strategy, architecture <br /> design, operating model work, process improvement and systems building.</p>
            </div>
        </div>
    )
}

export default OurServices