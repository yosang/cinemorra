import { SquarePen , Trash2} from "lucide-react";
import styles from "./CardMenu.module.css"
import Link from "next/link";
import { ADMIN_EDIT_MOVIE_PATH } from "@/lib/constants";

type Props = {
    itemId: string;
};

export default function CardMenu({ itemId }:Props) {

    const handleDelete = () => {
        // Call a delete action
        alert("Here we can call the server to delete the item")
    }

    return <div className={styles.layout}>
                <Link href={`${ADMIN_EDIT_MOVIE_PATH}/${itemId}`}><SquarePen size={16}/></Link>

                <Trash2 size={16} onClick={handleDelete} className={styles.deleteButton}/>
            </div>
}