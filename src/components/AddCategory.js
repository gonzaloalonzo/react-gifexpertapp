import React, {useState} from 'react'
import Proptypes from 'prop-types'


export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');

    const handlerInputChange = (e) => {

        setinputValue(e.target.value);

        console.log('handlerInputChange llamado');

    }

    const handlerSubmit = (e) => {
        e.preventDefault();

        console.log('handleSubmit', inputValue);
        
        if (inputValue.trim().length > 2){
            setCategories((cats) => [ inputValue,...cats]);
            setinputValue(' ');
        }
        

    }

    return (
        <form onSubmit = {
            handlerSubmit
        }>
            <p>{inputValue}</p>
            <input
                type="text"
                value={inputValue}
                onChange={handlerInputChange}
            />
        </form>
    )    
}
AddCategory.propTypes = {
  setCategories: Proptypes.func.isRequired
}; 