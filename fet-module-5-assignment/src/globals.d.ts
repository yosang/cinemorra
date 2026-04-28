
declare module "*.css"

declare module "@yosang/ui" {
    import { AnchorHTMLAttributes, ReactNode } from "react"

    export const Button: (props: { children?: ReactNode, onClick?: () => void, variant?:string}) => JSX.Element
    export const Navbar: (props: { children?: ReactNode, sticky: boolean}) => JSX.Element
    export const NavItems: (props: { children?: ReactNode}) => JSX.Element
    export const NavLink: (props: { children?: ReactNode, as: ForwardRefExoticComponent<Omit<AnchorHTMLAttributes<HTMLAnchorElement>>> | AnchorHTMLAttributes<HTMLAnchorElement>, href: string}) => JSX.Element
}