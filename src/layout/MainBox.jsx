import React from 'react'

const MainBox = () => {
    return (
        <div>
            <main>
                <div className='container-fluid'>
                    <div className="d-flex align-items-center justify-content-center" id='main-box'>
                        <div className="p-2 bd-highlight">
                            <p className='text-break text-center text-white' id='mainText'>Go beyond logistics, make the world go round <br/>
                            and revolution business</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center" id='main-box2'>
                        <div className="p-2 bd-highlight">
                            <div className="btn-group">
                                <span  id='spanText1'>Get a freight quote</span>
                                <button type="button" className="btn btn-dark"><i className="fas fa-play"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div className='container-fluid mt-3'>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="p-2 bd-highlight">
                        <i className="fas fa-square"></i>
                        <i className="fas fa-square"></i>
                        <i className="far fa-square" id='redSquare'></i>
                        <i className="fas fa-square"></i>
                    </div>
                </div> 
            </div> 
        </div>
    )
}

export default MainBox
