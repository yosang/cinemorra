import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import MovieDetails, { type MovieDetailsPayload } from "@/app/components/Movie/MovieDetails";

// Mocks
jest.mock("@yosang/ui", () => ({
    __esModule: true,
    Button: () =><button />
}), { virtual: true });

jest.mock("next/image", () => ({ 
    __esModule:true,
    default: () => <img alt="mock image"/>
 }));

test("MovieDetails page renders correct details", () => {

    const dummyMovie: MovieDetailsPayload = {
        id: 1,
        name: "Forest Gump",
        description: "Never stops running",
        poster: "http://img.com/forestgump.png",
        genreName: "SomeGenre",
        studioName: "SomeStudio",
        reviews: []
    }

    
    render(<MovieDetails payload={dummyMovie} />)
    
    expect(screen.getByText(dummyMovie.name)).toBeInTheDocument();
    expect(screen.getByText(dummyMovie.description)).toBeInTheDocument();
    
    expect(screen.getByText(dummyMovie.genreName || "Unknown")).toBeInTheDocument();
    expect(screen.getByText(dummyMovie.studioName || "Unknown")).toBeInTheDocument();
})

test("A missing genre display unknown", () => {

    const dummyMovie: MovieDetailsPayload = {
        id: 1,
        name: "Forest Gump",
        description: "Never stops running",
        poster: "http://img.com/forestgump.png",
        genreName: undefined,
        studioName: "SomeStudio",
        reviews: []
    }

    
    render(<MovieDetails payload={dummyMovie} />)
    
    expect(screen.getByTestId("genre")).toHaveTextContent("Unknown");
    expect(screen.getByTestId("studio")).toHaveTextContent(dummyMovie.studioName || "Unknown");
})