// @ts-expect-error - input is loaded correctly
import { Input } from "@yosang/ui"
import styles from "./Movies.module.css"
import { getMovies } from "@/services/movies"
import MovieCard from "../components/MovieCard";
import { Suspense } from "react";
import Link from "next/link";

export default async function Movies() {
    const movies = await getMovies();
    
    return <div className={styles.layout}>
                <Input style={{ width: "50vw" }} labelText="Movie search" showLabelText={false} placeholder="Search a title..." />
                    <div className={styles.filter}>
                        <p>Order by</p>
                        <select>
                            <option value="alphabetic">Alphabetic</option>
                            <option value="newst">Newst</option>
                            <option value="oldest">Oldest</option>
                        </select>
                    </div>
                    <ul className={styles.gridSection}>
                        <Suspense fallback={<p>Loading...</p>}>
                            {movies.map(m => (<Link key={m.id} href={`movie/${m.id}`} ><MovieCard overlayText={m.name} image={m.poster} /></Link>))}
                        </Suspense>
                    </ul>
            </div>
    
}