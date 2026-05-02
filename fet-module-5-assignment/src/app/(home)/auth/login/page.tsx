'use client'

// @ts-expect-error
import { Input, NavLink } from "@yosang/ui";

import styles from "./Login.module.css";
import { Form } from "lucide-react";
import { useFormState } from "react-dom";
import authenticate from "../actions";
import Link from "next/link";
import { SubmitButton } from "@/app/components/Interactivity/SubmitButton";
import { MutableRefObject, useEffect, useRef } from "react";

export default function LoginView() {
    const inputRef:MutableRefObject<HTMLInputElement | undefined> = useRef();
    const [state, formAction] = useFormState(authenticate, {});

    useEffect(() => {
        if(inputRef.current) {
            inputRef.current.focus();
        }
    }, [])

    return <form 
                className={styles.layout} 
                action={formAction} 
            >
                <div className={styles.logo}>
                    <NavLink as={Link} href="/" aria-label="Go to homepage" ><Form aria-hidden={true} size={100} /></NavLink>
                </div>
                <h1>Log in</h1>
                <Input 
                    ref={inputRef}
                    required
                    name="username"
                    placeholder="Username"
                    autoComplete="username"
                    aria-label="Username"
                    />
                <Input 
                    required
                    name="password"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    aria-label="Password"
                />
                <div className={styles.btn}>
                    <SubmitButton 
                        pendingLabel="Logging in..."
                        staticLabel="Log in"
                        />
                    {state?.error && <p role="alert" style={{ color: "red" }}>{state.error}</p>}
                </div>
            </form>
}