import { describe, it, expect, vi } from "vitest";

// Test the pure date utility functions (reimplemented from admin/route.ts)
function today() {
  return new Date().toISOString().split("T")[0];
}

function daysAgo(n: number) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().split("T")[0];
}

describe("admin date utilities", () => {
  it("today() returns ISO date string", () => {
    const result = today();
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it("daysAgo(0) equals today()", () => {
    expect(daysAgo(0)).toBe(today());
  });

  it("daysAgo(1) is yesterday", () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    expect(daysAgo(1)).toBe(yesterday.toISOString().split("T")[0]);
  });

  it("daysAgo(30) is 30 days ago", () => {
    const d = new Date();
    d.setDate(d.getDate() - 30);
    expect(daysAgo(30)).toBe(d.toISOString().split("T")[0]);
  });

  it("handles month boundary", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-03-01"));
    expect(daysAgo(1)).toBe("2026-02-28");
    vi.useRealTimers();
  });

  it("handles year boundary", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-01"));
    expect(daysAgo(1)).toBe("2025-12-31");
    vi.useRealTimers();
  });
});

// Test Vercel API URL construction logic
function buildVercelUrl(path: string, teamId: string) {
  return `https://api.vercel.com${path}${path.includes("?") ? "&" : "?"}teamId=${teamId}`;
}

describe("vercelFetch URL construction", () => {
  const teamId = "team_abc123";

  it("appends teamId with ? when path has no query", () => {
    expect(buildVercelUrl("/v6/deployments", teamId)).toBe(
      "https://api.vercel.com/v6/deployments?teamId=team_abc123"
    );
  });

  it("appends teamId with & when path already has query params", () => {
    expect(buildVercelUrl("/v6/deployments?limit=5", teamId)).toBe(
      "https://api.vercel.com/v6/deployments?limit=5&teamId=team_abc123"
    );
  });
});
