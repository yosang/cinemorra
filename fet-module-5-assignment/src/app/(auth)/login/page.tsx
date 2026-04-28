'use client'

// @ts-expect-error
import { Input, Button } from "@yosang/ui";

import styles from "./Login.module.css";
import { Ungroup } from "lucide-react";
import { FormEvent, useState } from "react";
import authenticate from "../actions";
import { useRouter } from "next/navigation";
import { ADMIN_PATH } from "../../../lib/constants";

export default function LoginView() {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        
        try {
            const result = await authenticate(formData)
            
            if(result.success) router.push(ADMIN_PATH)

        } catch(err) {
            // console.log(err); // Uncomment to debug, this will log to the browser, we dont wwant to expose any internals so we comment it out

            setError("Internal Error")
        }
    }

    return <div className={styles.layout}>
            <form className={styles.form} onSubmit={handleSubmit} >
                <div className={styles.logo}>
                    <Ungroup size={100} />
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
                    <Button type="submit">Login</Button>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                </div>
            </form>
            </div>
}