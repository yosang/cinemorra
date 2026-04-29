import Movieclient from "@/app/components/Movie/MovieClient";
import { ADMIN_ADD_MOVIE_PATH} from "@/lib/constants";
import { getMovies } from "@/services/movies";
import { Suspense } from "react";
import { Button } from "@yosang/ui";
import Link from "next/link";
import styles from "./page.module.css"
import NavigationBar from "@/app/components/Navigation/Navbar";
import Spinner from "@/app/components/Interactivity/Spinner";

export default function AdminMoviesPage() {
    const movies = getMovies(); 

    return <div className={styles.layout}>
                <div className={styles.nav}>
                        <NavigationBar sticky={true}>
                                <Link href={ADMIN_ADD_MOVIE_PATH}><Button>Add New</Button></Link>
                        </NavigationBar>
                </div>
                <Suspense fallback={<Spinner size={30}/>}>
                        <Movieclient data={movies} topMenu={true} clickable={false} linkConfig={{ asLink: false}} />
                </Suspense>
          </div>
    
}