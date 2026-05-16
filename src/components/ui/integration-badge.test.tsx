import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { IntegrationBadge } from "./integration-badge";

describe("IntegrationBadge", () => {
  it("renders the integration name", () => {
    render(
      <IntegrationBadge
        name="GitHub Actions"
        icon="GitBranch"
        description="CI/CD pipeline integration"
      />
    );
    expect(screen.getByText("GitHub Actions")).toBeInTheDocument();
  });

  it("renders sr-only description for accessibility", () => {
    render(
      <IntegrationBadge
        name="Playwright"
        icon="TestTube"
        description="E2E testing framework"
      />
    );
    expect(screen.getByText("E2E testing framework")).toHaveClass("sr-only");
  });

  it("renders fallback when icon is unknown", () => {
    const { container } = render(
      <IntegrationBadge
        name="Unknown"
        icon="NonExistent"
        description="Unknown tool"
      />
    );
    const fallback = container.querySelector(".rounded.bg-neutral-700");
    expect(fallback).toBeInTheDocument();
  });

  it("renders known icon component", () => {
    const { container } = render(
      <IntegrationBadge
        name="Git"
        icon="GitBranch"
        description="Version control"
      />
    );
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("merges custom className", () => {
    const { container } = render(
      <IntegrationBadge
        name="Test"
        icon="GitBranch"
        description="Test"
        className="mt-8"
      />
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain("mt-8");
  });
});
