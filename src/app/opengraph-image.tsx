import { ImageResponse } from "next/og";

export const alt = "QAWave — Ride the AI wave in QA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "#0F172A",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gradient backdrop */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "60%",
            height: "100%",
            background:
              "radial-gradient(ellipse 80% 80% at 80% 40%, rgba(14,165,233,0.2) 0%, rgba(6,182,212,0.1) 40%, rgba(139,92,246,0.08) 70%, transparent 100%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            fontSize: 32,
            fontWeight: 700,
            color: "#F8FAFC",
            marginBottom: 48,
            letterSpacing: "-0.02em",
          }}
        >
          QA<span style={{ color: "#0EA5E9" }}>Wave</span>
        </div>

        {/* Badge */}
        <div
          style={{
            display: "flex",
            padding: "8px 20px",
            borderRadius: 9999,
            border: "1px solid rgba(14, 165, 233, 0.3)",
            background: "rgba(14, 165, 233, 0.1)",
            fontSize: 16,
            color: "#0EA5E9",
            marginBottom: 32,
          }}
        >
          Agentic AI for QA Engineering
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            color: "#F8FAFC",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            maxWidth: 800,
          }}
        >
          Ride the AI wave in QA.
        </div>

        {/* Subheadline */}
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#94A3B8",
            marginTop: 24,
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Custom AI agents that live in your CI/CD — generating tests, healing
          flakiness, triaging bugs 24/7.
        </div>

        {/* Wave decoration */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 16,
            color: "#64748B",
          }}
        >
          qawave.ai
        </div>
      </div>
    ),
    { ...size },
  );
}
