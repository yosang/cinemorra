
import { NextRequest, NextResponse } from "next/server";
import { LOGIN_PATH } from "./lib/constants";

export function middleware(request: NextRequest) {
    console.log("proxy hit")
    
    const urlForRedirect = new URL(LOGIN_PATH, request.url);
    const responseWithRedirect = NextResponse.redirect(urlForRedirect);
    const cookie = request.cookies.get("auth_token")?.value;
    
    if(!cookie) return responseWithRedirect;

    return NextResponse.next();    
}

export const config = {
    // checks protected routes such as /admin/* and excludes checks for public routes, /, /movies, /movie/:id, /login
    matcher: ['/admin/:path' ]
}