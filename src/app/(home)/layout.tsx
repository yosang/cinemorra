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
import ThemeSwitch from "../components/Interactivity/ThemeSwitch";

/**
 * @description A classic layout with a sticky top navbar and a footer that are both visible on every page and the main content in the middle.
 * @returns {JSX.Element}
 */
export default function HomeLayout({children}:{children: ReactNode}) {
    const auth_cookie = cookies();
    const isLoggedIn = auth_cookie.get("auth_token")?.value ?? null;
    
    /**
     * @description Wrapper used for conditional props, its based on wether a user is logged in or not
     * @path for logged in users, the path will point to the admin page and for guests it'll be the login pa
     * @navItem shows Admin text for the link when logged in, Log in otherwise
     */
    const navData = {
        path: isLoggedIn ? ADMIN_PATH:LOGIN_PATH,
        navItem: isLoggedIn ? "Admin":"Log in"
    }

    return <div className={styles.layout} >
                <NavigationBar 
                    className={styles.nav} 
                    sticky={true} 
                    Logo={<Logo linkHref="/" logoImg={logo} logoFont={inter} logoText="Cinemorra" logoStyle="inline" 
                />} >
                    <ThemeSwitch />
                    <NavLink 
                        style={{ fontSize: "1.5rem"}}
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