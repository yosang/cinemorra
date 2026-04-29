import Movieclient from "@/app/components/Movie/MovieClient";
import { ADMIN_EDIT_MOVIE_PATH, ADMIN_MOVIES_PATH} from "@/lib/constants";
import { getMovies } from "@/services/movies";
import { Suspense } from "react";
import CardMenu from "../../../components/Interactivity/CardMenu";

export default function AdminMoviesPage() {
    const movies = getMovies(); 

    return <Suspense fallback={<p>Loading...</p>}>
                    <Movieclient data={movies} topMenu={true} clickable={false} linkConfig={{ asLink: false}} />
            </Suspense>
}