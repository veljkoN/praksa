import React from 'react'
import imgTelephone from '../images/white-telephone.jpg'
import { NavLink } from 'react-router-dom'

const TopDiv = () => {
    const activeS={ 
        color:'white'
      }
    return (
        <div className='container-fluid'>
            <div className='row topDiv'>
                <div className='col-lg-3'></div>
                <div className='col-lg-3'></div>
                <div className='col-lg-3'>
                    <img alt='telepone' id='teleponeImg' src={imgTelephone} />
                    <span className='text-white font-weight-bold' id='teleoneNumber'> (602)362-0855</span>
                </div>
                <div className='col-lg-3'>
                    <NavLink to='/english' activeStyle={activeS} exact className='textLang'>English </NavLink><span className='textLang ml-1 mr-1'>|</span>
                    <NavLink to='/spanish' activeStyle={activeS} exact className='textLang'> Spanish </NavLink><span className='textLang ml-1 mr-1'>|</span>
                    <NavLink to='/serbian' activeStyle={activeS} exact className='textLang'> Serbian</NavLink>
                </div>    
            </div>
        </div>
    )
}

export default TopDiv
