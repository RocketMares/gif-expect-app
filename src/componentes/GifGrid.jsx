
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {


    const {Images,isLoading} = useFetchGifs(category);
     
   
    return (
       <>
        <h3>{category}</h3>
        <div className="card-grid">

         {
            isLoading && ( <h1> Cargando... </h1>)
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