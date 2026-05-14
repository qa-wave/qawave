const VERCEL_TOKEN = process.env.VERCEL_API_TOKEN ?? "";
const PROJECT_ID = "prj_qR7Fg3fMEB7rwYYiTY9rLKYSpDlH";
const TEAM_ID = "team_uVlMvMQ4WwYeNbcPHUkQb9vc";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

async function vercelFetch(path: string) {
  const res = await fetch(
    `https://api.vercel.com${path}${path.includes("?") ? "&" : "?"}teamId=${TEAM_ID}`,
    {
      headers: { Authorization: `Bearer ${VERCEL_TOKEN}` },
      next: { revalidate: 0 },
    },
  );
  if (!res.ok) return null;
  return res.json();
}

export async function GET(request: Request) {
  if (!ADMIN_PASSWORD) {
    return Response.json({ error: "ADMIN_PASSWORD not configured" }, { status: 500 });
  }

  const pwd = request.headers.get("authorization")?.replace("Bearer ", "");

  if (pwd !== ADMIN_PASSWORD) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [deployments, analytics] = await Promise.all([
    vercelFetch(`/v6/deployments?projectId=${PROJECT_ID}&limit=5`),
    vercelFetch(
      `/v1/web-analytics/stats?projectId=${PROJECT_ID}&from=${daysAgo(30)}&to=${today()}`,
    ),
  ]);

  return Response.json({
    deployments: deployments?.deployments?.map(
      (d: Record<string, unknown>) => ({
        url: d.url,
        state: d.readyState,
        created: d.createdAt,
        target: d.target,
      }),
    ) ?? [],
    analytics: analytics ?? null,
    generatedAt: new Date().toISOString(),
  });
}

function today() {
  return new Date().toISOString().split("T")[0];
}

function daysAgo(n: number) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().split("T")[0];
}
