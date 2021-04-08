import React from 'react'
import tacosUpClose from './Images/tacos_upclose.jpeg'

// This component features the restaurant's specialty item and also provide more info about it.

const Featured = (props) => {
    return (
        <div className="container-fluid section">
            <hr/>
            <div 
                className="card mb-3" 
                style={{maxWidth: '100%'}}
            >
                <div className="row g-0">
                    <div className="col-md-5 ">
                        <img 
                            className='card-img-top featured-image'
                            src={tacosUpClose} alt="..." 
                        />
                    </div>
                    <div className="col-md-3">
                    <div className="card-body">
                        <h2 className="card-title"> Our Featured Taco </h2>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non temporibus ipsa. Veniam voluptate corporis et maxime alias repudiandae vero quae, eveniet adipisci aperiam obcaecati tempore, odit cum, dignissimos distinctio. 
                        </p>
                        <button className='btn btn-warning'> Learn More </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
