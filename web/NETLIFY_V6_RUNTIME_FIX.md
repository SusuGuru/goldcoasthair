# Netlify V6 Runtime Fix

This build keeps React Router in SPA mode and fixes the post-deploy blank page.

Changes:
- Removed generated auth SessionProvider from `src/app/root.tsx` so the live site does not fetch `/api/auth/session` and receive `index.html` as JSON.
- Removed the development-only `/src/__create/dev-error-overlay.js` module script from production HTML.
- Made `/` render the admin dashboard page instead of a blank null page.
- Added Netlify `_headers` to prevent stale cached `index.html`.
- Added an explicit `/assets/*` redirect rule before the SPA fallback.

Deploy settings remain:
- Build command: `react-router build`
- Publish directory: `build/client`
- Node version: `22`
