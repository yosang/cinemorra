'use client'

// @ts-ignore
import { Input } from "@yosang/ui"
import { Form } from "lucide-react";
import styles from "./MovieForm.module.css" 
import { useFormState } from "react-dom";

import { GenreAndStudioObject, Movie } from "@/services/movies";
import { SubmitButton } from "@/app/components/Interactivity/SubmitButton";
import { useEffect, useRef, useState } from "react";
import { StateProps } from "@/app/(dashboard)/admin/movies/actions";

type Props = {
    movieData?: Movie
    genreData: GenreAndStudioObject[]
    studioData: GenreAndStudioObject[]
    serverActionFN: (initialState: StateProps, formData: FormData) => Promise<StateProps>
};

export default function MovieForm({ movieData, genreData, studioData, serverActionFN }:Props) {

    const formRef = useRef<HTMLFormElement>(null);
    const [state, formAction] = useFormState(serverActionFN, {})

    useEffect(() => {
        if(state?.success && formRef.current) {
            formRef.current.reset();
        }

    }, [state?.success, movieData])

    return <form ref={formRef} className={styles.layout} action={formAction} >
                <div className={styles.logo}>
                    <Form size={100}/>
                    </div>
                <Input 
                    required
                    defaultValue={movieData?.name}
                    type="text"
                    name="name"
                    labelText="Movie name"
                    />
                    <label>
                        <textarea 
                        required
                        defaultValue={movieData?.description}
                        name="description"
                        />
                    </label>
                <Input 
                    required
                    type="url"
                    name="imageLink"
                    defaultValue={movieData?.poster}
                    labelText="Movie image link"
                    />
                <label className={styles.label}>
                    Select a genre
                    <select
                        className={styles.select}
                        defaultValue={movieData?.genreId}
                        name="genre"
                        >
                        {genreData.map(g => (<option key={g.id} value={g.id} >{g.name}</option>))}

                    </select>
                </label>
                <label className={styles.label}>
                    Select a studio
                    <select 
                        className={styles.select}
                        defaultValue={movieData?.studioId}
                        name="studio"
                        >
                        {studioData.map(s => (<option key={s.id} value={s.id} >{s.name}</option>))}
                    </select>
                </label>
                
                <SubmitButton 
                    successState={state.success}
                    pendingLabel="Saving..."
                    staticLabel="Save"
                    />
                {state?.error && <p>{state.error}</p>}
            </form>
}