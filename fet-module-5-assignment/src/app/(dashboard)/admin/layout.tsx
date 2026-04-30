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
import { Plus } from "lucide-react";

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
                        <div className={styles.action}>
                            <Button>Logout</Button>
                        </div>
                    </div>
                }
                endSide={
                <div className={styles.content}>
                    <div className={styles.nav}>
                        <NavigationBar sticky={true} Logo={<ThemeSwitch />}>
                                <Link href={ADMIN_ADD_MOVIE_PATH}><Button>Add new movie</Button></Link>
                        </NavigationBar>
                      </div>
                    {children}
                </div>}
            />
}