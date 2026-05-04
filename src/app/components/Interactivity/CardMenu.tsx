import { SquarePen , Trash2 } from "lucide-react";
import styles from "./CardMenu.module.css"
import Link from "next/link";
import { ADMIN_EDIT_MOVIE_PATH } from "@/lib/constants";
import { DeleteMovie } from "@/app/(dashboard)/admin/movies/actions";
import { useRef } from "react";
import { toast } from "sonner";
import { useMovieStore } from "@/lib/useMoviesStore";

type Props = {
    itemLabel: string // A text label, for example the name of the movie
    itemId: number // The id of the movie, used when deleting a movie
};

/**
 * @description An interactive menu component for a movie card.
 * 
 * Features:
 * - Uses toasts to provide a comfirmation phase when deleting movies
 * - Uses a server action to prompt the deletion of a movie
 * 
 * Behavior:
 * - Animated menu on hover
 * - Prevents the user from clicking delete multiple times when a confirmation toast is active
 * - Uses a promise based toast
 * 
 * @returns {JSX.Element}
 */
export default function CardMenu({ itemLabel, itemId }:Props) {
    const toastRef = useRef<string | number | null>(null)
    const { deleteMovie } = useMovieStore();
    
    const handleDeleteSubmit = () => {
        if(toastRef.current) return;

        toastRef.current = toast(`Are you sure you want to delete ${itemLabel}?`, {
            onDismiss: () => toastRef.current = null,
            action: {
                label:"Delete",
                onClick: () => {
                    const formData = new FormData();
                     formData.append("id", String(itemId));
    
                    toast.promise(DeleteMovie({}, formData), {
                        loading: "Deleting movie...",
                        success: () => {
                                deleteMovie(itemId);
                                return `Movie ${itemLabel} was deleted.`
                             },
                        error: `Failed to delete movie ${itemLabel}, please try again later.`
                    })
                }
            },
            cancel: {
                label:"Cancel",
                onClick: () => toastRef.current = null
            }
        })
    }

    return  <>
            <div className={styles.layout}>
                        <Link 
                            aria-label="Edit movie"
                            href={`${ADMIN_EDIT_MOVIE_PATH}/${itemId}`}
                            ><SquarePen aria-hidden={true} size={16}/></Link>
                        <button 
                            aria-label="Delete movie"
                            className={styles.deleteButton} 
                            onClick={handleDeleteSubmit}
                        >
                            <Trash2 aria-hidden={true} size={16}/>
                        </button>
                        
            </div>
                <span className={styles.movieName}>{itemLabel}</span>
            </>
}