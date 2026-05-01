'use client'

// @ts-ignore
import { Input } from "@yosang/ui"
import { Form } from "lucide-react";
import styles from "./MovieForm.module.css" 
import { useFormState } from "react-dom";

import { SubmitButton } from "@/app/components/Interactivity/SubmitButton";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { StateProps } from "@/app/(dashboard)/admin/movies/actions";
import { GenreAndStudioObject, Movie } from "@/services/types";
import { toast } from "sonner";

type Props = {
    movieData?: Movie
    genreData: GenreAndStudioObject[]
    studioData: GenreAndStudioObject[]
    pendingLabel: string;
    staticLabel: string;
    serverActionFN: (initialState: StateProps, formData: FormData) => Promise<StateProps>
};

export default function MovieForm({ movieData, pendingLabel, staticLabel, genreData, studioData, serverActionFN }:Props) {

    const inputRef: MutableRefObject<HTMLInputElement | undefined> = useRef();
    const formRef = useRef<HTMLFormElement>(null);
    const [state, formAction] = useFormState(serverActionFN, {})
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if(inputRef.current) {
            inputRef.current.focus();
        }
    }, [])

    useEffect(() => {
        if(state?.success && formRef.current) {
            formRef.current.reset();
            setSuccess(true);
            
            if(movieData) {
                toast.success("Changes saved.")
            } else {
                toast.success("Movie added!")
            }
        }

        const timer = setTimeout(() => setSuccess(false), 2000);

        return () => clearTimeout(timer);

    }, [state?.success, movieData])

    return <form 
                // Little hack: When we send off our patch or create, the defaultValues become stale, so to force the form to re-mound we use the sucess state as key, once it changes, react remounts
                key={`${movieData?.id ?? "create"}-${state?.success}`}  

                ref={formRef} 
                className={styles.layout} 
                action={formAction} 
            >
                <div className={styles.logo}>
                    <Form size={100}/>
                    </div>
                <Input 
                    ref={inputRef}
                    disabled={success}
                    required
                    defaultValue={movieData?.name}
                    placeholder={movieData ?? "Enter a movie name"}
                    type="text"
                    name="name"
                    labelText="Movie name"
                    />
                <label>
                    <textarea 
                    disabled={success}
                    required
                    defaultValue={movieData?.description}
                    placeholder={movieData?.description ?? "Enter a movie description"}
                    name="description"
                    />
                </label>
                <Input 
                    disabled={success}
                    required
                    type="url"
                    name="imageLink"
                    defaultValue={movieData?.poster}
                    placeholder={movieData ?? "Please provide a image poster link"}
                    labelText="Movie image link"
                    />
                <label className={styles.label}>
                    Select a genre
                    <select
                        disabled={success}
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
                        disabled={success}
                        className={styles.select}
                        defaultValue={movieData?.studioId}
                        name="studio"
                        >
                        {studioData.map(s => (<option key={s.id} value={s.id} >{s.name}</option>))}
                    </select>
                </label>
                
                <input type="hidden" name="id" value={movieData?.id} />

                <SubmitButton 
                    successState={success}
                    pendingLabel={pendingLabel}
                    staticLabel={staticLabel}
                    />
                {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
            </form>
}