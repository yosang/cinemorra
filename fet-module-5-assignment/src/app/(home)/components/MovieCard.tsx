import Image from "next/image";
import styles from "../styles/MovieCard.module.css"
type Props = {
    image: string,
    overlayText: string
};

export default function MovieCard({ image, overlayText }:Props) {
    return(
        <>
        <div className={styles.layout}>
            <Image 
                src={image}
                fill
                alt="Movie card image"
                style={{ objectFit: "cover"}}
            />
            <div className={styles.overlayClickableArea}>
                <div className={styles.overlayText}>
                    <p>{overlayText}</p>
                </div>
            </div>
        </div>
        </>
    )
}