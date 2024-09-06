import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import Username from "./Username";

describe("UserName", () => {
    // testa se o campo de texto ta setado o  ...
    it("renders default empty text", () => {
        render(<Username />)
        expect(screen.getByTestId("username").textContent).toBe(
            ""
        );
    });

    //testa o click do botão, pegando o evento e setando o novo valor ...
    it("renders changed username with button", async () => {
        const user = userEvent.setup();
        render(<Username />)
        await user.click(screen.getByTestId("button"));
        expect(screen.getByTestId("username").textContent).toBe("bar");
    });

    // testa o valor do input ...
    it("renders changed username with input", async () => {
        const user = userEvent.setup();
        render(<Username />)
        const usernameInput = screen.getByTestId("usernameInput");
        await user.type(usernameInput, "foo");
        expect(screen.getByTestId("username").textContent).toBe("foo");
    });
})