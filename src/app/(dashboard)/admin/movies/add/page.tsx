import MovieForm from "@/app/components/Interactivity/MovieForm";
import { getGenres, getStudios } from "@/services/movies";

import { AddMovie } from "../actions";


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