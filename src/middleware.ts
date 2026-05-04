
import { NextRequest, NextResponse } from "next/server";
import { AUTH_CHECK_URL, LOGIN_PATH } from "./lib/constants";

export async function middleware(request: NextRequest) {

    if(!AUTH_CHECK_URL) throw new Error("Missing ENV variables")

    const urlForRedirect = new URL(LOGIN_PATH, request.url);
    const responseWithRedirect = NextResponse.redirect(urlForRedirect); // Response object that redirects the browser to the login page
    const auth_token = request.cookies.get("auth_token")?.value;
    
    if(!auth_token) {
        return responseWithRedirect // respond with redirect if a token was not found
    } else {
        try {
            // We are fetching a protected resource that requires a valid token, this enables us to leverage JWT token validation on the API side
            // Currently we are patching a specific resource, since this operation is idempotent, it will always give the same result
            // The server can either respond with success, or failure, in which case a failure would mean the auth token is nt valid.
            const res = await fetch(AUTH_CHECK_URL, {
                method: "PATCH",
                headers: { "Content-Type":"application/json", "Authorization":`Bearer ${auth_token}`},
                body: JSON.stringify({
                        name: "Action",
                    })
            })
    
            if(!res.ok) { // If the response is not ok, we redirect and delete the current token, this forces the user to re-authenticate
                responseWithRedirect.cookies.delete("auth_token");
                return responseWithRedirect;
            }
        } catch(err) {
            return responseWithRedirect; // If the fetch throws, it means we couldn't reach the server.
        }
    };

    return NextResponse.next();    
}

export const config = {
    // checks protected routes such as /admin/* and excludes checks for public routes, /, /movies, /movie/:id, /login
    matcher: ['/admin/:path*' ]
}