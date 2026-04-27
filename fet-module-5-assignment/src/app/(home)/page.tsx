import Hero from "./components/Hero";
import HomeSection from "./components/HomeSection";
import MovieCard from "./components/MovieCard";

export default async function HomeView() {

    // Get latest 5 movies
    const res = await fetch(" http://movieapi.restapi.co.za/movie"); // Replace with a service function of some sorts
    const { movies: { data } } = await res.json();

    // Create an async function to fetch a movies
    /**
     * const movie = await getMovies()
    */

  return (
      <div>
        <Hero imageSource="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
           <h2>Borrow movies and watch them for free</h2>
            <h3>We do our best to put out the latest and most interesting movies, watch from anywhere as long as you have an interect connection.</h3>
        </Hero>
        
      <HomeSection headerText="Latest addition">
        <MovieCard image="http://images.restapi.co.za/posters/inception.png" overlayText="Image text"/>
        <MovieCard image="http://images.restapi.co.za/posters/inception.png" overlayText="Image text"/>
        <MovieCard image="http://images.restapi.co.za/posters/inception.png" overlayText="Image text"/>
        <MovieCard image="http://images.restapi.co.za/posters/inception.png" overlayText="Image text"/>
        <MovieCard image="http://images.restapi.co.za/posters/inception.png" overlayText="Image text"/>
        <MovieCard image="http://images.restapi.co.za/posters/inception.png" overlayText="Image text"/>
        <MovieCard image="http://images.restapi.co.za/posters/inception.png" overlayText="Image text"/>
        <MovieCard image="http://images.restapi.co.za/posters/inception.png" overlayText="Image text"/>
        <MovieCard image="http://images.restapi.co.za/posters/inception.png" overlayText="Image text"/>
      </HomeSection>

      <HomeSection headerText="Classics">
        <MovieCard image="http://images.restapi.co.za/posters/inception.png" overlayText="Image text"/>
      </HomeSection>

      <HomeSection headerText="Animation">
        <MovieCard image="http://images.restapi.co.za/posters/inception.png" overlayText="Image text"/>
      </HomeSection>
      </div>
  )
}
