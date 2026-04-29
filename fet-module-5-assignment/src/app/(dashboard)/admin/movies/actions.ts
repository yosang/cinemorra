'use server'

import { MOVIES } from "@/lib/constants"
import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"

export type StateProps = {
    success?: boolean
    error?:string
}

// @ts-expect-error - initialState not being used
export async function AddMovie(initialState, formData:FormData ): Promise<StateProps> {
    const authToken = getAuthToken();

    //! Consider doing something else here
    if(!authToken) return { error: "Unauthenticated"}

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
    
    //! Consider doing something else here
    if(!authToken) return { error: "Unauthenticated"}

    const id = formData.get("id") as string;

    const res = await fetch(`${MOVIES}/${id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${authToken}` }
    })

    if(!res.ok) return { error: "Internal Server Erroir"};

    return successHandler(id);
}

// @ts-expect-error - initialState not being used
export async function EditMovie(initialState, formData: FormData): Promise<StateProps> {
    const authToken = getAuthToken();

    //! Consider doing something else here
    if(!authToken) return { error: "Unauthenticated"}

    const id = formData.get("id") as string;
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

const successHandler = (id?:string) => {
    revalidateTag("movies");

    if(id) {
        revalidateTag(`movie:${id}`);
    }

    return { success: true}
}