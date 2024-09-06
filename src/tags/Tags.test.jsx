import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Tags from "./Tags";

describe("Tags", () => {
    it("renders tags", () => {
        render(<Tags />);
        const tags = screen.getAllByTestId("tag");
        expect(tags), toHaveLength(0);
    })
})
