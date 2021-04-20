import React from 'react'
import FoodFactsReusable from './FoodFactsResusable'
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

                {
                    /* 
                        the resuable component FoodFactsReusable in action
                    */
                }
                
                <FoodFactsReusable 
                    source={beer}  
                    alterNateName='beer' 
                    info=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nostrum aliquid maiores veniam voluptatum eum.'
                />
                <FoodFactsReusable 
                    source={tacos}  
                    alterNateName='beer' 
                    info=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nostrum aliquid maiores veniam voluptatum eum.'
                />
                <FoodFactsReusable 
                    source={wine}  
                    alterNateName='beer' 
                    info=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nostrum aliquid maiores veniam voluptatum eum.'
                />
                <FoodFactsReusable 
                    source={music}  
                    alterNateName='beer' 
                    info=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nostrum aliquid maiores veniam voluptatum eum.'
                />
            </div>
        </div>
    )
}

export default FoodFacts
