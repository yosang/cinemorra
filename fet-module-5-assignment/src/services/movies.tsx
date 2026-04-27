import { MOVIES } from "@/lib/constants";

export interface Movie {
    id: string,
    name: string,
    poster: string,
    genreId: number,
    studioId: number,
    createdAt: string,
    updatedAt: string
}

export type MoviesPayload = {
    movies: { [key:string]:Movie[]}
}

export default async function getMovies() {
    const res = await fetch(MOVIES, { next: { revalidate: 60 }});
    if(!res.ok) throw new Error("Something went wrong during fetch operation")
    
    const { movies: { data } }:MoviesPayload = await res.json();

    return data;
}