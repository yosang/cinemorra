import { create } from "zustand";
import { Movie } from "@/services/types";

interface MovieStore {
    movies: Movie[],
    filteredMovies: Movie[] | null
    setMovies: (movies: Movie[]) => void
    setFilteredMovies: (filtered: Movie[] | null) => void
    resetFilter: () => void
    deleteMovie: (id:number) => void
}

/**
 * Movie states with zustand
 * Allows us to set movies fetched from the API, store a second state with filtered movies, currently in a search input
 * We can also delete a movie and reset the filtered movies state
 */
export const useMovieStore = create<MovieStore>((set, get) => ({
    movies: [],
    filteredMovies: null,

    setMovies: (movies) => set({ movies }),
    setFilteredMovies: (filtered) => set({ filteredMovies: filtered }),
    resetFilter: () => set({filteredMovies: null}),
    deleteMovie: (id) => {
        const {movies, filteredMovies} = get();

        // Update the main list
        set({movies: movies.filter((m) => m.id !== id)})

        // If search is active, remove the deleted movie from the filtered list
        if(filteredMovies) set({ filteredMovies: filteredMovies.filter((m) => m.id !== id) })
    }
}))