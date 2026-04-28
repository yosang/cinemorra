import { ReactNode } from "react";
import TopNavbar from "../components/Navigation/Navbar"
import styles from "./layout.module.css"
import { NavLink } from "@yosang/ui";
import Link from "next/link";
import { ADMIN_PATH, LOGIN_PATH } from "@/lib/constants";
import { cookies } from "next/headers";

export default function HomeLayout({children}:{children: ReactNode}) {
    const auth_cookie = cookies();
    const isLoggedIn = auth_cookie.get("auth_token")?.value ?? null;
    
    const navData = {
        path: isLoggedIn ? ADMIN_PATH:LOGIN_PATH,
        navItem: isLoggedIn ? "Dashboard":"Log in"
    }

    return <div className={styles.layout} >
                <TopNavbar>
                    <NavLink 
                        as={Link} 
                        href={navData.path}
                    >
                        {navData.navItem}
                    </NavLink>
                </TopNavbar>
                <main className={styles.main}>
                    {children}
                </main>
                <footer className={styles.footer}>
                    <p>© 2026 MIT License. All rights reserved.</p>
                </footer>
            </div>
    
}