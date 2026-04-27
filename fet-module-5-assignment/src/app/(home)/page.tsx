import {getMovies, type Movie } from "@/services/movies";
import Hero from "./components/Hero";
import HomeSection from "./components/HomeSection";
import MovieCard from "./components/MovieCard";
import { HomeHeroImage } from "@/lib/constants";

export default async function HomeView() {

    const movies = await getMovies();

  return (
      <>
        <Hero imageSource={HomeHeroImage}>
            <h2>Borrow movies and watch them for free</h2>
            <h3>Watch from anywhere as long as you have an interect connection.</h3>
        </Hero>
          
        <HomeSection headerText="Latest addition">
            {movies.slice(-5).map((m:Movie) => (<MovieCard key={m.id} image={m.poster} overlayText={m.name}/>))}
        </HomeSection>
      </>
  )
}
