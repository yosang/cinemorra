import Image from "next/image";
import styles from "./MovieCard.module.css"
type Props = {
    image: string,
    overlayComponent: JSX.Element
};

export default function MovieCard({ image, overlayComponent }:Props) {
    return(
        <>
        <div className={styles.layout}>
            <Image 
                src={image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Movie card image"
                style={{ objectFit: "cover"}}
            />
            <div className={styles.overlayClickableArea}>
                <div className={styles.overlayText}>
                    {overlayComponent}
                </div>
            </div>
        </div>
        </>
    )
}