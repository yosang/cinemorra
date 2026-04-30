import { getGenres, getMovie, getStudios } from "@/services/movies";
import MovieDetails from "../../../components/Movie/MovieDetails";
import { SingleMovie } from "@/services/types";

export default async function Movie({params}:{params: Promise<{ id: string}>}) {
    const { id } = await params;
    
    const { movie, reviews }:SingleMovie = await getMovie(id);

    const { genreId, studioId, createdAt, updatedAt, ...movieRestProps} = movie;

    const {genres: { data: genreData }} = await getGenres();
    const {studios: { data: studioData }} = await getStudios();
    
    const genreName = genreData.find(g => g.id === movie.genreId)?.name
    const studioName = studioData.find(s => s.id === movie.studioId)?.name

    const payload = {
        ...movieRestProps,
        genreName,
        studioName,
        reviews
    }

    return <MovieDetails payload={payload}/>
}