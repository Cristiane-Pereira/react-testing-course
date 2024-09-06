import { act, render, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import useCounter from "./useCounter";

describe("useCount", () => {
    it("should render initial count", () => {
        const { result } = renderHook(() => useCounter(10));
        expect(result.current.count).toEqual(10);
    });

    it("should increment the count", () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.increment()
        })
        expect(result.current.count).toEqual(1);
    });
})