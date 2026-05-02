import { STYLE_CENTERED } from "@/lib/constants";
import Spinner from "../Interactivity/Spinner";

export default function LoadingScreen() {
    return <div style={STYLE_CENTERED}>
                <Spinner size={50} />
            </div>
}