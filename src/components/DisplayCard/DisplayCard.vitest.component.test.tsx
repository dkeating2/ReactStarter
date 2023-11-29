// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import DisplayCard from "./DisplayCard";

describe.concurrent("DisplayCard", () => {
  beforeEach(() => {
    render(
      <DisplayCard title="Title" description="Description">
        <div>Content</div>
      </DisplayCard>
    );
  });

  it("should render title", () => {
    expect(screen.getByTestId("DisplayCardTitle")).toHaveTextContent("Title");
  });

  it("should render subtitle", () => {
    expect(screen.getByTestId("DisplayCardDescription")).toHaveTextContent(
      "Description"
    );
  });

  it("should render children", () => {
    const content = screen.getByTestId("DisplayCardContent");
    expect(content.childElementCount).toBe(1);
    expect(content).toHaveTextContent("Content");
  });
});
