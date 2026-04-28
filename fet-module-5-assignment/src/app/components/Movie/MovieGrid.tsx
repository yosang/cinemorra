import { ReactNode, Suspense } from "react";
import styles from "./MovieGrid.module.css"

type Props = {
    headerText: string;
    children: ReactNode;
};

export default function MovieGrid( { headerText, children }:Props ) {
    return(
        <div className={styles.layout}>
            <header>
                <h1>{headerText}</h1>
            </header>
            <div className={styles.row}>
                <Suspense fallback={<p>Loading...</p>}>
                    {children}
                </Suspense>
            </div>
        </div>
    )
} 