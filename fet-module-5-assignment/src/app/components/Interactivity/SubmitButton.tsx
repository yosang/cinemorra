'use client'
import { Button } from "@yosang/ui"
import { useFormStatus } from "react-dom"

type Props = {
    pendingLabel: string;
    staticLabel: string;
};

export function SubmitButton({ pendingLabel, staticLabel }:Props) {
    const { pending } = useFormStatus();
    return <Button type="submit">{pending ? pendingLabel:staticLabel}</Button>
}