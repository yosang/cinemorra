'use client'

// @ts-ignore
import { Button, Input } from "@yosang/ui"
import { Form } from "lucide-react";
import styles from "./AddMovieForm.module.css"
import AddMovie from "../actions";

import { GenreAndStudioObject } from "@/services/movies";

export default async function AddMovieForm({ genreData, studioData }:{
    genreData: GenreAndStudioObject[]
    studioData: GenreAndStudioObject[]
}) {

    return <form className={styles.layout} action={AddMovie} >
                <div className={styles.logo}>
                    <Form size={100}/>
                    </div>
                <Input 
                    type="text"
                    name="name"
                    placeholder="Enter movie name"
                    labelText="Movie name"
                    />
                <Input 
                    type="text"
                    name="description"
                    placeholder="Enter movie description..."
                    labelText="Movie description"
                    />
                <Input 
                    type="text"
                    name="imageLink"
                    placeholder="Enter movie name"
                    labelText="Movie image link"
                />
                <label className={styles.label}>
                    Select a genre
                    <select
                        className={styles.select}
                        name="genre"
                    >
                        {genreData.map(g => (<option key={g.id} value={g.id}>{g.name}</option>))}

                    </select>
                </label>
                <label className={styles.label}>
                    Select a studio
                    <select 
                        className={styles.select}
                        name="studio"
                        >
                        {studioData.map(s => (<option key={s.id} value={s.id}>{s.name}</option>))}
                    </select>
                </label>
                <Button type="submit">Add movie</Button>
            </form>
}