import Image from "next/image";
import styles from "./MovieDetails.module.css"
import { Button } from "@yosang/ui";
import { Review } from "@/services/movies";
import ReviewCard from "./ReviewCard";

type moviePayload = {
    id: number
    name: string
    description: string
    poster: string
    genreName: string | undefined
    studioName: string | undefined
    reviews: Review[]
}

type Props = {
    payload: moviePayload
};

export default function MovieDetails({ payload }:Props) {

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
                <Image 
                    src={payload.poster}
                    alt={payload.name}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className={styles.details}>
                <div className={styles.detailsHeader}>
                    <h1>{payload.name}</h1>
                    <h2>{payload.description}</h2>
                    <p><strong>Genre:</strong> {payload.genreName ?? "Unknown"}</p>
                    <p><strong>Studio:</strong> {payload.studioName ?? "Unknown"}</p>
                    <div className={styles.btns}>
                        <Button variant="primary">Watch</Button>
                        <Button variant="secondary">Play trailer</Button>
                    </div>
                </div>
            <div className={styles.reviewLayout}>
                <h1>Reviews</h1>
                <div>
                    <ul className={styles.reviews}>
                        {payload.reviews.map(r => (<ReviewCard key={r.id} name={r.reviewerName} text={r.reviewText} date={new Date().toLocaleDateString("en-US", { month: "long", day:"2-digit", year:"numeric"})} />))}
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}