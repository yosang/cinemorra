import { getMovie, type Movie } from "@/services/movies";
import MovieDetails from "../../../components/Movie/MovieDetails";
import { PLACEHOLDER_MOVIE_CARD_IMAGE } from "@/lib/constants";

export default async function Movie({params}:{params: Promise<{ id: string}>}) {
    const { id } = await params;
    
    const data = await getMovie(id);

    const { movie, reviews} = data;

    return <MovieDetails name={movie.name} description={movie.description} image={PLACEHOLDER_MOVIE_CARD_IMAGE} reviews={reviews}/>
}