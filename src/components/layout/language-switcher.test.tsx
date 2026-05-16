import { describe, it, expect } from "vitest";
import "@/__tests__/intl-mock";
import { render, screen } from "@testing-library/react";
import { LanguageSwitcher } from "./language-switcher";

describe("LanguageSwitcher", () => {
  it("renders language buttons", () => {
    render(<LanguageSwitcher />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
  });

  it("has role=group with aria-label", () => {
    render(<LanguageSwitcher />);
    expect(screen.getByRole("group")).toHaveAttribute("aria-label", "Language");
  });

  it("marks active locale with aria-pressed=true", () => {
    render(<LanguageSwitcher />);
    const buttons = screen.getAllByRole("button");
    const enButton = buttons[0];
    expect(enButton).toHaveAttribute("aria-pressed", "true");
  });

  it("marks inactive locale with aria-pressed=false", () => {
    render(<LanguageSwitcher />);
    const buttons = screen.getAllByRole("button");
    const csButton = buttons[1];
    expect(csButton).toHaveAttribute("aria-pressed", "false");
  });

  it("has focus-visible styles for a11y", () => {
    render(<LanguageSwitcher />);
    const btn = screen.getAllByRole("button")[0];
    expect(btn.className).toContain("focus-visible:outline-2");
  });
});
