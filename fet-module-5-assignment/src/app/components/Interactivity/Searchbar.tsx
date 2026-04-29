'use client'

import { ChangeEvent, Dispatch, forwardRef, KeyboardEvent, memo, SetStateAction, useState } from "react"
import styles from "./Searchbar.module.css"

// @ts-ignore
import { Input, Button } from "@yosang/ui"
import { Movie } from "@/services/movies"

type Props = {
    data: Movie[]
    setter: Dispatch<SetStateAction<Movie[] | null>>
}

const Searchbar = forwardRef(function SearchBarComponent({data, setter}:Props, ref) {
    const [search, setSearch] = useState("");

    const handleSearchSubmit = () => {
        if(!search.trim()) return
        setter(data.filter(m => m.name.toLowerCase().includes(search)))
    }

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.trim() === "") {
            setter(null);
        }

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