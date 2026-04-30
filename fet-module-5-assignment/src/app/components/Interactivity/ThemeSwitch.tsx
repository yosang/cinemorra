'use client'
import { useState } from "react"
import styles from "./ThemeSwitch.module.css"
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitch() {

    const [currentTheme, setCurrentTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark":"light");

    const handleChange = () => {
        const changeValue = currentTheme === "dark" ? "light":"dark"
        document.documentElement.setAttribute("data-theme", changeValue)
        setCurrentTheme(changeValue)
    }

    return <div className={styles.switcher} onClick={handleChange}>
                <span>{currentTheme === "dark" ? <Sun className={styles.sun}/>:<Moon className={styles.moon}/>}</span>
            </div>
}