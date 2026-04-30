import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import MovieDetails, { type MovieDetailsPayload } from "@/app/components/Movie/MovieDetails";

// Mocks
jest.mock("@yosang/ui", jest.fn(() => ({
    __esModule: true,
    Button: () =><button />
})), { virtual: true })

jest.mock("next/image", jest.fn(() => ({ 
    __esModule:true,
    default: () => <img alt="mock image"/>
 })))

test("MovieDetails page renders correct details", () => {

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
    
    expect(screen.getByText(dummyMovie.name)).toBeInTheDocument();
    expect(screen.getByText(dummyMovie.description)).toBeInTheDocument();
    expect(screen.getByText("Unknown")).toBeInTheDocument();
    expect(screen.getByText(dummyMovie.studioName || "Unknown")).toBeInTheDocument();
    
    screen.debug();
})