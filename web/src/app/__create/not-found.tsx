import { useLocation, useNavigate } from 'react-router';

export default function CreateDefaultNotFoundPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const missingPath = location.pathname.replace(/^\//, '') || 'unknown-page';

  return (
    <div className="min-h-screen w-full bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/10 p-8 text-center shadow-2xl backdrop-blur">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">
          404
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Page not found</h1>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          The page <span className="font-semibold text-white">/{missingPath}</span> is not available in this deployment.
        </p>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="mt-7 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
        >
          Go back home
        </button>
      </div>
    </div>
  );
}
