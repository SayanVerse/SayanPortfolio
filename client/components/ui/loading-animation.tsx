import { useState, useEffect } from "react";
import { Code2 } from "lucide-react";

interface LoadingAnimationProps {
  onComplete?: () => void;
}

export function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing");
  const [isVisible, setIsVisible] = useState(true);

  const loadingSteps = [
    "Initializing",
    "Loading Matrix",
    "Connecting Networks",
    "Rendering Universe",
    "Finalizing",
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15 + 5;

        // Update loading text based on progress
        if (newProgress >= 80) {
          setLoadingText(loadingSteps[4]);
        } else if (newProgress >= 60) {
          setLoadingText(loadingSteps[3]);
        } else if (newProgress >= 40) {
          setLoadingText(loadingSteps[2]);
        } else if (newProgress >= 20) {
          setLoadingText(loadingSteps[1]);
        }

        if (newProgress >= 100) {
          clearInterval(progressInterval);
          // Start fade out animation
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              onComplete?.();
            }, 800); // Wait for fade out animation
          }, 500); // Brief pause at 100%
          return 100;
        }

        return newProgress;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 z-[9999] bg-background transition-opacity duration-800 opacity-0 pointer-events-none" />
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
              animation: "gridMove 20s linear infinite",
            }}
          />
        </div>

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Matrix-style falling code */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/40 font-mono text-sm"
            style={{
              left: `${10 + i * 12}%`,
              animation: `matrixFall ${8 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {
              ["01", "アイ", "カキ", "サシ", "タチ"][
                Math.floor(Math.random() * 5)
              ]
            }
          </div>
        ))}
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center space-y-8">
        {/* Logo/Icon */}
        <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-blue-500 p-1 animate-pulse">
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
            <Code2
              className="w-12 h-12 text-primary animate-spin"
              style={{ animationDuration: "3s" }}
            />
          </div>
        </div>

        {/* Loading text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            <span className="gradient-text">{loadingText}</span>
          </h2>

          {/* Progress bar */}
          <div className="w-80 max-w-sm mx-auto">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Loading...</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                {/* Animated shimmer effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  style={{
                    animation: "shimmer 2s ease-in-out infinite",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-muted-foreground text-sm">
            Preparing your digital experience...
          </p>
        </div>

        {/* Floating dots */}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: "1.4s",
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
