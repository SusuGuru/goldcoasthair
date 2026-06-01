# Netlify V5 SPA Fix

This patch keeps the app in React Router SPA mode and fixes the latest Netlify error:

`SPA Mode: invalid route export in ./__create/not-found.tsx: loader`

React Router SPA mode does not allow route loader/action exports. The previous generated not-found route used a server-side `loader` with `fast-glob`, so this file has been replaced with a client-safe 404 page that uses `useLocation()` and `useNavigate()` only.

Deploy settings:

- Build command: `react-router build`
- Publish directory: `build/client`
- Node version: `22`
