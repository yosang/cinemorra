import { GENERIC_FETCH_ERROR_STRING, GENRE, MOVIES, STUDIO } from "@/lib/constants";
import { notFound } from "next/navigation";

export interface Movie {
    id: string,
    name: string,
    description: string,
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
    movie: Movie,
    reviews: Review[]
}

export type GenreAndStudioObject = {
    id: number
    name: string,
    createdAt: string,
    updatedAt: string
}

export async function getMovies() {
    const res = await fetch(MOVIES, { next: { revalidate: 60 }});
    if(!res.ok) throw new Error(GENERIC_FETCH_ERROR_STRING)
    
    const { movies: { data } }:MoviesPayload = await res.json();

    if(data && data.length < 1) notFound();

    return data ?? null;
}

export async function getMovie(id: string) {
    const res = await fetch(`${MOVIES}/${id}`, { next: { revalidate: 60 }});
    
    if(!res.ok) throw new Error(GENERIC_FETCH_ERROR_STRING)
        
    const data:SingleMovie = await res.json();
        
    if(data && Object.keys(data).length < 1) notFound();

    return data ?? null;
}

export async function getGenres() {
    const res = await fetch(GENRE)
    
    if(!res.ok) throw new Error(GENERIC_FETCH_ERROR_STRING);

    return res.json() ?? null;
}

export async function getStudios() {
    const res = await fetch(STUDIO)
    
    if(!res.ok) throw new Error(GENERIC_FETCH_ERROR_STRING);

    return res.json() ?? null;
}