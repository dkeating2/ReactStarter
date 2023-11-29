// @vitest-environment jsdom

import { renderHook } from "@testing-library/react-hooks";
import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import mockData from "../../mock/mockUsers";
import useData from "./useData";

describe.concurrent("useData", () => {
  const fetchSpy = vi.spyOn(global, "fetch");

  //Run before all the tests
  beforeAll(() => {
    //Mock the return value of the global fetch function
    const mockResolveValue = {
      ok: true,
      json: () => new Promise((resolve) => resolve(mockData)),
    };

    fetchSpy.mockReturnValue(mockResolveValue as any);
  });

  it("should have the proper initial state", async () => {
    const { result, waitFor, waitForNextUpdate } = renderHook(() =>
      useData("https://jsonplaceholder.typicode.com/users")
    );
    expect(result.all[0].isLoading).toEqual(false);
    expect(result.all[0].data).toEqual(null);
    expect(result.all[0].nRecords).toEqual(undefined);
  });

  it("should have show loading state", async () => {
    const { result, waitFor, waitForNextUpdate } = renderHook(() =>
      useData("https://jsonplaceholder.typicode.com/users")
    );
    expect(result.current.isLoading).toEqual(true);
    expect(result.current.data).toEqual(null);
  });

  it("should have load data and have the proper final state", async () => {
    const { result, waitFor, waitForNextUpdate } = renderHook(() =>
      useData("https://jsonplaceholder.typicode.com/users")
    );
    await waitForNextUpdate();
    expect(result.current.isLoading).toEqual(false);
    expect(result.current.data).toEqual(mockData);
    expect(result.current.nRecords).toEqual(mockData.length);
  });

  afterAll(() => {
    fetchSpy.mockRestore();
  });
});
