'use server'

import { GENERIC_FETCH_ERROR_STRING, MOVIES } from "@/lib/constants"
import { cookies } from "next/headers"

export default async function AddMovie(formData: FormData ) {
    const cookieStore = cookies();
    const auth_token = cookieStore.get("auth_token")?.value;

    // Probably kick em out and redirect back to login
    if(!auth_token) throw new Error("Internal Error")

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

    // console.log(res)
    if(!res.ok) throw new Error(GENERIC_FETCH_ERROR_STRING)
}