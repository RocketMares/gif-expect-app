
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./";


export const GifGrid = ({category}) => {


    const {Images,isLoading} = useFetchGifs(category);
     
   
    return (
       <>
        <h3>{category}</h3>
        <div className="card-grid">

         {
            isLoading ?  null :(<h2> Cargando... </h2> ) 
         }

        {
         Images.map((imge)=>(
            <GifItem key={imge.id} {...imge} />
         ))
        }
        </div>
    
       </>
    )
}