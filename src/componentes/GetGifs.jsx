export const  GetGifs = async (category) =>{
    const url  = `https://api.giphy.com/v1/gifs/search?api_key=B7Bk5l83V13VWGDsCUQzcwIWdWcp243f&q=${category}&limit=10`;
    const  resp =  await fetch(url);
    const {data} = await resp.json();
    
   const datos =  data.map( img => ({
         id:img.id,
         title:img.title,
         url: img.images.downsized_medium.url,
   }))

   console.log(datos)
   return datos;
 }