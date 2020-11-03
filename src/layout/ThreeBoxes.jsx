import React from 'react'
import truck1 from '../images/truck1.png'
import truck2 from '../images/truck2.png'
import truck3 from '../images/truck3.png'

const ThreeBoxes = () => {
    return (
        <div className='container-fluid mt-5 threeBoxes'>
            <div className='row'>
                <div className='col-lg-2'></div>
                <div className='col-lg-10'>
                    <div className='row'>
                        <div className='insertBox'></div>
                        <div className='col-lg-3 truckBox'>
                            <img src={truck1} className="rounded mx-auto d-block truckImg img-fluid"  alt='img-truck' />
                            <h2 className='text-center mb-5'>24/7<br/>dispatch</h2>
                            <p className="text-center truckText">Lorem ipsum dolor sit  consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                            <button className='btnRed mt-5 text-center'>Read more...</button>
                        </div>
                        <div className='insertBox'></div>
                        <div className='col-lg-3 truckBox'>
                            <img src={truck2} className="rounded mx-auto d-block truckImg"  alt='img-truck' />
                            <h2 className='text-center mb-5'>Extraordinary<br/> Safety Score</h2>
                            <p className="text-center truckText"> 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <button className='btnRed mt-5 text-center'>Read more...</button>
                        </div>
                        <div className='insertBox'></div>
                        <div className='col-lg-3 truckBox'>
                            <img src={truck3} className="rounded mx-auto d-block truckImg"  alt='img-truck' />
                            <h2 className='text-center mb-5'>No cargo <br/>claim</h2>
                            <p className="text-justify truckText"> 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p>
                            <button className='btnRed mt-5 text-center'>Read more...</button>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default ThreeBoxes
