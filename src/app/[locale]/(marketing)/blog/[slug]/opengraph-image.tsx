import { ImageResponse } from "next/og";

export const alt = "QAWave Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image({ params }: { params: { slug: string } }) {
  const titles: Record<string, string> = {
    "40-agents": "40 agents. 1 founder.\nThis is how I run QAWave.",
  };

  const title = titles[params.slug] ?? "QAWave Blog";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0F172A",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            height: "100%",
            background:
              "radial-gradient(ellipse 80% 80% at 80% 40%, rgba(14,165,233,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            color: "#F8FAFC",
            marginBottom: 16,
          }}
        >
          QA<span style={{ color: "#0EA5E9" }}>Wave</span>
        </div>
        <div
          style={{
            display: "flex",
            padding: "6px 16px",
            borderRadius: 9999,
            border: "1px solid rgba(14,165,233,0.3)",
            background: "rgba(14,165,233,0.1)",
            fontSize: 14,
            color: "#0EA5E9",
            marginBottom: 40,
          }}
        >
          Blog
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 52,
            fontWeight: 700,
            color: "#F8FAFC",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: 900,
            whiteSpace: "pre-wrap",
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 18,
            color: "#64748B",
            marginTop: 32,
          }}
        >
          By Tomas Mertin · qawave.ai
        </div>
      </div>
    ),
    { ...size },
  );
}
