import { describe, expect, it } from "vitest";

import counterReducer, {
  decrement,
  increment,
  incrementByAmount,
} from "./CounterReducer";

describe("counter reducer", () => {
  it("should have the proper initial state", async () => {
    const state = counterReducer(undefined, { type: "unknown" });
    const initialState = { value: 0 };
    expect(state).toEqual(initialState);
  });
  it("should increment", async () => {
    let state = counterReducer(undefined, { type: "unknown" });
    state = counterReducer(state, increment());
    expect(state).toEqual({ value: 1 });
  });
  it("should decrement", async () => {
    let state = counterReducer(undefined, { type: "unknown" });
    state = counterReducer(state, decrement());
    expect(state).toEqual({ value: -1 });
  });
  it("should increment by a value", async () => {
    let state = counterReducer(undefined, { type: "unknown" });
    state = counterReducer(state, incrementByAmount(2));
    expect(state).toEqual({ value: 2 });
  });
});
