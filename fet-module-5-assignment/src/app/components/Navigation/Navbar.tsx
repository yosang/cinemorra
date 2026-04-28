import Link from "next/link";
import Image from "next/image";
import { Navbar, NavItems, NavLink} from "@yosang/ui";
import logo from "../../logo.png";
import styles from "./Navbar.module.css";

import { inter } from "../../../../public/fonts/Inter"; 
import { HTMLAttributes, ReactNode } from "react";

type Props = {
    children: ReactNode;
    sticky?: boolean
} & HTMLAttributes<HTMLDivElement>;

export default function NavigationBar({ children, sticky, ...props }:Props) {
    return(
        <>
            <Navbar sticky={sticky || false} {...props}>
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