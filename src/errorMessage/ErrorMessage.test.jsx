import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ErrorMessage from "./ErrorMessage";

describe('Error Message', () => {
    //procura se existe o texto no elemento componet
    it("renders default error state", () => {
        render(<ErrorMessage />)
        // screen.debug()
        const messageContainer = screen.getByTestId('message-container');
        expect(messageContainer.textContent).toBe("Something went wrong");
    });

    //customizou um novo texto em "props" no elemento component
    it("renders custom error state", () => {
        render(<ErrorMessage message="Email is already token" />)
        // screen.debug()
        const messageContainer = screen.getByTestId('message-container');
        expect(messageContainer.textContent).toBe("Email is already token");
    });
})