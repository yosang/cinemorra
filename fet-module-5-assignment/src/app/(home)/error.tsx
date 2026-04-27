'use client'

import { useEffect } from "react";
import { Button } from "@yosang/ui";

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
            <h2>Something went wrong!</h2>
            <Button onClick={() => retry()}>Try again</Button>
        </>
    )
}