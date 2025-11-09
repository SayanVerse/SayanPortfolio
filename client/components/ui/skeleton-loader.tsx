import React from "react";

interface SkeletonLoaderProps {
  onComplete?: () => void;
}

export function SkeletonLoader({ onComplete }: SkeletonLoaderProps) {
  // Auto-complete loading after a short delay
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, 1200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-background animate-fade-out">
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        {/* Logo Skeleton */}
        <div className="mb-12 space-y-4">
          <div className="w-20 h-20 rounded-full bg-muted animate-pulse"></div>
        </div>

        {/* Hero Text Skeleton */}
        <div className="max-w-2xl w-full space-y-4 mb-8">
          <div className="h-12 bg-muted rounded-lg animate-pulse"></div>
          <div className="h-12 bg-muted rounded-lg animate-pulse w-3/4 mx-auto"></div>
          <div className="h-4 bg-muted rounded-lg animate-pulse w-full"></div>
          <div className="h-4 bg-muted rounded-lg animate-pulse w-full"></div>
          <div className="h-4 bg-muted rounded-lg animate-pulse w-2/3 mx-auto"></div>
        </div>

        {/* Buttons Skeleton */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="h-12 w-40 bg-muted rounded-lg animate-pulse"></div>
          <div className="h-12 w-40 bg-muted rounded-lg animate-pulse"></div>
        </div>

        {/* Social Links Skeleton */}
        <div className="flex space-x-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full bg-muted animate-pulse"
            ></div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            pointer-events: none;
          }
        }

        :global(.animate-fade-out) {
          animation: fadeOut 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
