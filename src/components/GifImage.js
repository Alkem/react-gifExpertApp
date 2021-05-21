import React from 'react'
import '../styles/GifImage.css'


const GifImage = ({title,url}) => {
    
    return (
        <div className = "card border-dark mb-3">
            <div className="card-body">
                <div className= "card-header">
                    <p className="card-text">{title}</p>
                </div>
            </div>
            <img src={url} alt={title} className="img-charact img-thumbnail" />
        </div>
    )
}

export default GifImage
