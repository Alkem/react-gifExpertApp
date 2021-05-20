import React from 'react'
import '../styles/GifImage.css'

const GifImage = ({title,url}) => {
    
    return (
        <div className = "card animate__animated animate__fadeInUp">
            <p>{title}</p>
            <img src={url} alt={title} />
        </div>
    )
}

export default GifImage
