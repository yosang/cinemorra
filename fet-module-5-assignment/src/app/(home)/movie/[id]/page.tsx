import { notFound } from "next/navigation";

export default async function Movie({params}:{params: Promise<{ id: string}>}) {
    const { id } = await params;
    
    // Create an async function to fetch a single movie
    /**
     * const movie = await getMovie(params)
    */

    // Error handling, throws
    /**
     *  If something throws, the error.tsx should catch it and show a message
    */

    // Error handling - Not found
    /**
     * if(!movie) notFound() - Show the notfound view 
    */

    // Suspsense
    /**
     * Show a little suspsense fallback in case it takes time for the movie to render 
    */

    return (
        <>
        <h1>Single movie:</h1>
        <h1>Id: {id}</h1>
        </>
    )
}