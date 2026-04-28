import Image from "next/image";
import styles from "../styles/MovieDetails.module.css"

type Props = {
    name: string;
    description: string;
    image: string;
};

export default function MovieDetails({ name, description, image }:Props) {
    return(
        <div className={styles.layout}>
            <div style={{ position: "relative", width: "300px", height: "500px" }}>
                <Image 
                    src={image}
                    alt={name}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className={styles.details}>
                <h1>{name}</h1>
                <h2>{description}</h2>
            </div>
        </div>
    )
}