import { render, screen } from "@testing-library/react";
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import Tags from "./Tags";
import { setupServer } from "msw/node"
import { http, HttpResponse } from "msw";
import axios from "axios";

describe("Tags", () => {
    // os dados da requisição API podem ser passados pelo dados mock do framework msw ...
    // const server = setupServer(
    //     http.get("http://localhost:3004/tags", () => {
    //     return HttpResponse.json([{ id: "1", name: "bar" }]);
    //   })
    // );

    // beforeAll(() => server.listen());
    // afterAll(() => server.close());
    // afterEach(() => server.resetHandlers());

    it("renders tags", async () => {
        // ou os dados da requisição da API podem ser criados assim ...
        const mockResponse = {
            data: [{
                "id": 1,
                "name": "Cristiane"
            }]
        }

        vi.spyOn(axios, "get").mockResolvedValue(mockResponse);

        render(<Tags />);
        const tags = await screen.findAllByTestId("tag");
        screen.debug();
        expect(tags).toHaveLength(1);
        expect(tags[0].textContent).toBe("Cristiane");
    })
})
