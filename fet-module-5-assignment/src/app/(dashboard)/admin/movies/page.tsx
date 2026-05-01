import Movieclient from "@/app/components/Movie/MovieClient";
import { getMovies } from "@/services/movies";
import styles from "./page.module.css"
import { MoviesPayload } from "@/services/types";

export default async function AdminMoviesPage() {
    
const { movies : { data: movieData}}:MoviesPayload = await getMovies(); 
        
    return <div className={styles.layout}>
                <Movieclient data={movieData} topMenu={true} clickable={false} linkConfig={{ asLink: false}} />
          </div>
    
}