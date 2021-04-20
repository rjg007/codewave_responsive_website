import React from 'react'

//This is the a resuable component for food facts where only the image source and the information changes.

const FoodFactsResusable = (props) => {

    const {source, alternateName, info} = props

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 fact-cards">
            <div className="card facts-card">
                <img 
                    src={source} 
                    className="card-img-top fact-img" 
                    alt={alternateName} 
                />
            <div className="card-body">
                <p className="card-text">
                    {info}
                </p>
            </div>
            </div>
        </div>
    )
}

export default FoodFactsResusable
