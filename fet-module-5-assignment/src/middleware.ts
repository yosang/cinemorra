
import { NextRequest, NextResponse } from "next/server";
import { AUTH_CHECK, LOGIN_PATH } from "./lib/constants";

export async function middleware(request: NextRequest) {
    const urlForRedirect = new URL(LOGIN_PATH, request.url);
    const responseWithRedirect = NextResponse.redirect(urlForRedirect);
    const auth_token = request.cookies.get("auth_token")?.value;
    
    if(!auth_token) {
        return responseWithRedirect
    } else {
        try {
            const res = await fetch(AUTH_CHECK, {
                method: "POST",
                headers: { "Content-Type":"application/json", "Authorization":`Bearer ${auth_token}`},
                body: JSON.stringify({
                        name: crypto.randomUUID(),
                    })
            })
    
            if(!res.ok) {
                responseWithRedirect.cookies.delete("auth_token");
                return responseWithRedirect;
            }
        } catch(err) {
            return responseWithRedirect;
        }
    };

    return NextResponse.next();    
}

export const config = {
    // checks protected routes such as /admin/* and excludes checks for public routes, /, /movies, /movie/:id, /login
    matcher: ['/admin/:path' ]
}