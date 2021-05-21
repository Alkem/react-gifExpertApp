import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './AddCategory'
import GifGrid from './GifGrid'


//el componente por defecto se crea tipeando rfce y despues tabulador
const GifExpertApp = ({title}) => {

    const [categories, setCategories] = useState([])

    const handlerAdd = (element) => { 
        // el uso de && es como un if lambda sin el else
        // (condicion)?(true):(false)
        // (condicion) && (return)
        if(element.trim().length > 2){
            handlerRemove(element);
            setCategories( cags => [element,...cags]);
        }
        
    }
    const handlerRemove = (element) => { 
        categories.includes(element)
        &&
        setCategories( cags => 
            [cags.filter( category => category !== element)] 
        );
    }
    

    return (
  <Fragment >
    <h2>{title}</h2>
    <hr/>
    <AddCategory handlerAdd= {handlerAdd}/>

    <div>
        {
            categories.map(category => (

                    <GifGrid  key= {category} category={category} /> 
            ))
        }
    </div>
    </Fragment>

    )
}

GifExpertApp.propTypes = {

    title:PropTypes.string,
}

GifExpertApp.defaultProps = {

    title:'GifExpertApp',
}



export default GifExpertApp
