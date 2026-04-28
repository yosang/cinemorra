import Image from "next/image";
import styles from "./MovieDetails.module.css"
import { Button } from "@yosang/ui";
import { Review } from "@/services/movies";
import ReviewCard from "./ReviewCard";

type Props = {
    name: string;
    description: string;
    image: string;
    reviews: Review[]
};

export default function MovieDetails({ name, description, image, reviews }:Props) {
    return(
        <div className={styles.layout}>
            <Image 
            className={styles.background}
                src={image}
                alt={name}
                fill
                style={{ objectFit: "cover" }}
            />
            <div style={{ position: "relative", width: "300px", height: "auto" }}>
                <Image 
                    src={image}
                    alt={name}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className={styles.details}>
                <div className={styles.detailsHeader}>
                    <h1>{name}</h1>
                    <h2>{description}</h2>
                    <p>Genre: </p>
                    <p>Studio: </p>
                    <div className={styles.btns}>
                        <Button variant="primary">Watch</Button>
                        <Button variant="secondary">Play trailer</Button>
                    </div>
                </div>
            <div className={styles.reviewLayout}>
                <h1>Reviews</h1>
                <div>
                    <ul className={styles.reviews}>
                        {reviews.map(r => (<ReviewCard key={r.id} name={r.reviewerName} text={r.reviewText} date={new Date().toLocaleDateString("en-US", { month: "long", day:"2-digit", year:"numeric"})} />))}
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}