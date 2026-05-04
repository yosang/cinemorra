'use client'
import Image from "next/image";
import styles from "./MovieDetails.module.css"
import { Button } from "@yosang/ui";
import ReviewCard from "./ReviewCard";
import { Review } from "@/services/types";
import { useState } from "react";
import ImageSkeleton from "../Skeletons/ImageSkeleton";

export type MovieDetailsPayload = {
    id: number // Resource id, this is only used for the key prop
    name: string // Name of the movie
    description: string // Movie descriptino
    poster: string // Poster image link 
    genreName?: string // Name of the genre
    studioName?: string // Name of the studio
    reviews: Review[] // an array of reviews
}

type Props = {
    payload: MovieDetailsPayload // The payload required to show the details for the movie
};

/**
 * @description Renders a detailed overview of a single movie
 * 
  * Features:
 * - Uses the Image component from next/image for performance and responsiveness
 * 
 * Behavior:
 * - Shows an animated Image skeleton while the image loads
 * - Renders a second Image as a blurred background
 * 
 * @returns {JSX.Element} Overview of a single movie with details
 */
export default function MovieDetails({ payload }:Props) {
    const [ isLoading, setIsLoading ] = useState(true);

    return(
        <div className={styles.layout}>
            <Image 
                className={styles.background}
                src={payload.poster}
                alt={payload.name}
                fill
                style={{ objectFit: "cover" }}
            />
            <div style={{ position: "relative", width: "300px", height: "auto" }}>
                {isLoading && <ImageSkeleton />}
                <Image 
                    src={payload.poster}
                    alt={payload.name}
                    priority
                    fill
                    style={{ objectFit: "cover" }}
                    onLoadingComplete={() => setIsLoading(false)}
                />
            </div>
            <div className={styles.details}>
                <div className={styles.detailsHeader}>
                    <h1>{payload.name}</h1>
                    <h2>{payload.description}</h2>
                    <p><strong>Genre:</strong> <span data-testid="genre" >{payload.genreName ?? "Unknown"}</span></p>
                    <p><strong>Studio:</strong> <span data-testid="studio" >{payload.studioName ?? "Unknown"}</span></p>
                    <div className={styles.btns}>
                        <Button variant="primary">Watch</Button>
                        <Button variant="secondary">Play trailer</Button>
                    </div>
                </div>
            <div className={styles.reviewLayout}>
                <h1>Reviews</h1>
                <div>
                    <ul className={styles.reviews}>
                        {payload.reviews.map(r => (
                            <ReviewCard 
                                key={r.id} 
                                name={r.reviewerName} 
                                text={r.reviewText} 
                                date={new Date().toLocaleDateString("en-US", { month: "long", day:"2-digit", year:"numeric"})} 
                            />))}
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}