import { ReactNode } from "react";
import NavigationBar from "../components/Navigation/Navbar"
import styles from "./layout.module.css"
import { NavLink } from "@yosang/ui";
import Link from "next/link";
import { ADMIN_PATH, LOGIN_PATH } from "@/lib/constants";
import { cookies } from "next/headers";
import { inter } from "../../../public/fonts/Inter"

import Logo from "../components/Navigation/Logo";
import logo from "../logo.png"

export default function HomeLayout({children}:{children: ReactNode}) {
    const auth_cookie = cookies();
    const isLoggedIn = auth_cookie.get("auth_token")?.value ?? null;
    
    const navData = {
        path: isLoggedIn ? ADMIN_PATH:LOGIN_PATH,
        navItem: isLoggedIn ? "Dashboard":"Log in"
    }

    return <div className={styles.layout} >
                <NavigationBar 
                    className={styles.nav} 
                    sticky={true} 
                    Logo={<Logo linkHref="/" logoImg={logo} logoFont={inter} logoText="Cinemorra" logoStyle="inline" 
                />} >
                    <NavLink 
                        as={Link} 
                        href={navData.path}
                    >
                        {navData.navItem}
                    </NavLink>
                </NavigationBar>
                <main className={styles.main}>
                    {children}
                </main>
                <footer className={styles.footer}>
                    <p>© 2026 MIT License. All rights reserved.</p>
                </footer>
            </div>
    
}