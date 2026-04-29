import MovieForm from "@/app/components/Interactivity/MovieForm";
import { getGenres, getMovie, getStudios } from "@/services/movies";
import { EditMovie } from "../../actions";

export default async function EditView({ params }:{params: Promise<{ id: string }>}) {
    const { id } = await params;

    const {movie} = await getMovie(id)

    const { genres: { data: genreData } } = await getGenres();
    const { studios: { data: studioData } } = await getStudios();

    return <MovieForm 
            pendingLabel="Updating..." 
            staticLabel="Save"
            serverActionFN={EditMovie} 
            movieData={movie} 
            genreData={genreData} 
            studioData={studioData}/>
}