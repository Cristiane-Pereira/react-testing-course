import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Pagination from "./Pagination";
import userEvent from "@testing-library/user-event";
import * as utils from "../utils"

vi.mock('../utils', () => {
    return {
        range: () => [1, 2, 3, 4, 5],
    }
});

// Verifica o total, limite por paginação e pagina selecionada do componet ...
describe("Pagination", () => {
   it("renders correct pagination", () => {
    render(<Pagination total={50} limit={10} currentPage={1} />);
    // screen.debug()

    const pageContainers = screen.getAllByTestId('page-container');

    // expect(pageContainers.length).toEqual(5);
    expect(pageContainers).toHaveLength(5);
    expect(pageContainers[0].textContent).toBe("1");
   });

   //Verifica se o elemento foi clicado ...
   it("should emit clicked page", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
    <Pagination 
        total={50} 
        limit={10} 
        currentPage={1} 
        selectPage={handleClick} />
    )

    const pageContainers = screen.getAllByTestId('page-container');
    await user.click(pageContainers[0]);
    expect(handleClick).toHaveBeenCalledOnce();
    expect(handleClick).toHaveBeenCalledWith(1);
   });
});

// it('spies on utils', () => {
//     vi.spyOn(utils, "range")
//     render(<Pagination total={50} limit={10} currentPage={1} />);
//     // expect(utils.range).toHaveBeenCalledWith("foo");
//     expect(utils.range).toHaveBeenCalledWith(1,6);
//     screen.debug();
// });