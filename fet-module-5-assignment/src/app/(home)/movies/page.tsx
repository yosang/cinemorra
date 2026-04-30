import Movieclient from "@/app/components/Movie/MovieClient";
import { getMovies } from "@/services/movies"
import { MoviesPayload } from "@/services/types";
import { notFound } from "next/navigation";

export default async function Movies() {

    const { movies : { data: movieData}}:MoviesPayload = await getMovies();      
     
    if(!movieData.length) return notFound();
    
    return <Movieclient 
                data={movieData} 
                clickable 
                linkConfig={{ asLink: true, linkBase:"/movie" }}/>
            
}