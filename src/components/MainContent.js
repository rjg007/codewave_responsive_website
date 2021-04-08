import React from 'react'
import image from './Images/tacos.jpeg'

// MainContent is where I have rendered the main landing picture along with 2 of the more popular menu items with their price.

const MainContent = (props) => {
    return (
        <div className='container-fluid section'>
            <hr/>
            <div className="row">
                <div className="col-md-8 mb-3 mb-lg-0">
                    <div className="card bg-dark text-white">
                        <img 
                            src={image} 
                            className="card-img-fluid main-content-card-img" 
                            alt="tacos-main" 
                        />
                        <div className="card-img-overlay">
                            <h2 className="card-title">Terry's Tacos</h2>
                            <p className="card-text"> 
                                Experience the exotic and unique flavor of Terry's Tacos! 
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="row align-content-between h-100">
                        <div className="col-md-12 col-sm-4 main-card mb-3 mb-lg-0 ">
                            <div className="card main-content-card">
                                <div className="card-body">
                                    <h1 className="card-title main-card-text">$2.00</h1>
                                    <h6 className="card-subtitle mb-2 text-muted">Tacos</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-sm-4 mb-3 mb-lg-0 main-card">
                            <div className="card main-content-card">
                                <div className="card-body">
                                    <h1 className="card-title main-card-text">$4.99</h1>
                                    <h6 className="card-subtitle mb-2 text-muted">Kombucha</h6>
                                </div>
                            </div>
                        </div> 
                        <div className="col-md-12 col-sm-4 main-card">
                            <div className="card main-content-card">
                                <div className="card-body">
                                    <h1 className="card-title main-card-text">$7.99</h1>
                                    <h6 className="card-subtitle mb-2 text-muted">Chocolate Cake</h6>
                                </div>
                            </div>
                        </div>                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent
