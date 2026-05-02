'use client'
import Image from "next/image";
import styles from "./MovieCard.module.css"
import { useState } from "react";
import ImageSkeleton from "../Skeletons/ImageSkeleton";

type Props = {
    image: string
    topMenuComponent?: JSX.Element | undefined
    overlayComponent: JSX.Element
    clickableOverlay: boolean
};

export default function MovieCard({ image, topMenuComponent, overlayComponent, clickableOverlay = false }:Props) {
    const [isLoading, setIsLoading ] = useState(true)

    return(
        <>
        <div className={styles.layout}>
            {topMenuComponent && ( topMenuComponent )}
            {isLoading && <ImageSkeleton />}
            <Image 
                src={image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Movie card image"
                style={{ objectFit: "cover"}}
                onLoadingComplete={() => setIsLoading(false)}
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