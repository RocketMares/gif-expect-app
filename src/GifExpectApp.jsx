import { useState } from "react";
import { AddCategory } from "./componentes/AddCategory";
export const GifExpectApp =()=>{
    const [categories, setCategories] = useState(['One Punch','Dragon Ball Z']);

    const OnAddCategory = (newCategory)=>{
        // categories.push(elemento_agregad);
        // console.log(newCategory)
        setCategories([newCategory,...categories]);
    }
    
    return(
        <>
        {/* titulo de la app */}
        <h1>Gifs</h1>
        {/* input de busqueda */}
        <AddCategory 
        // setCategories = {setCategories} 
        onNewCategory ={(value)=> OnAddCategory(value) }
        currentCategories = {categories}
        />
        <ol>
            {/* {categories}  aqui solo muestra el primer elemento si es que tiene uno, apartirt de 2 solo los muestra juntos*/}
            {categories.map((category) =>{
                    return(
                     
                         <li key={category} >{category} </li>
                       
                    )
                
                }
            
            )}
           
        </ol>

        {/* listado de tarjetas */}
        {/* gif item */}
        </>
    )
}