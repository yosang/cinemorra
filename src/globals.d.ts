// TS started complaining about css files and css modules, this solves that problem
declare module "*.css"

// My library currently doesnt export types, so we had to declare them here
declare module "@yosang/ui" {
    import { AnchorHTMLAttributes, ElementType, ReactNode } from "react"

    /**
     * Custom button component with CSS styling, imported from @yosang/ui
     */
    export const Button: (props: { children?: ReactNode, onClick?: () => void, variant?:string, type?:string, disabled?: boolean}) => JSX.Element
    
    /**
     * Custom nav component with CSS styling, imported from @yosang/ui
     */
    export const Navbar: (props: { children?: ReactNode, sticky: boolean} & HTMLAttributes<HTMLDivElement>) => JSX.Element
    
    /**
     * Custom ul component that consists of a ul and CSS styling, imported from @yosang/ui
     */
    export const NavItems: (props: { children?: ReactNode}) => JSX.Element
    
    /**
     * Custom component that can either be used as a Link component or a regular anchor tag, imported from @yosang/ui
     */
    export const NavLink: (props: { children?: ReactNode, as?: ElementType, href: string} & HTMLAttributes<HTMLDivElement> ) => JSX.Element
}