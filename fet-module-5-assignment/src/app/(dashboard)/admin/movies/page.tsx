import NavigationBar from "@/app/components/Navigation/Navbar";
import { ADMIN_ADD_MOVIE_PATH } from "@/lib/constants";
import { NavLink } from "@yosang/ui";
import { Plus } from "lucide-react"
import Link from "next/link";
export default function AdminMoviesPage() {
    return <div>
                <div>
                    <h1>Im a header</h1>
                    <h1>Add new movie</h1>
                     <NavLink as={Link} href={ADMIN_ADD_MOVIE_PATH}><Plus /></NavLink>
                </div>
                <div>
                    <h1>Here is a grid layout</h1>
                </div>
            </div>
}