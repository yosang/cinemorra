
declare module "*.css"

declare module "@yosang/ui" {
    import { ReactNode } from "react"

    export const Button: (props: { children?: ReactNode, onClick?: () => void}) => JSX.Element
}