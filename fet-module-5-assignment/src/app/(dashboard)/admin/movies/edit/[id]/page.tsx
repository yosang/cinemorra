import MovieForm from "@/app/components/Interactivity/MovieForm";
import { getGenres, getMovie, getStudios } from "@/services/movies";
import { AddMovie } from "../../actions";

export default async function EditView({ params }:{params: Promise<{ id: string }>}) {
    const { id } = await params;

    const {movie} = await getMovie(id)

    const { genres: { data: genreData } } = await getGenres();
    const { studios: { data: studioData } } = await getStudios();

    return <MovieForm serverActionFN={AddMovie} movieData={movie}  genreData={genreData} studioData={studioData}/>
}