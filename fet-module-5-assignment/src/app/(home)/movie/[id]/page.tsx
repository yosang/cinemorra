import { notFound } from "next/navigation";
import { getMovie, type Movie } from "@/services/movies";

export default async function Movie({params}:{params: Promise<{ id: string}>}) {
    const { id } = await params;
    
    const data = await getMovie(id);

    const { movie, reviews} = data;

    // Suspsense
    /**
     * Show a little suspsense fallback in case it takes time for the movie to render 
    */

    return (
        <>
        <h1>Single movie:</h1>
        <h1>Movie name: {movie?.name}</h1>
        </>
    )
}