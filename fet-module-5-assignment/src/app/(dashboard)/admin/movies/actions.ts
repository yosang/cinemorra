'use server'

import { MOVIES } from "@/lib/constants"
import { cookies } from "next/headers"

export type AddMovieStateProps = {
    success?: boolean
    error?:string
}

// @ts-expect-error - initialState not being used
export default async function AddMovie(initialState, formData:FormData ): Promise<AddMovieStateProps> {
    const cookieStore = cookies();
    const auth_token = cookieStore.get("auth_token")?.value;

    // Probably kick em out and redirect back to login
    if(!auth_token) return { error: "Unauthenticated"}

    const data = Object.fromEntries(formData)

    const res = await fetch(MOVIES, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${auth_token}`},
        body: JSON.stringify({
            name: data.name,
            description: data.description,
            poster: data.imageLink,
            genreId: Number(data.genre),
            studioId: Number(data.studio)
        })
    })

    if(!res.ok) return { error: "Internal Server Error"}

    return { success: true}
}