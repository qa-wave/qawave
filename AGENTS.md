<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:deployment-rules -->
# Deployment

Uživatel může říct "nasaď na dev" nebo "nasaď na prod". Reaguj takto:

## "Nasaď na dev" / "spusť lokálně" / "dev"
1. `cd` do tohoto projektu
2. `npm install` (pokud chybí node_modules)
3. `npm run dev`
4. Ověř health: `curl http://localhost:3000/api/health`
5. Docker zatím není nakonfigurován pro tento projekt.

## "Nasaď na prod" / "deploy" / "prod"
1. Ověř, že build projde: `npm run build`
2. Ověř, že existuje GitHub repo a jsou nastavené secrets (VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID)
3. `git add -A && git commit -m "deploy: <popis změn>" && git push origin main`
4. CI/CD pipeline se spustí automaticky (GitHub Actions → Vercel)
5. Po deployi ověř healthcheck

## Infrastruktura
- Lokální: Docker zatím není nakonfigurován (služba qa-wave chybí v docker-compose.yml)
- Online: Vercel, region fra1 (Frankfurt)
- CI/CD: `.github/workflows/ci.yml` + `cd.yml`
<!-- END:deployment-rules -->
