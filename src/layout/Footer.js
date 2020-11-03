import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='container-fluid footer-div'>
            <div className='row'>
                <div className='col-lg-3'></div>
                <div className='col-lg-3'>
                    <span className='text-white'>Omega Freight LLC MC#491945</span>
                </div>
                <div className='col-lg-3 offset-3' id='footerText'>
                    <span className='text-muted'>Powered by </span><NavLink to={'/#'}  exact className='textLang text-white'>Studio Present</NavLink>
                </div>    
            </div>
        </div>
    )
}

export default Footer
