import React, { Fragment } from 'react'
import GifImage from './GifImage';
import '../styles/GifGrid.css'
import {useAxiosGifs} from '../hooks/useAxiosGifs'
import PropTypes from 'prop-types'




const GifGrid = ({category}) => {

    const {data:images, loading} = useAxiosGifs(category);
    
    return (
        <Fragment>
            <h3>{category}</h3>
            {
                loading && <p>Loading...</p>
            }
            <div className="card-grid">
            {
                images.map(img => (
                    <GifImage key = {img.id} {...img} />
                ))    
            }
            </div>
        </Fragment>
    )
}

GifGrid.propTypes = {
    category:PropTypes.string
}

GifGrid.defaultProps = {
        category:'Rick and Morty',
}


export default GifGrid

