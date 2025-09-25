import type { FallbackProps } from "react-error-boundary";

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="text-center py-20">
      <h1 className="text-2xl font-serif text-red-600 font-bold">ERROR</h1>
      <p className="font-serif mb-4">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-violet-300 text-white rounded-lg"
      >
        Tentar novamente
      </button>
    </div>
  );
}