import NavigationBar from "@/app/components/Navigation/Navbar";
import { ReactNode } from "react";

export default function DashboardLayout({children}: {children: ReactNode }) {
    return <div>
            <NavigationBar>
                        <p>asd</p>
                        <p>asd</p>
                        <p>asd</p>
            </NavigationBar>
            {children}
            </div>
}