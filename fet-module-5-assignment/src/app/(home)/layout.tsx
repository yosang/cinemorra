import { ReactNode } from "react";

export default function HomeLayout({children}:{children: ReactNode}) {
    return (
        <>
        <h1>Navbar</h1>
            {children}
        <h1>Footer</h1>
        </>
    )
}