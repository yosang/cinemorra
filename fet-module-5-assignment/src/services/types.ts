export interface Movie {
    id: number,
    name: string,
    description: string,
    poster: string,
    genreId: number,
    studioId: number,
    createdAt: string,
    updatedAt: string
}

export type MoviesPayload = {
    movies: {
        data: Movie[]
    }
}

export type Review = {
    id: number,
     reviewerName: string,
     reviewText: string,
     movieId: number,
     createdAt: string,
     updatedAt: string
}

export type SingleMovie = {
    movie: Movie,
    reviews: Review[]
}

export type GenreAndStudioObject = {
    id: number
    name: string,
    createdAt: string,
    updatedAt: string
}

export type GenreAndStudioResponse = { 
    [key: string]: { 
        data: GenreAndStudioObject[],
        count: number    
    }
}