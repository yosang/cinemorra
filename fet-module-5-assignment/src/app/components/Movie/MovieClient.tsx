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
    
    const [movies, setMovies] = useState(data);
    const [filteredMovies, setFilteredMovies] = useState<Movie[] | null>(null);

    const list = filteredMovies ?? movies;

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