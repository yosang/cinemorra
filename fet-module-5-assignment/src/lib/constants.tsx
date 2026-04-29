// Path variables
export const ADMIN_PATH = "/admin"
export const LOGIN_PATH = "/auth/login"

export const ADMIN_MOVIES_PATH = "/admin/movies"
export const ADMIN_ADD_MOVIE_PATH = "/admin/movies/add"
export const ADMIN_EDIT_MOVIE_PATH = "/admin/movies/edit"

// Other
export const GENERIC_FETCH_ERROR_STRING = "Something went wrong during fetch operation"

// ASSETS
export const HomeHeroImage= "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

// ENV variables
export const MOVIES=process.env.MOVIES ?? "http://localhost:3000"
export const GENRE=process.env.GENRE ?? "http://localhost:3000"
export const STUDIO=process.env.STUDIO ?? "http://localhost:3000"
export const AUTH_LOGIN=process.env.AUTH_LOGIN ?? "http://localhost:3000"
export const AUTH_CHECK=process.env.AUTH_CHECK ?? "http://localhost:3000"