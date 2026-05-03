'use client'

import { ChangeEvent, forwardRef, KeyboardEvent, memo, useState } from "react"
import styles from "./Searchbar.module.css"

// @ts-ignore
import { Input, Button } from "@yosang/ui"
import { Movie } from "@/services/types"
import { useMovieStore } from "@/lib/useMoviesStore"

type Props = {
    data: Movie[]
}

const Searchbar = forwardRef(function SearchBarComponent({data}:Props, ref) {
    const { setFilteredMovies, resetFilter } = useMovieStore();
    const [search, setSearch] = useState("");

    const handleSearchSubmit = () => {
        if(!search.trim()) {
            resetFilter();
            return;
        }
        setFilteredMovies(data.filter(m => m.name.toLowerCase().includes(search.toLowerCase())))
    }

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.trim() === "") resetFilter()

        setSearch(e.target.value)
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") handleSearchSubmit()
    }

    return  <div className={styles.searchBar}>
                <Input 
                    ref={ref}
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
})

export default memo(Searchbar)