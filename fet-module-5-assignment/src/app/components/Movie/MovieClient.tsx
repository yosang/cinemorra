'use client'
import styles from "./MovieClient.module.css"
import MovieCard from "@/app/components/Movie/MovieCard";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Searchbar from "@/app/components/Interactivity/Searchbar";
import CardMenu from "../Interactivity/CardMenu";
import { Movie } from "@/services/types";

interface LinkConfigProps {
    asLink: boolean
    linkBase?: string
}

type Props= {
    linkConfig?: LinkConfigProps
    data: Movie[]
    overlayComponent?: JSX.Element
    clickable: boolean
    topMenu?: boolean
}

export default function Movieclient({
        linkConfig,
        clickable,
        data, 
        overlayComponent,
        topMenu
    }:Props) {
    const inputRef: MutableRefObject<HTMLInputElement| undefined > = useRef();
    
    const prevMoviesRef = useRef<Movie[] | null>(null);
    const [movies, setMovies] = useState(data);
    const [filteredMovies, setFilteredMovies] = useState<Movie[] | null>(null);

    const list = filteredMovies ?? movies;

    useEffect(() => {
        const prevMovies = prevMoviesRef.current;

        // This useEffect ensures that if we delete a movie while being in a search state, we update the filtered list aswell so we can
        // immediately see the deletion happen in the filtered list aswell, this is because filteredMovies is a derived
        // state of the movies state and not the real source of truth.
        // if prevMovies is no longer equal in reference to movies and we have filtered list
        // We want to update the filtered list with a new list where we only keep the movies in the filtered list whose id still exists in
        // the movies list and the filtered movies list, those who are no longer in the movies list are excluded
        if(prevMovies && prevMovies !== movies && filteredMovies) {
            setFilteredMovies(movies.filter(movie => filteredMovies.some(fm => fm.id === movie.id)))
        }

        prevMoviesRef.current = movies;

    }, [movies])

    useEffect(() => {

        if(inputRef.current) {
            inputRef.current.focus();
        }

    }, [])

    return <div className={styles.layout}>
                    <Searchbar ref={inputRef} data={movies} setter={setFilteredMovies} />
                    <ul className={styles.gridSection}>
                            {list.map(m => linkConfig?.asLink 
                                ? (<Link 
                                    key={m.id} 
                                    href={`${linkConfig.linkBase}/${m.id}`} 
                                    >
                                    <MovieCard 
                                    clickableOverlay={clickable} 
                                    overlayComponent={overlayComponent ?? <p>{m.name}</p>} 
                                    image={m.poster} /></Link>
                                )
                                : (<MovieCard 
                                    key={m.id} 
                                    clickableOverlay={clickable} 
                                    topMenuComponent={topMenu ? (<CardMenu setter={setMovies} itemLabel={m.name} itemId={m.id} />):undefined} 
                                    overlayComponent={overlayComponent ?? <p>{m.name}</p>} 
                                    image={m.poster} />)
                                )}
                    </ul>
            </div>
}