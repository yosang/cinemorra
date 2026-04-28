import Link from "next/link";
import Image from "next/image";
import { Navbar, NavItems, NavLink} from "@yosang/ui";
import logo from "../../logo.png";
import styles from "../styles/Navbar.module.css";

import { inter } from "../fonts/Inter"; 

export default function TopNavbar() {
    return(
        <>
            <Navbar sticky={true}>
                <Link href="/" className={styles.logo}>
                    <Image src={logo} alt="Navbar logo" width={100} height={100} />
                    <h1 className={inter.className}>Cinemora</h1>
                </Link>
                    <NavItems>
                        <NavLink as={Link} href="/admin">Log in</NavLink>
                    </NavItems>
            </Navbar>
        </>
    )
}