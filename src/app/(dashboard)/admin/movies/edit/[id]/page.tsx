import MovieForm from "@/app/components/Interactivity/MovieForm";
import { getGenres, getMovie, getStudios } from "@/services/movies";
import { EditMovie } from "../../actions";

/**
 * @description Reuses the MovieForm component to edit a movie.
 * - Fetches genreData and studioData for the MovieForm component, it uses this data to render select elements.
 * - Uses the params parameter to fetch a specific movie and pre-fill the form with current movie data.
 * @returns {JSX.Element}
 */
export default async function EditView({ params }:{params: Promise<{ id: string }>}) {
    const { id } = await params;

    const [ 
        {movie},
        { genres: { data: genreData } },
        { studios: { data: studioData } }
    ] = await Promise.all([await getMovie(id), await getGenres(), await getStudios()])

    return <MovieForm 
            pendingLabel="Updating..." 
            staticLabel="Save"
            serverActionFN={EditMovie} 
            movieData={movie} 
            genreData={genreData} 
            studioData={studioData}/>
}