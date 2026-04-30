import { GENRE, MOVIES, STUDIO } from "@/lib/constants";
import { GenreAndStudioResponse } from "./types";

export async function getMovies() {

    if(!MOVIES) throw new Error("Missing ENV variables")
        
    const res = await fetch(MOVIES, { next: { revalidate: 60, tags: ["movies"] }});
    
    if(!res.ok) throw new Error("Failed to fetch movies data")
                        
    return res.json() ?? null;
}
        
export async function getMovie(id: string) {
    if(!MOVIES) throw new Error("Missing ENV variables")
        
    const res = await fetch(`${MOVIES}/${id}`, { next: { revalidate: 60, tags: [`movie:${id}`] }});
    
    if(!res.ok) throw new Error("Failed to fetch movie data")
        
    return res.json() ?? null;
}

export async function getGenres(): Promise<GenreAndStudioResponse> {
    if(!GENRE) throw new Error("Missing ENV variables")

    const res = await fetch(GENRE, { next: { revalidate: 60}})
    
    if(!res.ok) throw new Error("Failed to fetch genres data");

    return res.json() ?? null;
}

export async function getStudios(): Promise<GenreAndStudioResponse> {
    if(!STUDIO) throw new Error("Missing ENV variables")
        
    const res = await fetch(STUDIO, { next: { revalidate: 60}})
    
    if(!res.ok) throw new Error("Failed to fetch studio data");

    return res.json() ?? null;
}