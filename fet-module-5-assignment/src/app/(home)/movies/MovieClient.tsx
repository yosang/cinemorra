'use client'
// @ts-expect-error - input is loaded correctly
import { Button, Input } from "@yosang/ui"
import styles from "./Movies.module.css"
import MovieCard from "../components/MovieCard";
import { ChangeEvent, KeyboardEvent, MutableRefObject, Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Movie } from "@/services/movies";
import { use } from "react";

export default function Movieclient({data}:{data: Promise<Movie[]>}) {
    const inputRef: MutableRefObject<HTMLInputElement| undefined > = useRef();
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState(use(data))
    const [filteredMovies, setFilteredMovies] = useState<Movie[] | null>(null);

    const handleSearchSubmit = () => {
        if(!search.trim()) return
        setFilteredMovies(movies.filter(m => m.name.toLowerCase().includes(search)))
    }

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.trim() === "") {
            setFilteredMovies(null);
        }

        setSearch(e.target.value)
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") handleSearchSubmit()
    }

    const list = filteredMovies ?? movies;

    useEffect(() => {

        if(inputRef.current) {
            inputRef.current.focus();
        }

    }, [search])

    return <div className={styles.layout}>
                    <div className={styles.searchBar}>
                            <Input 
                                ref={inputRef}
                                style={{ width: "50vw" }} 
                                labelText="Movie search" 
                                showLabelText={false} 
                                value={search} 
                                onChange={handleOnChange} 
                                onKeyDown={handleKeyDown}
                                placeholder="Search a title..." 
                            />
                            <Button onClick={handleSearchSubmit}>Search</Button>
                    </div>
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
                            {list.map(m => (<Link key={m.id} href={`movie/${m.id}`} ><MovieCard overlayText={m.name} image={m.poster} /></Link>))}
                        </Suspense>
                    </ul>
            </div>
}