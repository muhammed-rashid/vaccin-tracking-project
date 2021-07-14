import React from 'react'
import vaccin from '../assets/vaccine.png'
import '../styles/imageInfo.scss'
function ImageInfo() {
    return (
        <div>
            <div className="flex-wrapper">
               <div className="image_wrapper">
                <img src={vaccin} alt=""/>

               </div>
               <div className="details">
                   <h2>VACCINE FOR COVID FREE WORLD</h2>
                   <p>Check your nearest vaccination center and slots availability.</p>
               </div>

            </div>
        </div>
    )
}

export default ImageInfo
