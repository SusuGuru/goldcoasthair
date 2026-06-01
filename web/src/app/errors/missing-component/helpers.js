export const SomethingElse = () => 'not what you wanted';

// Production-safe fallback for exported demo route.
// The generated project references DoesNotExist to demonstrate a missing-component error,
// but Netlify treats that demo route as part of the production bundle.
export const DoesNotExist = () => 'Component placeholder';
