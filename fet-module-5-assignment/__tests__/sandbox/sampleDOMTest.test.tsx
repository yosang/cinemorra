import SamplePage from "@/app/components/SamplePage"
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

test("Hello world header renders", () => {
    render(<SamplePage />)
    const headerElement = screen.getByText("Hello world");

    expect(headerElement).toBeInTheDocument();
})