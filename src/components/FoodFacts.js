import React from 'react'
import tacos from './Images/tacos_animated.jpeg'
import beer from './Images/beer.jpeg'
import wine from './Images/wine.jpeg'
import music from './Images/music.jpeg'

// This component renders all the cards along with some info about some of the items and features available at the restaurant

const FoodFacts = (props) => {
    return (
        <div className='container-fluid section'>
            <hr/>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 fact-cards">
                    <div className="card facts-card">
                        <img 
                            src={beer} 
                            className="card-img-top fact-img" 
                            alt="beer" 
                        />
                    <div className="card-body">
                        <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nostrum aliquid maiores veniam voluptatum eum.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 fact-cards">
                    <div className="card facts-card">
                        <img 
                            src={tacos} 
                            className="card-img-top fact-img" 
                            alt="tacos" 
                        />
                    <div className="card-body">
                        <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nostrum aliquid maiores veniam voluptatum eum.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 fact-cards">
                    <div className="card facts-card">
                        <img 
                            src={wine} 
                            className="card-img-top fact-img" 
                            alt="wine" 
                        />
                    <div className="card-body">
                        <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nostrum aliquid maiores veniam voluptatum eum.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 fact-cards">
                    <div className="card facts-card">
                        <img 
                            src={music} 
                            className="card-img-top fact-img" 
                            alt='music' 
                        />
                        <div className="card-body">
                            <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nostrum aliquid maiores veniam voluptatum eum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodFacts
