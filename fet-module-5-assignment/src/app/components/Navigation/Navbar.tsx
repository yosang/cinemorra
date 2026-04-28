import Link from "next/link";
import Image from "next/image";
import { Navbar, NavItems, NavLink} from "@yosang/ui";
import logo from "../../logo.png";
import styles from "./Navbar.module.css";

import { inter } from "../../../../public/fonts/Inter"; 
import { ReactNode } from "react";

export default function TopNavbar({ children}:{children: ReactNode}) {
    return(
        <>
            <Navbar sticky={true}>
                <Link href="/" className={styles.logo}>
                    <Image src={logo} alt="Navbar logo" priority width={100} height={100} />
                    <h1 className={inter.className}>Cinemora</h1>
                </Link>
                <NavItems>
                    {children}
                </NavItems>
            </Navbar>
        </>
    )
}