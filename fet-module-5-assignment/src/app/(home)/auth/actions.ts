'use server'
import { revalidatePath } from "next/cache";
import { ADMIN_PATH, AUTH_LOGIN } from "../../../lib/constants"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type AuthStateProps = {
    success?: boolean,
    error?: string,
}

export default async function authenticate(initialState: AuthStateProps, formData: FormData): Promise<AuthStateProps> {
    const cookieStorage = cookies();

    const res = await fetch(AUTH_LOGIN, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(Object.fromEntries(formData))
    }) 
    
    if(!res.ok) return { error: "Invalid credentials" }
    
    const data = await res.json();

    cookieStorage.set("auth_token", data.token, {
        httpOnly: true,
        sameSite: "strict",
        path: "/"
    })


    revalidatePath("/", "layout");
    redirect(ADMIN_PATH)
}