'use client'
import { Button } from "@yosang/ui"
import { useFormStatus } from "react-dom"
import Spinner from "./Spinner";

type Props = {
    spinner?:boolean
    pendingLabel: string;
    staticLabel: string;
};

export function SubmitButton({ spinner = true, pendingLabel, staticLabel }:Props) {
    const { pending } = useFormStatus();
    const showSpinner = pending && spinner;

    return <Button type="submit" disabled={pending}>{
        showSpinner 
        ? (<div style={{ display: "flex", alignItems: "center", gap: "5px" }} ><Spinner size={30}/> {pendingLabel}</div>)
        : pending
        ? pendingLabel
        :
        staticLabel
        }
        </Button>
}