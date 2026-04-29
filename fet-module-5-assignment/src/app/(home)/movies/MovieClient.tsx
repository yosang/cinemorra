'use client'
import styles from "./MovieClient.module.css"
import MovieCard from "../../components/Movie/MovieCard";
import { MutableRefObject, Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Movie } from "@/services/movies";
import { use } from "react";
import Searchbar from "@/app/components/Interactivity/Searchbar";

export default function Movieclient({data}:{data: Promise<Movie[]>}) {
    const inputRef: MutableRefObject<HTMLInputElement| undefined > = useRef();
    
    const fetchData = use(data);
    
    const [movies, setMovies] = useState(fetchData);
    const [filteredMovies, setFilteredMovies] = useState<Movie[] | null>(null);

    const list = filteredMovies ?? movies;

    useEffect(() => {

        if(inputRef.current) {
            inputRef.current.focus();
        }

    }, [])

    return <div className={styles.layout}>
                    <Searchbar ref={inputRef} data={movies} dispatchFN={setFilteredMovies} />
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
                            {list.map(m => (<Link key={m.id} href={`movie/${m.id}`} ><MovieCard overlayComponent={<p>{m.name}</p>} image={m.poster} /></Link>))}
                        </Suspense>
                    </ul>
            </div>
}