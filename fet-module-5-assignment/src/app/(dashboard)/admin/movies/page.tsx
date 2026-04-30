import Movieclient from "@/app/components/Movie/MovieClient";
import { getMovies } from "@/services/movies";
import { Suspense } from "react";
import styles from "./page.module.css"
import Spinner from "@/app/components/Interactivity/Spinner";

export default function AdminMoviesPage() {
    const movies = getMovies(); 

    return <div className={styles.layout}>
                <Suspense fallback={<Spinner size={30}/>}>
                        <Movieclient data={movies} topMenu={true} clickable={false} linkConfig={{ asLink: false}} />
                </Suspense>
          </div>
    
}