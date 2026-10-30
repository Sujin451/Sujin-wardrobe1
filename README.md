# Digital Wardrobe (cloud edition)
Data lives in Cloudflare **D1** (metadata, trips, packing) and **R2** (original, processed, thumbnail images). Browser storage is no longer used; the old IndexedDB copy is only read once by the migration banner.

## One-time Cloudflare setup
1. **D1**: Dashboard → Storage & databases → D1 → Create `wardrobe-db`. Paste its ID into `wrangler.toml`.
2. **R2**: Create bucket `wardrobe-images`. Leave public access OFF (images are served only through `/api`).
3. **Pages bindings**: your Pages project → Settings → Bindings → add D1 `DB` → `wardrobe-db`, and R2 `WARDROBE_BUCKET` → `wardrobe-images`, for both Production and Preview.
4. **Access (login)**: Zero Trust → Access → Applications → Add application → Self-hosted. Add your Pages domain (and `*.<project>.pages.dev` to cover previews). Policy: Allow → your email. Copy the application's **Audience (AUD) tag**; your team domain is shown in Zero Trust → Settings.
5. **Variables**: Pages → Settings → Variables: `ACCESS_TEAM_DOMAIN=<team>.cloudflareaccess.com`, `ACCESS_AUD=<AUD tag>`. Do NOT set `DEV_USER` in production.
6. `npm install`, `npx wrangler login`, then `npm run db:migrate:remote`.
7. Push to GitHub; Pages redeploys. Open the site, sign in, and use the **Migrate to cloud** banner on the browser that holds your old uploads.

## Local development
`cp .dev.vars.example .dev.vars`, `npm run db:migrate:local`, then
`npx wrangler pages dev --proxy 3000 --d1=DB --r2=WARDROBE_BUCKET -- npm run dev` and open the URL wrangler prints.

## Notes
- Background removal still runs in the browser (first run downloads the model); the three resulting files are uploaded to R2.
- Images are served by an authenticated endpoint (no public bucket, no keys in the frontend).
- Pages Functions live in `functions/`. If you deploy with `@cloudflare/next-on-pages`, `functions/` is ignored and the handler must be mounted as an edge route instead.
- Trips sync last-write-wins; other devices see changes when the tab regains focus or reloads.
- Logo/brand detection is still not configured (see earlier notes).
