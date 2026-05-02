import { getGenres, getMovie, getStudios } from "@/services/movies";
import MovieDetails from "../../../components/Movie/MovieDetails";
import { notFound } from "next/navigation";

export default async function Movie({params}:{params: Promise<{ id: string}>}) {
    const { id } = await params;
    
    const [
        { movie, reviews },
        {genres: { data: genreData }},
        {studios: { data: studioData }}
    ] = await Promise.all([await getMovie(id), await getGenres(), await getStudios()])

    if(!movie || !reviews) return notFound();

    const { genreId, studioId, createdAt, updatedAt, ...movieRestProps} = movie;
    
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