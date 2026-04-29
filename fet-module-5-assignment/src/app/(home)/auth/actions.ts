'use server'
import { revalidatePath } from "next/cache";
import { AUTH_LOGIN } from "../../../lib/constants"
import { cookies } from "next/headers";

export default async function authenticate(formData:FormData) {
    const cookieStorage = await cookies();

    const res = await fetch(AUTH_LOGIN, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(Object.fromEntries(formData))
    }) 
    
    if(!res.ok) throw new Error("Authentication login fetch failed")
    
    const data = await res.json();

    cookieStorage.set("auth_token", data.token, {
        httpOnly: true,
        sameSite: "strict",
        path: "/"
    })


    revalidatePath("/", "layout");
    return { success: true }
}