import { STYLE_CENTERED } from "@/lib/constants";
import { getMovies } from "@/services/movies"

export default async function AdminView() {
    const { movies: { data }} = await getMovies();
    const movieCount = data.length
    
    
    return <div style={STYLE_CENTERED}>
            <h1 >There are currently {movieCount} movies in the database</h1>
            </div>
}