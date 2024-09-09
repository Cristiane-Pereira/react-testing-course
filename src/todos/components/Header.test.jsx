import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Header from "./Header";
import { TodosContext } from "../contexts/todos";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Header", () => {
    const mockDisptch = vi.fn();
    const mockAddTodo = vi.fn();

    it("renders default state", () => {
        render(
        <TodosContext.Provider value={[{}, mockDisptch(), {addTodo: mockAddTodo}]}>
            <Header />
        </TodosContext.Provider>
       );
       screen.debug();
       expect(screen.getByTestId("header")).toBeInTheDocument(); //vê se o elemento existe ...
    });

    it("should add todo", async () => {
        const user = userEvent.setup();
        render(
        <TodosContext.Provider value={[{}, mockDisptch(), {addTodo: mockAddTodo}]}>
            <Header />
        </TodosContext.Provider>
       );
       const input = screen.getByTestId("newTodoInput");
       await user.type(input, "foo{enter}"); //add um valor na lista de TODO ...
       expect(mockAddTodo).toHaveBeenCalledWith({
         text: "foo",
         isCompleted: false
       })
       expect(input.value).toEqual("");
    });
})