
declare module "*.css"

// My library currently doesnt export types, so we had to declare them here
declare module "@yosang/ui" {
    import { AnchorHTMLAttributes, ElementType, ReactNode } from "react"

    export const Button: (props: { children?: ReactNode, onClick?: () => void, variant?:string, type?:string, disabled?: boolean}) => JSX.Element
    export const Navbar: (props: { children?: ReactNode, sticky: boolean} & HTMLAttributes<HTMLDivElement>) => JSX.Element
    export const NavItems: (props: { children?: ReactNode}) => JSX.Element
    export const NavLink: (props: { children?: ReactNode, as?: ElementType, href: string} & HTMLAttributes<HTMLDivElement> ) => JSX.Element
}