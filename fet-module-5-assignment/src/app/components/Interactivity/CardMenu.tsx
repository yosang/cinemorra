import { SquarePen , Trash2, Info} from "lucide-react";
import styles from "./CardMenu.module.css"
import Link from "next/link";
import { ADMIN_EDIT_MOVIE_PATH } from "@/lib/constants";
import { useFormState } from "react-dom";
import { DeleteMovie } from "@/app/(dashboard)/admin/movies/actions";
import { Dispatch, SetStateAction, useEffect } from "react";
import { Movie } from "@/services/types";
import { toast } from "sonner";

type Props = {
    itemLabel: string
    itemId: number
    setter: Dispatch<SetStateAction<Movie[]>> | null
};

export default function CardMenu({ itemLabel, itemId, setter }:Props) {
    const [state, formAction] = useFormState(DeleteMovie, {});
    
    useEffect(() => {

        if(state.success && setter) {
            setter(prev => prev.filter(m => m.id !== Number(itemId)))
            
            toast.success("Movie was deleted successfully!", {
                description: `Movie ${itemLabel} was deleted.`
            })
        }

        if(state.error) {
            toast.error("Failed to delete movie", {
                description: `Failed to delete movie ${itemLabel}, please try again later.`
            })
        }

    }, [state.success, itemId, setter])

    return  <>
            <div className={styles.layout}>
                        <Link href={`${ADMIN_EDIT_MOVIE_PATH}/${itemId}`}><SquarePen size={16}/></Link>
                        <form action={formAction}>
                            <button type="submit" name="id" value={itemId} className={styles.deleteButton}>
                                {state?.error ? (<span className={styles.error} title="Internal error"><Info size={16}/></span>):(<Trash2 size={16}/>)}
                            </button>
                        </form>
            </div>
                <span className={styles.movieName}>{itemLabel}</span>
            </>
}