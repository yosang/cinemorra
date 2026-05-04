import MovieForm from "@/app/components/Interactivity/MovieForm";
import { getGenres, getStudios } from "@/services/movies";

import { AddMovie } from "../actions";

/**
 * @description Reuses the MovieForm component to add a new movie.
 * - Fetches genreData and studioData for the MovieForm component, it uses this data to render select elements.
 * @returns {JSX.Element}
 */
export default async function AdminMoviesPage() {
    const [
        { genres: { data: genreData } },
        { studios: { data: studioData } }
    ] = await Promise.all([await getGenres(), await getStudios()])

    return <MovieForm 
            pendingLabel="Adding..." 
            staticLabel="Add"
            serverActionFN={AddMovie} 
            genreData={genreData} 
            studioData={studioData}/>
}