import type { Config } from '@react-router/dev/config';

// Netlify static deploy mode.
// The original app had SSR + wildcard prerender enabled. On Netlify upload deploys,
// the build completed the client/server bundles but then stayed stuck while trying
// to prerender/runtime-process routes. This app is a dashboard-style React app, so
// we deploy it as a client-rendered SPA.
export default {
  appDirectory: './src/app',
  ssr: false,
} satisfies Config;
