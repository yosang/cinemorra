import { MOVIES } from "@/lib/constants";
import { notFound } from "next/navigation";

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
    movies: {
        data: Movie[]
    }
}

export type Review = {
    id: number,
     reviewerName: string,
     reviewText: string,
     movieId: number,
     createdAt: string,
     updatedAt: string
}

export type SingleMovie = {
    movies: Movie,
    reviews: Review[]
}


// Add return type
export async function getMovies() {
    const res = await fetch(MOVIES, { next: { revalidate: 60 }});
    if(!res.ok) throw new Error("Something went wrong during fetch operation")
    
    const { movies: { data } }:MoviesPayload = await res.json();

    if(data && data.length < 1) notFound();

    return data ?? null;
}

// Add return type
export async function getMovie(id: string) {
    const res = await fetch(`${MOVIES}/${id}`, { next: { revalidate: 60 }});
    
    if(!res.ok) throw new Error("Something went wrong during fetch operation")
        
        const data:SingleMovie = await res.json();
        
    if(data && Object.keys(data).length < 1) notFound();

    return data ?? null;
}