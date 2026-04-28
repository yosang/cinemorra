import { ReactNode, Suspense } from "react";
import styles from "./FeaturedSection.module.css"

type Props = {
    headerText: string;
    children: ReactNode;
};

export default function HomeSection( { headerText, children }:Props ) {
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