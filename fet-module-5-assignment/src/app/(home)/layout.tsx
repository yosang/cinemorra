import { ReactNode } from "react";
import TopNavbar from "./components/Navbar";
import styles from "./styles/Layout.module.css"

export default function HomeLayout({children}:{children: ReactNode}) {
    return <div className={styles.layout} >
                <TopNavbar />
                <main className={styles.main}>
                    {children}
                </main>
                <footer className={styles.footer}>
                    <p>© 2026 MIT License. All rights reserved.</p>
                </footer>
            </div>
    
}