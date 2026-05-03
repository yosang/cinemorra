'use client'
import styles from "./MovieClient.module.css"
import MovieCard from "@/app/components/Movie/MovieCard";
import { MutableRefObject, useEffect, useRef } from "react";
import Link from "next/link";
import Searchbar from "@/app/components/Interactivity/Searchbar";
import CardMenu from "../Interactivity/CardMenu";
import { Movie } from "@/services/types";
import { useMovieStore } from "@/lib/useMoviesStore";

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
    
    const { movies, setMovies, filteredMovies } = useMovieStore();

    useEffect(() => {
        setMovies(data);
        
        if(inputRef.current) {
            inputRef.current.focus();
        }
    }, [data, setMovies])
    
    const list = filteredMovies ?? movies;

    return <div className={styles.layout}>
                    <Searchbar ref={inputRef} data={movies} />
                    <ul className={styles.gridSection}>
                            {list.map(m => linkConfig?.asLink 
                                ? (<li key={m.id}>
                                        <Link 
                                        href={`${linkConfig.linkBase}/${m.id}`} 
                                        >
                                        <MovieCard 
                                        clickableOverlay={clickable} 
                                        overlayComponent={overlayComponent ?? <p>{m.name}</p>} 
                                        image={m.poster} />
                                        </Link>
                                    </li>
                                )
                                : (<li key={m.id}>
                                        <MovieCard 
                                        clickableOverlay={clickable} 
                                        topMenuComponent={topMenu ? (<CardMenu itemLabel={m.name} itemId={m.id} />):undefined} 
                                        overlayComponent={overlayComponent ?? <p>{m.name}</p>} 
                                        image={m.poster} 
                                        />
                                    </li>
                                    )
                                )}
                    </ul>
            </div>
}