import React from 'react'

const MiddleBox = () => {
    return (
        <div className='container-fluid middle-box'>
            <div className="d-flex align-items-center justify-content-center">
                <div className="p-2 mr-4 bd-highlight">
                    <h2>Omega Freigh <br/>solution</h2>
                    <div className="btn-group">
                        <span className='text-center'  id='spanText1'>More abuot us</span>
                        <button type="button" className="btn btn-dark"><i className="fas fa-play"></i></button>
                    </div>
                </div>
                <div className="p-2 mt-5 bd-highlight">
                    <p>We are an Ilinois based over the road trucking company. we <br/>
                    service all 48 states and Canada, aaand specialize in full truckload <br/>
                    dry van freight. All of our trailers are 53' Air ride dty Vans.<br/><br/>
                    All of our equipment is well kept, and maintained according to<br/>
                    FMCSA regulations. We can provide drop trailer pools if/when <br/>
                    needed.                               
                    </p>
                </div>
            </div> 
        </div>
    )
}

export default MiddleBox
