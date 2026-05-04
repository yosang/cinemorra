import { ReactNode } from "react";
import styles from "./MovieGrid.module.css"

type Props = {
    headerText: string;
    children: ReactNode;
};

/**
 * @description A page section that contains a header and a grid layout
 * @returns {JSX.Element}
 */
export default function MovieGrid( { headerText, children }:Props ) {
    return(
        <div className={styles.layout}>
            <header>
                <h1>{headerText}</h1>
            </header>
            <div className={styles.grid}>
                    {children}
            </div>
        </div>
    )
} 