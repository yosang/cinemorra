import { getMovies } from "@/services/movies"
import Movieclient from "./MovieClient";
import { Suspense } from "react";

export default function Movies() {
    const movies = getMovies();
    
    return <Suspense fallback={<p>Loading...</p>}>
                <Movieclient data={movies}/>
            </Suspense>
}