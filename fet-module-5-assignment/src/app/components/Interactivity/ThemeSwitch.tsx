'use client'
import { ChangeEvent, useEffect, useState } from "react"
import styles from "./ThemeSwitch.module.css"

export default function ThemeSwitch() {
    const [browserTheme, setBrowserTheme ] = useState("");
    const [currentTheme, setCurrentTheme] = useState(browserTheme);


    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        document.documentElement.setAttribute("data-theme", e.target.value)
        setCurrentTheme(e.target.value)
    }

    useEffect(() => {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        setBrowserTheme(isDark ? "dark":"light");
    }, [])

    return <div className={styles.layout}>
            <select className={styles.select} defaultValue={currentTheme} onChange={handleChange} >
                <option value="system" >System</option>
                <option value="dark" >Dark</option>
                <option value="light" >Light</option>
            </select>
            </div>
}