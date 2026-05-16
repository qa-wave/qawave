import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "./badge";

describe("Badge", () => {
  it("renders children text", () => {
    render(<Badge>AI-powered</Badge>);
    expect(screen.getByText("AI-powered")).toBeInTheDocument();
  });

  it("renders as a span element", () => {
    render(<Badge>Test</Badge>);
    const badge = screen.getByText("Test");
    expect(badge.tagName).toBe("SPAN");
  });

  it("applies base styles", () => {
    render(<Badge>Styled</Badge>);
    const badge = screen.getByText("Styled");
    expect(badge.className).toContain("rounded-full");
    expect(badge.className).toContain("border");
  });

  it("merges custom className", () => {
    render(<Badge className="mt-4">Custom</Badge>);
    const badge = screen.getByText("Custom");
    expect(badge.className).toContain("mt-4");
  });
});
