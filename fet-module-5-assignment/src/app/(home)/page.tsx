import {getMovies, type Movie } from "@/services/movies";
import Hero from "../components/Home/Hero";
import MovieGrid from "../components/Movie/MovieGrid";
import MovieCard from "../components/Movie/MovieCard";
import { HomeHeroImage } from "@/lib/constants";
import { Button } from "@yosang/ui";
import Link from "next/link";
import { Suspense } from "react";

export default async function HomeView() {

    const movies = await getMovies();

  return (
      <>
        <Hero imageSource={HomeHeroImage}>
            <h2>Borrow movies and watch them for free</h2>
            <h3>Watch from anywhere as long as you have an interect connection.</h3>
            <Link href="/movies"><Button>Watch for free</Button></Link>
        </Hero>
          
        <MovieGrid headerText="Featured">
            <Suspense fallback={<p>Loading...</p>}>
                {movies.slice(-5).map((m:Movie) => (<Link key={m.id} href={`movie/${m.id}`}><MovieCard image={m.poster} overlayComponent={<p>{m.name}</p>}/></Link>))}
            </Suspense>
        </MovieGrid>
      </>
  )
}
