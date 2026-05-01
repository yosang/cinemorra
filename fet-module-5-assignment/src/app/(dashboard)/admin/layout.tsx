import { ReactNode } from "react";
import styles from "./layout.module.css"

// @ts-ignore
import { Button, HorizontalSplit, NavLink } from "@yosang/ui";
import NavigationBar from "@/app/components/Navigation/Navbar";
import Link from "next/link";
import { ADMIN_ADD_MOVIE_PATH, ADMIN_MOVIES_PATH, ADMIN_PATH } from "@/lib/constants";

import Logo from "@/app/components/Navigation/Logo";
import logo from "../../logo.png"
import ThemeSwitch from "@/app/components/Interactivity/ThemeSwitch";
import { logout } from "@/app/(home)/auth/actions";
import { LogOut } from "lucide-react";

export default function AdminLayout({children}:{children: ReactNode}) {
    
    return <HorizontalSplit
                startSide={
                    <div className={styles.layout}>
                        <NavigationBar 
                            className={styles.navLayout}
                            Logo={<Logo 
                                      linkHref="/"
                                      logoImg={logo}  
                                />} 
                        >
                            <div className={styles.links}>
                                <NavLink as={Link} href={ADMIN_PATH}>Dashboard</NavLink>
                                <NavLink as={Link} href={ADMIN_MOVIES_PATH}>Movies</NavLink>
                            </div>
                        </NavigationBar>
                        <footer className={styles.footer}>
                                <p>© 2026 MIT License. All rights reserved.</p>
                            </footer>
                    </div>
                }
                endSide={
                <div className={styles.content}>
                    <div className={styles.nav}>
                        <NavigationBar sticky={true} Logo={
                                    <Link href={ADMIN_ADD_MOVIE_PATH}><Button>Add new movie</Button></Link>
                                }>
                                <div className={styles.navEnd}>
                                <ThemeSwitch />
                                 <form action={logout}>
                                    <button 
                                        type="submit"
                                        title="Logout"
                                        className={styles.logoutButton}
                                        >
                                            <LogOut size={30}/>
                                        </button>
                                    </form>
                                </div>
                        </NavigationBar>
                      </div>
                    {children}
                </div>}
            />
}