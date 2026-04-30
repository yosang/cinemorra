import { getMovies } from "@/services/movies"

export default async function AdminView() {
    const movies = await getMovies();
    const movieCount = movies.length
    
    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh"
    }
    
    return <div style={style}>
            <h1 >There are currently {movieCount} movies in the database</h1>
            </div>
}