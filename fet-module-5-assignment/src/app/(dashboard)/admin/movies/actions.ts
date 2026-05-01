'use server'

import { MOVIES } from "@/lib/constants"
import { getMovies } from "@/services/movies"
import { MoviesPayload } from "@/services/types"
import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"

export type StateProps = {
    success?: boolean
    error?:string
}

// @ts-expect-error - initialState not being used
export async function AddMovie(initialState, formData:FormData ): Promise<StateProps> {
    const authToken = getAuthToken();

    if(!MOVIES) throw new Error("Missing ENV variables")

    if(!authToken) return { error: "Unauthenticated"}
    
    if(await isDuplicate(formData)) return { error: `A movie with that name exists already, try a different one.`}
    
    const data = Object.fromEntries(formData)

    const res = await fetch(MOVIES, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${authToken}`},
        body: JSON.stringify({
            name: data.name,
            description: data.description,
            poster: data.imageLink,
            genreId: Number(data.genre),
            studioId: Number(data.studio)
        })
    })

    if(!res.ok) return { error: "Internal Server Error"}

    return successHandler();
}


// @ts-expect-error - initialState not being used
export async function DeleteMovie(initialState, formData: FormData): Promise<StateProps> {
    const authToken = getAuthToken();
    
    if(!MOVIES) throw new Error("Missing ENV variables")

    if(!authToken) return { error: "Unauthenticated"}

    const id = formData.get("id") as string;

    const res = await fetch(`${MOVIES}/${id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${authToken}` }
    })

    if(!res.ok) return { error: "Internal Server Error"};

    return successHandler(id);
}

// @ts-expect-error - initialState not being used
export async function EditMovie(initialState, formData: FormData): Promise<StateProps> {
    const authToken = getAuthToken();

    if(!MOVIES) throw new Error("Missing ENV variables")
    if(!authToken) return { error: "Unauthenticated"}

    const id = formData.get("id") as string;
    
    if(await isDuplicate(formData)) return { error: `A movie with that name exists already, try a different one.`}
    
    const data = Object.fromEntries(formData);

    const payload = JSON.stringify({
            name: data.name,
            description: data.description,
            poster: data.imageLink,
            genreId: Number(data.genre),
            studioId: Number(data.studio)
    })

    const res = await fetch(`${MOVIES}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type":"application/json","Authorization": `Bearer ${authToken}` },
        body: payload
    })

    if(!res.ok) return { error: "Internal Server Error"}

    return successHandler(id);
}

// Helper functions
function getAuthToken() {
    const cookieStore = cookies();
    return cookieStore.get("auth_token")?.value;
}

async function isDuplicate(formData: FormData) {
    const { movies: { data: moviesData} }:MoviesPayload = await getMovies();

    const id = formData.get("id");
    const name = formData.get("name");

    // Here we want to do an id check in case there is a scenario where:
    // We edit a movie, dont change anything (name) and save
    // If the name is the same, without checking if the id is not of the current movie
    // it will block the save as the moviesData will in fact have a record with the same name, which is the one we are currently editing.

    return id ? moviesData.some(m => m.name === name && m.id !== Number(id)):moviesData.some(m => m.name === name)
}

const successHandler = (id?:string) => {
    revalidateTag("movies");

    if(id) {
        revalidateTag(`movie:${id}`);
    }

    return { success: true}
}