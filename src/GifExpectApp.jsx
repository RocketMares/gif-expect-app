import { useState } from "react";
import { AddCategory } from "./componentes";
import { GifGrid } from "./componentes";
export const GifExpectApp =()=>{
    const [categories, setCategories] = useState(['One Punch']);

    const OnAddCategory = (newCategory)=>{
        setCategories([newCategory,...categories]);
    }
    
    return(
        <>

        <h1>Gifs</h1>
 
        <AddCategory 
        onNewCategory ={(value)=> OnAddCategory(value) }
        currentCategories = {categories}
        />
      
         
            {
            categories.map((category) => ( 
            <GifGrid 
            key={category} 
            category ={category} />
            ))
            }
      
        </>
    )
}