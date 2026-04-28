import { ReactNode } from "react";
import styles from "./layout.module.css"

// @ts-ignore
import { HorizontalSplit, NavLink } from "@yosang/ui";
import NavigationBar from "@/app/components/Navigation/Navbar";
import Link from "next/link";
import { ADMIN_MOVIES_PATH } from "@/lib/constants";

export default function AdminLayout({children}:{children: ReactNode}) {
    return <HorizontalSplit
                startSide={
                <NavigationBar className={styles.layout}>
                    <NavLink as={Link} href={ADMIN_MOVIES_PATH}>Movies</NavLink>
                </NavigationBar>
                }
                endSide={
                <div>
                    {children}
                </div>}
            />
}