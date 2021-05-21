import React, { useState} from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({handlerAdd}) => {
    
    const [inputValue, setInputValue] = useState("")
    
    const handlerChange = (e) =>{
        setInputValue(e.target.value)
    }

    const handlerSubmit = (e) =>{
        e.preventDefault();
        handlerAdd(inputValue);
        setInputValue("");

    }


    return (
        <form onSubmit={handlerSubmit} className="form-group">
          <input
                type="text" 
                value = {inputValue}
                onChange={handlerChange} 
                className="form-control"
                placeholder="Ingrese una Categoria"
          />  
        </form>
    )
}

AddCategory.propTypes = {
    handlerAdd:PropTypes.func.isRequired,
}

export default AddCategory

