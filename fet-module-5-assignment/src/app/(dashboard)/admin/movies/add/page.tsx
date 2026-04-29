import AddMovieForm from "./AddMovieForm"
import { getGenres, getStudios } from "@/services/movies";

export default async function AdminMoviesPage() {
    const { genres: { data: genreData } } = await getGenres();
    const { studios: { data: studioData } } = await getStudios();

    return <AddMovieForm genreData={genreData} studioData={studioData}/>
}