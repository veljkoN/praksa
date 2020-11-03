import React from 'react'
import { Link } from 'react-router-dom'
import msgImage from '../images/msgImage.png'

const BottomBox = () => {
    return (
        <div className='container-fluid bottom-box'>
            <div className='row unOLbox'>
                <div className='col-lg-2'></div>
                <div className='col-lg-3' id='bottomHI'>
                    <h3 className='text-white' id='bottomH'>Transportation <br/>services</h3>
                    <div className="btn-group">
                        <span className='text-center'  id='spanText3'>Full service list</span>
                        <button type="button" className="btn btn-dark"><i className="fas fa-play"></i></button>
                    </div>
                </div>
                <div className='col-lg-3' >
                    <ul id='bulletRed'>
                        <li><Link to={'/#'}>US Domestic / Nationwide Ground</Link></li>
                        <li><Link to={'/#'}>Air Ride 53 Dry Vans</Link></li>
                        <li><Link to={'/#'}>GPS Tracked</Link></li>
                        <li><Link to={'/#'}>High Value / High Risk Trained</Link></li>
                        <li><Link to={'/#'}>Standard and Expedited</Link></li>
                        <li><Link to={'/#'}>Special Projects</Link></li>
                        <li><Link to={'/#'}>Intermodal Sevices</Link></li>
                        <li><Link to={'/#'}>Customs Bonded Fleet</Link></li>
                        <li><Link to={'/#'}>TSA Cedrtifed</Link></li>
                        <li><Link to={'/#'}>Warehousing</Link></li>
                        <li><Link to={'/#'}>US / Canadian Coverage</Link></li>
                    </ul>
                </div>
            </div>  
            <div className='col-lg-4 msgBox'>
                <img alt='msgImg' src={msgImage}  />
                <span className='text-info font-weight-bold'>Message Us</span>
            </div>
        </div>
    )
}

export default BottomBox
