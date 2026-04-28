import { ReactNode } from "react";

// @ts-ignore
import { HorizontalSplit } from "@yosang/ui";

export default function AdminLayout({children}:{children: ReactNode}) {
    return <HorizontalSplit
                startSide={<h1>Side bar here</h1>}
                endSide={<h1>Side bar here</h1>}
            />
}