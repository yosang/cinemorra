'use client'
import { Button } from "@yosang/ui"
import { useFormStatus } from "react-dom"
import Spinner from "./Spinner";
import { Check } from "lucide-react";

type Props = {
    successState?:boolean
    spinner?:boolean
    pendingLabel: string;
    staticLabel: string;
};

export function SubmitButton({ successState, spinner = true, pendingLabel, staticLabel }:Props) {
    
    const { pending } = useFormStatus();

    const showSpinner = pending && spinner;

    return <Button 
                type="submit" 
                disabled={pending || successState}
                aria-busy={pending}
            >{
                showSpinner 
                ? (<div style={{ display: "flex", alignItems: "center", gap: "5px" }} >
                    <Spinner aria-hidden={true} size={30}/>{pendingLabel}
                    </div>)
                : pending
                ? pendingLabel
                :
                    successState ? (<Check aria-hidden={true} size={16}/>):staticLabel
                }
            </Button>
}