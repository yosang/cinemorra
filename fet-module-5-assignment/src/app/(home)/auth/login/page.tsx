'use client'

// @ts-expect-error
import { Input, NavLink } from "@yosang/ui";

import styles from "./Login.module.css";
import { Form } from "lucide-react";
import { useFormState } from "react-dom";
import authenticate from "../actions";
import Link from "next/link";
import { SubmitButton } from "@/app/components/Interactivity/SubmitButton";

export default function LoginView() {
    const [state, formAction] = useFormState(authenticate, {});

    return <form 
                className={styles.layout} 
                action={formAction} 
            >
                <div className={styles.logo}>
                    <NavLink as={Link} href="/"><Form size={100} /></NavLink>
                </div>
                <Input 
                    required
                    name="username"
                    labelText="Username" 
                    placeholder="Username"
            />
                <Input 
                    required
                    name="password"
                    type="password"
                    labelText="password" 
                    placeholder="Password"
                />
                <div className={styles.btn}>
                    <SubmitButton 
                        pendingLabel="Logging in..."
                        staticLabel="Log in"
                        />
                    {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
                </div>
            </form>
}