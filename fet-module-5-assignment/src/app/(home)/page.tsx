import {getMovies } from "@/services/movies";
import Hero from "../components/Home/Hero";
import MovieGrid from "../components/Movie/MovieGrid";
import MovieCard from "../components/Movie/MovieCard";
import { HomeHeroImage } from "@/lib/constants";
import { Button } from "@yosang/ui";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MoviesPayload } from "@/services/types";

export default async function HomeView() {

    const { movies : { data: movieData}}:MoviesPayload = await getMovies();       

    if(!movieData.length) return notFound();
    
    const featuredMovies = movieData.slice(-5);
    
  return (
      <>
        <Hero imageSource={HomeHeroImage}>
            <h2>Borrow movies and watch them for free</h2>
            <h3>Watch from anywhere as long as you have an internet connection.</h3>
            <Link href="/movies"><Button>Browse collection</Button></Link>
        </Hero>
          
        <MovieGrid headerText="Featured">
            {featuredMovies.map((m) => (
                <Link key={m.id} href={`/movie/${m.id}`}>
                    <MovieCard 
                        clickableOverlay
                        image={m.poster} 
                        overlayComponent={<p>{m.name}</p>}/>
                </Link>
                ))}
        </MovieGrid>
      </>
  )
}
