import { SquarePen , Trash2 } from "lucide-react";
import styles from "./CardMenu.module.css"
import Link from "next/link";
import { ADMIN_EDIT_MOVIE_PATH } from "@/lib/constants";
import { DeleteMovie } from "@/app/(dashboard)/admin/movies/actions";
import { Dispatch, SetStateAction, useRef } from "react";
import { Movie } from "@/services/types";
import { toast } from "sonner";

type Props = {
    itemLabel: string
    itemId: number
    setter: Dispatch<SetStateAction<Movie[]>> | null
};

export default function CardMenu({ itemLabel, itemId, setter }:Props) {
    const toastRef = useRef<string | number | null>(null)
    
    const handleDeleteSubmit = () => {
        if(toastRef.current) return;

        toastRef.current = toast(`Are you sure you want to delete ${itemLabel}?`, {
            action: {
                label:"Delete",
                onClick: () => {
                    const formData = new FormData();
                     formData.append("id", String(itemId));
    
                    const deletePromise = DeleteMovie({}, formData)

                    toast.promise(deletePromise, {
                        loading: "Deleting movie...",
                        success: () => {
                                if(setter) {
                                    setter(prev => prev.filter(m => m.id !== Number(itemId)))
                                }
                                return `Movie ${itemLabel} was deleted.`
                             },
                        error: `Failed to delete movie ${itemLabel}, please try again later.`
                    })
                }
            },
            cancel: {
                label:"Cancel",
                onClick: () => {
                    toastRef.current = null;
                }
            }
        })
    }

    return  <>
            <div className={styles.layout}>
                        <Link href={`${ADMIN_EDIT_MOVIE_PATH}/${itemId}`}><SquarePen size={16}/></Link>
                        <button className={styles.deleteButton} onClick={handleDeleteSubmit}>
                            <Trash2  size={16}/>
                        </button>
                        
            </div>
                <span className={styles.movieName}>{itemLabel}</span>
            </>
}