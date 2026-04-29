import Movieclient from "@/app/(home)/movies/MovieClient";
import { getMovies } from "@/services/movies";
import { Suspense } from "react";

export default function AdminMoviesPage() {
    const movies = getMovies(); 

    return <Suspense fallback={<p>Loading...</p>}>
                    <Movieclient data={movies}/>
            </Suspense>
}