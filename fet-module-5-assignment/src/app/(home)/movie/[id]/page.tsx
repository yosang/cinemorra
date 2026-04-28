import { getMovie, type Movie } from "@/services/movies";
import MovieDetails from "../../components/MovieDetails";

export default async function Movie({params}:{params: Promise<{ id: string}>}) {
    const { id } = await params;
    
    const data = await getMovie(id);

    const { movie, reviews} = data;

    return <MovieDetails name={movie.name} description={movie.description} image={movie.poster} reviews={reviews}/>
}