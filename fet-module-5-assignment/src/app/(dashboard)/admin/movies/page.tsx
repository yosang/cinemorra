import Movieclient from "@/app/components/Movie/MovieClient";
import { ADMIN_ADD_MOVIE_PATH} from "@/lib/constants";
import { getMovies } from "@/services/movies";
import { Suspense } from "react";
import { Button } from "@yosang/ui";
import Link from "next/link";
import styles from "./page.module.css"

export default function AdminMoviesPage() {
    const movies = getMovies(); 

    return <div className={styles.layout}>
                <div className={styles.btn}>
                        <Link href={ADMIN_ADD_MOVIE_PATH}><Button>Add New</Button></Link>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                        <Movieclient data={movies} topMenu={true} clickable={false} linkConfig={{ asLink: false}} />
                </Suspense>
          </div>
    
}