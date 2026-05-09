<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version (16.2.3) has breaking changes proti tréninkovým datům — APIs, conventions, and file structure may all differ. Read the relevant guide in `node_modules/next/dist/docs/` before writing any Next-specific code. Heed deprecation notices.

**Notable Next 16 changes already applied in this repo:**
- `middleware.ts` deprecated → renamed to **`proxy.ts`** (in `src/proxy.ts`)
- App Router with `[locale]` segment under `src/app/[locale]/`
- Turbopack is build default
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:deployment-rules -->
# Deployment

Uživatel může říct "nasaď na dev" nebo "nasaď na prod". Reaguj takto:

## "Nasaď na dev" / "spusť lokálně" / "dev"
1. `cd` do tohoto projektu (`/Users/tm/workspaces/projects/qa-wave`)
2. `npm install` (pokud chybí node_modules)
3. `npm run dev` — běží na **port 3030** (per `package.json`)
4. Ověř health: `curl http://localhost:3030/api/health` → `{"status":"ok"}`
5. Docker zatím není nakonfigurován pro tento projekt.

## "Nasaď na prod" / "deploy" / "prod"
1. Ověř, že build projde: `npm run build`
2. Commit + push:
   ```sh
   git add -A
   git commit -m "<typ>: <popis>"
   git push origin main
   ```
3. **Známý issue:** GitHub Actions CD pipeline failuje na chybějícím `VERCEL_TOKEN` v repo secrets. Dokud token nedoplníš, používej **lokální deploy přes Vercel CLI**:
   ```sh
   vercel --prod --yes
   ```
   CLI je linked (`projectId prj_jltH6HoJHfJgV6HS6mTBuS7CYRFC`, org `team_uVlMvMQ4WwYeNbcPHUkQb9vc`), přihlášený jako `qa-wave`.
4. Po deployi ověř health: `curl https://qawave.ai/api/health`
5. Pokud `/cs` nebo `/en` selže (HTTP 500), check `vercel logs <deployment-id>` přes Vercel dashboard nebo CLI.

## Infrastruktura
- **Lokální:** Docker není nakonfigurován (`docker-compose.yml` neobsahuje qa-wave službu)
- **Online:** Vercel, region `fra1` (Frankfurt), Hobby plan
- **CI/CD:** `.github/workflows/ci.yml` (build + lint, prochází) + `cd.yml` (deploy, **failuje** na missing `VERCEL_TOKEN`)
- **Domain:** `qawave.ai` (apex) + redirect z `/` na `/<locale>/` přes `proxy.ts`
- **GitHub repo:** `qa-wave/qawave` (private)
<!-- END:deployment-rules -->
