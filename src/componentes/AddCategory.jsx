import { useState } from "react"
import React from "react";
export const AddCategory = ({onNewCategory})=>{
    const [inputValue, setinputValue] = useState([])
    
    const onInputChange = ({target})=>{
        setinputValue(target.value);
        
    }
    const onSubmit = (event) =>{
        event.preventDefault();
       
        if (inputValue.length <= 1)return;
        onNewCategory(inputValue);
        setinputValue('');
    }
    return(
        <form onSubmit={onSubmit}>
            <input 
            type="text"
            placeholder="Busca Gifs"
            value={inputValue}
            onChange={ onInputChange}
            />
        </form>
       
    )
}