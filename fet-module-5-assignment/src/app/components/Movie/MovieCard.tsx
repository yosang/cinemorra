import Image from "next/image";
import styles from "./MovieCard.module.css"

type Props = {
    image: string
    topMenuComponent?: JSX.Element | undefined
    overlayComponent: JSX.Element
    clickableOverlay: boolean
};

export default function MovieCard({ image, topMenuComponent, overlayComponent, clickableOverlay = false }:Props) {
    return(
        <>
        <div className={styles.layout}>
            {topMenuComponent && ( topMenuComponent )}
            <Image 
                src={image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Movie card image"
                style={{ objectFit: "cover"}}
            />
            <div className={clickableOverlay ? styles.overlayClickableArea:""}>
                <div className={clickableOverlay ? styles.overlayText: ""}>
                    {overlayComponent}
                </div>
            </div>
        </div>
        </>
    )
}