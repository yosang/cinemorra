import { UserStar } from "lucide-react"
import styles from "./ReviewCard.module.css"

type Props = {
    name: string
    text: string
    date: string
}

/**
 * @description A container for a single review consisting of an icon, header text and date of review
 * @returns {JSX.Element}
 */
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