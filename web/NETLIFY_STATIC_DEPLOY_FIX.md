# Netlify Static Deploy Fix

This package switches the React Router app to client-rendered static deployment for Netlify.

Why: the previous build completed the client and SSR bundles, then stayed stuck after the server CSS cleanup step because SSR/prerender runtime processing did not exit on Netlify.

Changes made:
- `react-router.config.ts`: set `ssr: false` and removed wildcard prerender.
- `vite.config.ts`: removed the Hono server plugin from the production build path.
- `public/_redirects`: added Netlify SPA fallback so page refreshes work.

Netlify settings:
- Build command: `react-router build`
- Publish directory: `build/client`
- Node version: `22`
