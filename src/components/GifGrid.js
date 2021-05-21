import React from 'react'
import GifImage from './GifImage';
import '../styles/GifGrid.css'
import {useAxiosGifs} from '../hooks/useAxiosGifs'
import PropTypes from 'prop-types'
import { CyanSpinner } from './utilities/Spinners';




const GifGrid = ({category}) => {

    const {data:images, loading} = useAxiosGifs(category);
    
    return (
        <div className = "bloq">
            <h3>{category}</h3>
            {
                loading  && <CyanSpinner key="CyanSpinner" />
            }
            <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
            {
                images.map(img => (
                    <div className="col">
                        <GifImage key = {img.id} {...img} />
                    </div>))    
            }
            </div>
        </div>
    )
}

GifGrid.propTypes = {
    category:PropTypes.string
}

GifGrid.defaultProps = {
        category:'Rick and Morty',
}


export default GifGrid

