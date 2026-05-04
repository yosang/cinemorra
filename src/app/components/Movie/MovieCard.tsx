'use client'
import Image from "next/image";
import styles from "./MovieCard.module.css"
import { useState } from "react";
import ImageSkeleton from "../Skeletons/ImageSkeleton";

type Props = {
    image: string // Link to an image
    topMenuComponent?: JSX.Element | undefined // A JSX component that represents an interactive menu to render on the MovieCard
    overlayComponent: JSX.Element // A decorative JSX component to render on the MovieCard, for example a movie title that shows on hover
    clickableOverlay: boolean // Enables a specific CSS class if the MovieCard is set to be clickable
};

/**
 * @description Renders a card with an image and provies further configuration for visible aesthetics and interactivity.
 * 
 * Features:
 * - Provides the option to use a top menu component, such as editing or deleting the resource.
 * - Uses the Image component from next/image for performance and responsiveness
 * 
 * Behavior:
 * - Shows an animated Image skeleton while the image loads
 * @returns {JSX.Element} A single MovieCard component with configurable interactivity
 */
export default function MovieCard({ image, topMenuComponent, overlayComponent, clickableOverlay = false }:Props) {
    const [isLoading, setIsLoading] = useState(true);

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
                onLoadingComplete={() => setIsLoading(false)}
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