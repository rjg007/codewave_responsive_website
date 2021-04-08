import React from 'react'

// Menu component is mainly responsible for rendering the navbar and the elements displayed on the navbar along with the responsible toggle button

const Menu = (props) => {
    return (
        <div className="container-fluid section">
            <nav className="navbar navbar-expand-md navbar-light ">
                <a 
                    href="/#" 
                    className='navbar-brand'
                >
                    <h1> Terry's Taco Joint </h1>
                </a>
                <button 
                    className="navbar-toggler" 
                    data-bs-toggle='collapse' 
                    data-bs-target='#navbarMenu'
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div 
                    className="collapse navbar-collapse" 
                    id='navbarMenu'
                >
                    <ul className='navbar-nav m-auto'>
                        <li className='nav-item'><a href="/#" className='nav-link' > <h3> Tacos </h3> </a></li>
                        <li className='nav-item'><a href="/#" className='nav-link' > <h3> Beers </h3> </a></li>
                        <li className='nav-item'><a href="/#" className='nav-link' > <h3> Wines </h3> </a></li>
                        <li className='nav-item'><a href="/#" className='nav-link' > <h3> Desserts </h3> </a></li>
                        <li className='nav-item'><a href="/#" className='nav-link' > <h3> Reservations </h3> </a></li>
                    </ul>
                </div> 
            </nav>
        </div>
    )
}

export default Menu
