import { Hono } from 'hono';
import type { Handler } from 'hono/types';
import updatedFetch from '../src/__create/fetch';

const API_BASENAME = '/api';
const api = new Hono();

if (globalThis.fetch) {
  globalThis.fetch = updatedFetch;
}

// Vite-safe route collection. The previous version scanned the filesystem at
// runtime, which breaks after React Router bundles the server into build/server.
// import.meta.glob makes Vite include these route modules in the server bundle.
const routeModules = import.meta.glob('../src/app/api/**/route.js', {
  eager: true,
}) as Record<string, Record<string, Handler>>;

function getHonoPath(routeFile: string): string {
  const apiPrefix = '../src/app/api/';
  const relativePath = routeFile.startsWith(apiPrefix)
    ? routeFile.slice(apiPrefix.length)
    : routeFile;

  const routePath = relativePath.replace(/\/route\.js$/, '');

  if (!routePath || routePath === 'route.js') {
    return '/';
  }

  const transformed = routePath
    .split('/')
    .filter(Boolean)
    .map((segment) => {
      const match = segment.match(/^\[(\.{3})?([^\]]+)\]$/);
      if (!match) return segment;
      const [, dots, param] = match;
      return dots === '...' ? `:${param}{.+}` : `:${param}`;
    })
    .join('/');

  return `/${transformed}`;
}

function registerRoutes() {
  const routeEntries = Object.entries(routeModules).sort(([a], [b]) => b.length - a.length);

  api.routes = [];

  for (const [routeFile, route] of routeEntries) {
    const honoPath = getHonoPath(routeFile);
    const methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'] as const;

    for (const method of methods) {
      const routeHandler = route[method];
      if (!routeHandler) continue;

      const handler: Handler = async (c) => {
        const params = c.req.param();
        return await routeHandler(c.req.raw, { params } as never);
      };

      switch (method) {
        case 'GET':
          api.get(honoPath, handler);
          break;
        case 'POST':
          api.post(honoPath, handler);
          break;
        case 'PUT':
          api.put(honoPath, handler);
          break;
        case 'DELETE':
          api.delete(honoPath, handler);
          break;
        case 'PATCH':
          api.patch(honoPath, handler);
          break;
      }
    }
  }
}

registerRoutes();

if (import.meta.env.DEV && import.meta.hot) {
  import.meta.hot.accept(() => {
    registerRoutes();
  });
}

export { api, API_BASENAME };
