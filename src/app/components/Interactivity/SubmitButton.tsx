'use client'
import { Button } from "@yosang/ui"
import { useFormStatus } from "react-dom"
import Spinner from "./Spinner";
import { Check } from "lucide-react";

type Props = {
    successState?:boolean // Wether to show a Check icon on success
    spinner?:boolean // Wether to use a spinner on loading state
    pendingLabel: string; // A text label that renders in loading state
    staticLabel: string; // A text label that renders when not in loading state
};

/**
 * @description A wrapper for my custom Button component, which provides some extra features, such as:
 * - spinner for loading states
 * - an icon for success feedback
 * - loading label text
 * - static label text
 * @returns {JSX.Element}
 */
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