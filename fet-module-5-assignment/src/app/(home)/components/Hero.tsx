import { ReactNode, Suspense } from "react";
import Image from "next/image";
import styles from "../styles/HomePage.module.css"

type Props = {
    children: ReactNode,
    imageSource: string
};

export default function Hero({ children, imageSource }: Props) {
    return (
        <>
        <Suspense fallback={<p>Loading...</p>}>
                <div className={styles.hero}>
                    <Image 
                      src={imageSource} 
                      fill
                      alt="Hero section image"
                      style={{ objectFit: "cover" }}
                    />
                    <div className={styles.overlay}>
                      {children}
                    </div>
                </div>
        </Suspense>
        </>
    )
}