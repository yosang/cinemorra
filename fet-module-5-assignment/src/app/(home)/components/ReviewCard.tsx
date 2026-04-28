import { UserStar } from "lucide-react"
import styles from "../styles/ReviewCard.module.css"

type Props = {
    name: string
    text: string
    date: string
}

export default function ReviewCard({ name, text, date }:Props) {
    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                <UserStar />
                <div>
                    {name}
                    <p>{date}</p>
                </div>
            </div>
            {text}
        </div>
    )
}