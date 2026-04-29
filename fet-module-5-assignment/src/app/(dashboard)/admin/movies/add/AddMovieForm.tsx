'use client'

// @ts-ignore
import { Input } from "@yosang/ui"
import { Form } from "lucide-react";
import styles from "./AddMovieForm.module.css" 
import { AddMovie, StateProps } from "../actions";
import { useFormState } from "react-dom";

import { GenreAndStudioObject } from "@/services/movies";
import { SubmitButton } from "@/app/components/Interactivity/SubmitButton";
import { useEffect, useRef } from "react";

export default function AddMovieForm({ genreData, studioData }:{
    genreData: GenreAndStudioObject[]
    studioData: GenreAndStudioObject[]
}) {

    const formRef = useRef<HTMLFormElement>(null);
    const [state, formAction] = useFormState<StateProps, FormData>(AddMovie, {})

    useEffect(() => {

        if(state?.success && formRef.current) {
            formRef.current.reset();
        }

    }, [state?.success])

    return <form ref={formRef} className={styles.layout} action={formAction} >
                <div className={styles.logo}>
                    <Form size={100}/>
                    </div>
                <Input 
                    required
                    type="text"
                    name="name"
                    placeholder="Enter movie name"
                    labelText="Movie name"
                    />
                <Input 
                    required
                    type="text"
                    name="description"
                    placeholder="Enter movie description..."
                    labelText="Movie description"
                    />
                <Input 
                    required
                    type="url"
                    name="imageLink"
                    placeholder="Enter movie image link"
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
                
                <SubmitButton 
                    successState={state.success}
                    pendingLabel="Adding..."
                    staticLabel="Add"
                    />
                {state?.error && <p>{state.error}</p>}
            </form>
}