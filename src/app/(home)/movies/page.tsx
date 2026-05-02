import Movieclient from "@/app/components/Movie/MovieClient";
import { getMovies } from "@/services/movies"
import { notFound } from "next/navigation";

export default async function Movies() {

    const { movies : { data: movieData}} = await getMovies();      
     
    if(!movieData.length) return notFound();
    
    return <Movieclient 
                data={movieData} 
                clickable 
                linkConfig={{ asLink: true, linkBase:"/movie" }}/>
            
}