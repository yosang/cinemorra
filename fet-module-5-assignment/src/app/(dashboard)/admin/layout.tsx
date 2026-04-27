import { ReactNode } from "react";

export default function AdminLayout({children}:{children: ReactNode}) {
    return (
        <>
        <h1>Sidebar</h1>
        {children}
        </>
    )
}