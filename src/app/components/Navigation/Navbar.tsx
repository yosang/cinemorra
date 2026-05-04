import { Navbar, NavItems} from "@yosang/ui";
import { HTMLAttributes, ReactNode } from "react";

type Props = {
    children: ReactNode;
    sticky?: boolean,
    logoStyle?: "inline" | "stacked"
    Logo?: JSX.Element
} & HTMLAttributes<HTMLDivElement>;

/**
 * @description Custom component that wraps the Navbar component from @yosang/ui
 * @returns {JSX.Element}
 */
export default function NavigationBar({ children, sticky, logoStyle = "inline", Logo,...props }:Props) {
    return(
        <>
            <Navbar sticky={sticky || false} {...props}>
                {Logo && ( Logo )}
                <NavItems>
                    {children}
                </NavItems>
            </Navbar>
        </>
    )
}