import { ReactNode } from "react";
import styles from "./layout.module.css"

// @ts-ignore
import { Button, HorizontalSplit, NavLink } from "@yosang/ui";
import NavigationBar from "@/app/components/Navigation/Navbar";
import Link from "next/link";
import { ADMIN_MOVIES_PATH, ADMIN_PATH } from "@/lib/constants";

export default function AdminLayout({children}:{children: ReactNode}) {
    
    return <HorizontalSplit
                startSide={
                    <div className={styles.layout}>
                        <NavigationBar logoStyle="stacked" className={styles.navLayout}>
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
                <div>
                    {children}
                </div>}
            />
}