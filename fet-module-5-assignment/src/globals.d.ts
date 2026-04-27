
declare module "*.css"

declare module "@yosang/ui" {
    import { ReactNode } from "react"

    export const Button: (props: { children?: ReactNode, onClick?: () => void}) => JSX.Element
    export const Navbar: (props: { children?: ReactNode}) => JSX.Element
    export const NavItems: (props: { children?: ReactNode}) => JSX.Element
    export const NavLink: (props: { children?: ReactNode}) => JSX.Element|
}