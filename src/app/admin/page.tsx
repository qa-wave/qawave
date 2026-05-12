"use client";

import { useState, useEffect, useCallback } from "react";
import {
  BarChart3,
  Globe,
  Zap,
  Rocket,
  RefreshCw,
  Lock,
  ExternalLink,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";

interface Deployment {
  url: string;
  state: string;
  created: string;
  target: string;
}

interface AnalyticsData {
  visitors?: { total?: number };
  pageViews?: { total?: number };
  bounceRate?: { rate?: number };
  topPages?: Array<{ page: string; views: number }>;
  topReferrers?: Array<{ referrer: string; views: number }>;
}

interface DashboardData {
  deployments: Deployment[];
  analytics: AnalyticsData | null;
  generatedAt: string;
}

function StateIcon({ state }: { state: string }) {
  if (state === "READY")
    return <CheckCircle className="h-4 w-4 text-emerald-400" />;
  if (state === "BUILDING" || state === "INITIALIZING")
    return <Clock className="h-4 w-4 text-amber-400" />;
  return <AlertCircle className="h-4 w-4 text-red-400" />;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = useCallback(async (pwd: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/admin?pwd=${encodeURIComponent(pwd)}`);
      if (res.status === 401) {
        setError("Wrong password");
        setAuthed(false);
        setLoading(false);
        return;
      }
      const json = await res.json();
      setData(json);
      setAuthed(true);
    } catch {
      setError("Failed to load data");
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem("admin-pwd");
    if (saved) {
      setPassword(saved);
      fetchData(saved);
    }
  }, [fetchData]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    sessionStorage.setItem("admin-pwd", password);
    fetchData(password);
  }

  if (!authed) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F172A",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <form
          onSubmit={handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            width: 320,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "#F8FAFC",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            <Lock style={{ width: 20, height: 20, color: "#0EA5E9" }} />
            Admin
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            style={{
              padding: "10px 14px",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "#1E293B",
              color: "#F8FAFC",
              fontSize: 14,
              outline: "none",
            }}
          />
          {error && (
            <p style={{ color: "#EF4444", fontSize: 13 }}>{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "10px 0",
              borderRadius: 8,
              border: "none",
              background: "#0EA5E9",
              color: "#fff",
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            {loading ? "Loading..." : "Sign in"}
          </button>
        </form>
      </div>
    );
  }

  const a = data?.analytics;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0F172A",
        color: "#F8FAFC",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1024, margin: "0 auto", padding: "32px 16px" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 32,
          }}
        >
          <h1
            style={{
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            QA<span style={{ color: "#0EA5E9" }}>Wave</span> Admin
          </h1>
          <button
            onClick={() => fetchData(password)}
            disabled={loading}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 16px",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "#1E293B",
              color: "#F8FAFC",
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            <RefreshCw
              style={{
                width: 14,
                height: 14,
                animation: loading ? "spin 1s linear infinite" : "none",
              }}
            />
            Refresh
          </button>
        </div>

        {/* Metric cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <MetricCard
            icon={<Globe style={{ width: 18, height: 18, color: "#0EA5E9" }} />}
            label="Visitors (30d)"
            value={a?.visitors?.total ?? "—"}
          />
          <MetricCard
            icon={
              <BarChart3
                style={{ width: 18, height: 18, color: "#06B6D4" }}
              />
            }
            label="Page views (30d)"
            value={a?.pageViews?.total ?? "—"}
          />
          <MetricCard
            icon={<Zap style={{ width: 18, height: 18, color: "#F59E0B" }} />}
            label="Bounce rate"
            value={
              a?.bounceRate?.rate != null
                ? `${Math.round(a.bounceRate.rate * 100)}%`
                : "—"
            }
          />
          <MetricCard
            icon={
              <Rocket style={{ width: 18, height: 18, color: "#8B5CF6" }} />
            }
            label="Deployments"
            value={data?.deployments?.length ?? "—"}
          />
        </div>

        {/* Two columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}
        >
          {/* Top pages */}
          <div
            style={{
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "#1E293B",
              padding: 20,
            }}
          >
            <h2
              style={{
                fontSize: 13,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#94A3B8",
                marginBottom: 16,
              }}
            >
              Top pages
            </h2>
            {a?.topPages && a.topPages.length > 0 ? (
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {a.topPages.slice(0, 10).map((p) => (
                  <li
                    key={p.page}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "8px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                      fontSize: 13,
                    }}
                  >
                    <span style={{ color: "#E2E8F0" }}>{p.page}</span>
                    <span style={{ color: "#64748B", fontFamily: "monospace" }}>
                      {p.views}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p style={{ color: "#64748B", fontSize: 13 }}>
                No data yet. Analytics needs traffic to populate.
              </p>
            )}
          </div>

          {/* Recent deployments */}
          <div
            style={{
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "#1E293B",
              padding: 20,
            }}
          >
            <h2
              style={{
                fontSize: 13,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#94A3B8",
                marginBottom: 16,
              }}
            >
              Recent deployments
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {data?.deployments?.map((d) => (
                <li
                  key={d.url}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    fontSize: 13,
                  }}
                >
                  <StateIcon state={d.state} />
                  <span style={{ color: "#E2E8F0", flex: 1 }}>
                    {d.target === "production" ? "Production" : "Preview"}
                  </span>
                  <span
                    style={{ color: "#64748B", fontSize: 12, fontFamily: "monospace" }}
                  >
                    {new Date(d.created).toLocaleDateString()}
                  </span>
                  <a
                    href={`https://${d.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0EA5E9" }}
                  >
                    <ExternalLink style={{ width: 14, height: 14 }} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Top referrers */}
        {a?.topReferrers && a.topReferrers.length > 0 && (
          <div
            style={{
              marginTop: 16,
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "#1E293B",
              padding: 20,
            }}
          >
            <h2
              style={{
                fontSize: 13,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#94A3B8",
                marginBottom: 16,
              }}
            >
              Top referrers
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {a.topReferrers.slice(0, 10).map((r) => (
                <li
                  key={r.referrer}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    fontSize: 13,
                  }}
                >
                  <span style={{ color: "#E2E8F0" }}>
                    {r.referrer || "(direct)"}
                  </span>
                  <span style={{ color: "#64748B", fontFamily: "monospace" }}>
                    {r.views}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p
          style={{
            marginTop: 24,
            fontSize: 11,
            color: "#475569",
            textAlign: "center",
          }}
        >
          Last updated: {data?.generatedAt ? new Date(data.generatedAt).toLocaleString() : "—"}
        </p>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function MetricCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) {
  return (
    <div
      style={{
        borderRadius: 12,
        border: "1px solid rgba(255,255,255,0.08)",
        background: "#1E293B",
        padding: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 12,
        }}
      >
        {icon}
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#94A3B8",
          }}
        >
          {label}
        </span>
      </div>
      <p
        style={{
          fontSize: 28,
          fontWeight: 600,
          fontFamily: "monospace",
          color: "#F8FAFC",
          margin: 0,
        }}
      >
        {value}
      </p>
    </div>
  );
}
