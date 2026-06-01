# Netlify Deploy Fix Notes

This package includes production fixes for the Netlify React Router build.

## Fixed issues

1. `src/__create/design-mode.ts`
   - Replaced the missing generator-only `../../../../shared/design-mode` dependency with a safe production shim.

2. `src/app/errors/missing-component/helpers.js`
   - Added a safe `DoesNotExist` export because the generated demo error page imports it and Netlify bundles that route during production build.

3. `vite.config.ts`
   - Added `build.target = 'esnext'` and `esbuild.target = 'esnext'` so the SSR bundle can compile top-level `await` used by the server entry.
   - Added SSR Node target settings.

4. `netlify.toml`
   - Build command: `react-router build`
   - Publish directory: `build/client`
   - Node version: `22`

## Deploy settings

Use these in Netlify:

- Build command: `react-router build`
- Publish directory: `build/client`
- Node version: `22`

## Note

The local environment used to prepare this ZIP could not complete dependency installation before timing out, so the patch is based directly on the Netlify error log and project source inspection.

## V3 fix
- Replaced runtime filesystem API-route scanning with `import.meta.glob()` in `__create/route-builder.ts`.
- This prevents Netlify's built server from looking for `/build/server/src/app/api`, a folder that does not exist after bundling.
- API route modules are now bundled by Vite instead of searched from disk at runtime.
