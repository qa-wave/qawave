import { describe, it, expect } from "vitest";
import "@/__tests__/intl-mock";
import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";

describe("Footer", () => {
  it("renders QAWave brand name", () => {
    render(<Footer />);
    expect(screen.getByText("QA")).toBeInTheDocument();
  });

  it("renders tagline", () => {
    render(<Footer />);
    expect(screen.getByText("Ride the AI wave in QA.")).toBeInTheDocument();
  });

  it("renders copyright", () => {
    render(<Footer />);
    expect(screen.getByText("© 2026 QAWave")).toBeInTheDocument();
  });

  it("renders column headings", () => {
    render(<Footer />);
    expect(screen.getByText("Product")).toBeInTheDocument();
    expect(screen.getByText("Connect")).toBeInTheDocument();
  });

  it("external links have target=_blank and rel=noopener", () => {
    render(<Footer />);
    const githubLink = screen.getByLabelText("GitHub (opens in new window)");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("external links have aria-label for a11y", () => {
    render(<Footer />);
    expect(
      screen.getByLabelText("GitHub (opens in new window)")
    ).toBeInTheDocument();
  });

  it("renders as footer element", () => {
    const { container } = render(<Footer />);
    expect(container.querySelector("footer")).toBeInTheDocument();
  });
});
