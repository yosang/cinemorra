'use client'

import { useEffect } from "react";
import { Button } from "@yosang/ui";
import { STYLE_CENTERED } from "@/lib/constants";

export default function Error({
    error,
    retry
}: {
    error: Error & { digest?:string },
    retry: () => void
}) {
    
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <>
        <div style={STYLE_CENTERED}>
            <h2>Something went wrong!</h2>
            <h3>{error.message}</h3>
            <Button onClick={() => retry()}>Try again</Button>
        </div>
        </>
    )
}