import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F172A",
          color: "#F8FAFC",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <p
          style={{
            fontSize: 14,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#0EA5E9",
            marginBottom: 16,
          }}
        >
          404
        </p>
        <h1
          style={{
            fontSize: 36,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Page not found.
        </h1>
        <p style={{ color: "#94A3B8", marginTop: 12, fontSize: 16 }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/en"
          style={{
            marginTop: 32,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 24px",
            borderRadius: 8,
            background: "#0EA5E9",
            color: "#fff",
            fontSize: 14,
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          Go to homepage
        </Link>
      </body>
    </html>
  );
}
