'use client'
import { useEffect, useState } from "react"
import styles from "./ThemeSwitch.module.css"
import { Popcorn, Sun } from "lucide-react";

export default function ThemeSwitch() {

    const [currentTheme, setCurrentTheme] = useState("");

    const handleChange = () => {
        const changeValue = currentTheme === "dark" ? "light":"dark"
        document.documentElement.setAttribute("data-theme", changeValue)
        setCurrentTheme(changeValue)
    }

    useEffect(() => {
        const currentDocumentTheme = document.documentElement.getAttribute("data-theme");
        const currentBrowserTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark":"light"
        setCurrentTheme(currentDocumentTheme ?? currentBrowserTheme);
    }, [])

    return <div className={styles.switcher} onClick={handleChange}>
                <span>{currentTheme === "dark" ? <Sun className={styles.sun}/>:<Popcorn className={styles.moon}/>}</span>
            </div>
}