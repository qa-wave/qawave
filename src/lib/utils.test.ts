import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn (class name merge)", () => {
  it("merges simple classes", () => {
    expect(cn("text-sm", "font-bold")).toBe("text-sm font-bold");
  });

  it("handles conditional classes", () => {
    expect(cn("base", false && "hidden", "visible")).toBe("base visible");
  });

  it("resolves Tailwind conflicts (last wins)", () => {
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });

  it("handles undefined and null", () => {
    expect(cn("base", undefined, null, "end")).toBe("base end");
  });

  it("returns empty string for no input", () => {
    expect(cn()).toBe("");
  });

  it("merges padding conflicts", () => {
    expect(cn("px-4", "px-6")).toBe("px-6");
  });
});
