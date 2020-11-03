import React from 'react'
import {NavLink, Link } from 'react-router-dom'
import logoImg from '../images/logo.svg' 

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
            </button>
            <Link to={'/#'} className="navbar-brand pl-3">
                <img src={logoImg} alt="logo" />
            </Link>
            <div className="collapse navbar-collapse  justify-content-center" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to={'/#'} className="nav-link">About us</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink to={'/#'} className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                            Transportation Services
                        </NavLink>
                        <div className="dropdown-menu">
                            <Link to={'/#'} className="dropdown-item">Link 1</Link>
                            <Link to={'/#'} className="dropdown-item">Link 2</Link>
                            <Link to={'/#'} className="dropdown-item">Link 3</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink to={'/#'} className="nav-link dropdown-toggle"  id="navbardrop" data-toggle="dropdown">
                            Owner operator application
                        </NavLink>
                        <div className="dropdown-menu">
                            <Link to={'/#'} className="dropdown-item">Link 1</Link>
                            <Link to={'/#'} className="dropdown-item">Link 2</Link>
                            <Link to={'/#'} className="dropdown-item">Link 3</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/#'} className="nav-link" >Unit application</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink to={'/#'} className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                            FAQ
                        </NavLink>
                        <div className="dropdown-menu">
                            <Link to={'/#'} className="dropdown-item">Link 1</Link>
                            <Link to={'/#'} className="dropdown-item">Link 2</Link>
                            <Link to={'/#'} className="dropdown-item" >Link 3</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/#'} className="nav-link" >Contact us</NavLink>
                    </li>    
                </ul>
            </div>  
        </nav>
    )
}

export default Nav
