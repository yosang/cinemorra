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
    asLink: boolean // If true, each MovieCard is wrapper in a Link component from next/link
    linkBase?: string // Base path used to build the Link's href url
}

type Props= {
    linkConfig?: LinkConfigProps // Optional link behavior when using the Link component
    data: Movie[] // Initial list of movies
    overlayComponent?: JSX.Element // Custom overlay component, used to display text such as name of the movie
    clickable: boolean // Wether or not we want the MovieCard to be clickable, we are disabling this in the admin page as we are using a menu
    topMenu?: boolean // Wether or not to use a top menu on the card, we are using this in the admin page to edit/delete movies
}

/**
 * @description Renders a searchable list of movies in a grid layout
 * 
 * Features:
 * - Integrates with movie store from ( useMovieStore )
 * - Supports searching, via the Searchbar component
 * - Allows custom overlay text title and interactive menu
 * 
 * Behavior:
 * - Sets the movies passed down from the server component to the movie store ( useMovieStore )
 * - Sets focus on the search bar on mount
 * - Display filtered movies on search by clicking the submit button or pressing the enter key, displays the original movie list when clearing out the search text
 * @returns {JSX.Element} List of movies with configurable interactivity
 */
export default function Movieclient({
        linkConfig,
        clickable,
        data, 
        overlayComponent,
        topMenu
    }:Props) {
    const inputRef: MutableRefObject<HTMLInputElement| undefined > = useRef(); // Ref used to put focus on the searchbar
    
    const { movies, setMovies, filteredMovies } = useMovieStore();

    useEffect(() => {
        setMovies(data);
        
        if(inputRef.current) {
            inputRef.current.focus();
        }
    }, [data, setMovies])
    
    const list = filteredMovies ?? movies; // Uses the filtered list of its not null, otherwise default to movies

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