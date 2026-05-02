import { ReactNode, Suspense } from "react";
import Image from "next/image";
import styles from "./Hero.module.css"

type HeroProps = {
    children: ReactNode,
    imageSource: string
};

export default function Hero({ children, imageSource }: HeroProps) {
    return <Suspense fallback={<p>Loading...</p>}>
                <div className={styles.hero}>
                    <Image 
                      src={imageSource} 
                      fill
                      priority
                      alt="Hero section image"
                      style={{ objectFit: "cover" }}
                    />
                    <div className={styles.overlay}>
                      {children}
                    </div>
                </div>
        </Suspense>
    
}