import { onRequest } from "../functions/api/[[path]]";

interface Env { DB: D1Database; WARDROBE_BUCKET: R2Bucket; ASSETS: Fetcher; ACCESS_TEAM_DOMAIN?: string; ACCESS_AUD?: string; DEV_USER?: string }

// Routes /api/* to the same handler used by Pages Functions; everything else is the static site in ./out.
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api/")) {
      const path = url.pathname.slice(5).split("/").filter(Boolean).map(decodeURIComponent);
      return onRequest({ request, env, params: { path } } as unknown as Parameters<typeof onRequest>[0]);
    }
    return env.ASSETS.fetch(request);
  },
};
