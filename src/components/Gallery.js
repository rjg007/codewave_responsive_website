import React from 'react'
import img1 from './Images/gallery1.jpeg'
import img2 from './Images/gallery2.jpeg'
import img3 from './Images/gallery3.jpeg'
import img4 from './Images/gallery4.jpeg'
import img5 from './Images/gallery5.jpeg'
import img6 from './Images/gallery6.jpeg'
import img7 from './Images/gallery7.jpeg'
import img8 from './Images/gallery8.jpeg'
import img9 from './Images/gallery9.jpeg'
import img10 from './Images/gallery10.jpeg'

// Finally, the gallery is a bunch of images which have been displayed with respect to various breakpoints

const Gallery = (props) => {
    return (
        <div className='container-fluid section' id='gallery'>
            <hr/>
            <h2> Gallery </h2>
            <br/>
            <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-4">
                    <img 
                        className='img-fluid gallery-img' 
                        src={img1} 
                        alt=''                    />
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                    <img 
                        className='img-fluid gallery-img' 
                        src={img2} 
                        alt=''                    />
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                    <img 
                        className='img-fluid gallery-img' 
                        src={img3} 
                        alt=''                    />
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                    <img 
                        className='img-fluid gallery-img' 
                        src={img4} 
                        alt=''                    />
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                    <img 
                        className='img-fluid gallery-img' 
                        src={img5} 
                        alt=''                    />
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                    <img 
                        className='img-fluid gallery-img' 
                        src={img6} 
                        alt=''                    />
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                    <img 
                        className='img-fluid gallery-img' 
                        src={img7} 
                        alt=''                    />
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                    <img 
                        className='img-fluid gallery-img' 
                        src={img8} 
                        alt=''                    />
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                    <img 
                        className='img-fluid gallery-img' 
                        src={img9} 
                        alt=''                    />
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                    <img 
                        className='img-fluid gallery-img' 
                        src={img10} 
                        alt=''
                    />
                </div>
            </div>
        </div>
    )
}

export default Gallery
