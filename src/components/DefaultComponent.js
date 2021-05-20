import React, { Fragment ,useState} from 'react';
import PropTypes from 'prop-types'


const DefaultComponent = ({title}) =>
{
    const [value] = useState(title)
  
  //const [value,setValue] = useState(title)
  //recordar que () en una funcion es lo mismo que return  
  //const handlerSet = () => {
      //setValue((c)=> c)
  //};


    return (
        <Fragment>
              <h1>{value}</h1>  
        </Fragment>
    )
}

DefaultComponent.propType = {
    title: PropTypes.string,
}

DefaultComponent.defaultProps = {
    title : 'Default Component'
}

export default DefaultComponent;

