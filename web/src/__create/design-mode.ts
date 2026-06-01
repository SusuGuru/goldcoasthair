/**
 * Production-safe design mode shim.
 *
 * The original generated file imported a local Create-only helper from
 * `../../../../shared/design-mode`. That helper exists in the generator
 * workspace but is not included when this project is exported/deployed, so
 * Netlify/Rollup fails with UNRESOLVED_IMPORT.
 *
 * This shim keeps the side-effect import in `src/app/root.tsx` valid while
 * doing nothing in production builds.
 */

export type GetStyleInfo = (resolved: { element: Element }) => {
  className: string;
  styles: Record<string, string> | null;
};

function reselect(): void {
  // No-op outside the original design editor runtime.
}

if (import.meta.hot) {
  import.meta.hot.on('vite:afterUpdate', () => {
    reselect();
  });
}
