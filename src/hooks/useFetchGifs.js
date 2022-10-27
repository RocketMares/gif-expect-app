
import { useEffect, useState } from "react";
import { GetGifs } from "../componentes/GetGifs";



export const useFetchGifs = (category) =>{

    const [Images,setImages] = useState([]);

    const getImages = async() => {
        const newImages = await GetGifs(category);
        setImages(newImages);
    }
    
    useEffect( () => {
        getImages(category)
     },[] 
    )
    return (
        {
            Images,
            isLoading:true
        }
    )
      
    
}