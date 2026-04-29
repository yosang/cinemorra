'use client'
import styles from "./MovieClient.module.css"
import MovieCard from "@/app/components/Movie/MovieCard";
import { MutableRefObject, Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Movie } from "@/services/movies";
import { use } from "react";
import Searchbar from "@/app/components/Interactivity/Searchbar";
import CardMenu from "../Interactivity/CardMenu";

interface LinkConfigProps {
    asLink: boolean
    linkBase?: string
}

type Props= {
    linkConfig?: LinkConfigProps
    data: Promise<Movie[]>
    overlayComponent?: JSX.Element
    clickable: boolean
    topMenu?: boolean
}

export default function Movieclient({
        
        linkConfig,
        clickable,
        data, overlayComponent,
        topMenu
    
    }:Props) {
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
                    {/* <div className={styles.filter}>
                        <p>Order by</p>
                        <select>
                            <option value="alphabetic">Alphabetic</option>
                            <option value="newst">Newst</option>
                            <option value="oldest">Oldest</option>
                        </select>
                    </div> */}
                    <ul className={styles.gridSection}>
                        <Suspense fallback={<p>Loading...</p>}>
                            {list.map(m => linkConfig?.asLink 
                                ? (<Link key={m.id} href={`${linkConfig.linkBase}/${m.id}`} ><MovieCard clickableOverlay={clickable} overlayComponent={overlayComponent ?? <p>{m.name}</p>} image={m.poster} /></Link>)
                                : (<MovieCard clickableOverlay={clickable} topMenuComponent={topMenu ? (<CardMenu itemId={m.id} />):undefined} overlayComponent={overlayComponent ?? <p>{m.name}</p>} image={m.poster} />)
                                )}
                        </Suspense>
                    </ul>
            </div>
}