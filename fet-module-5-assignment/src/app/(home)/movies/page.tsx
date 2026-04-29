import Movieclient from "@/app/components/Movie/MovieClient";
import { getMovies } from "@/services/movies"
import { Suspense } from "react";

export default function Movies() {
    const movies = getMovies();
    
    return <Suspense fallback={<p>Loading...</p>}>
                <Movieclient data={movies} clickable={true} linkConfig={{asLink: true, linkBase:"/movie"}}/>
            </Suspense>
}