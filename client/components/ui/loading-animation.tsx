import { useState, useEffect } from "react";

interface LoadingAnimationProps {
  onComplete?: () => void;
}

export function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing Systems");
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState(0);

  const loadingSteps = [
    "Initializing Systems",
    "Connecting Neural Networks", 
    "Loading Quantum Matrix",
    "Rendering Digital Universe",
    "Synchronizing Reality",
    "Welcome to the Future"
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 12 + 3;

        // Update loading text and phase based on progress
        if (newProgress >= 95) {
          setLoadingText(loadingSteps[5]);
          setPhase(5);
        } else if (newProgress >= 80) {
          setLoadingText(loadingSteps[4]);
          setPhase(4);
        } else if (newProgress >= 60) {
          setLoadingText(loadingSteps[3]);
          setPhase(3);
        } else if (newProgress >= 40) {
          setLoadingText(loadingSteps[2]);
          setPhase(2);
        } else if (newProgress >= 20) {
          setLoadingText(loadingSteps[1]);
          setPhase(1);
        }

        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              onComplete?.();
            }, 1000);
          }, 800);
          return 100;
        }

        return newProgress;
      });
    }, 120);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 z-[9999] bg-background transition-opacity duration-1000 opacity-0 pointer-events-none" />
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        {/* Moving tech grid */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              animation: "gridFlow 8s linear infinite",
            }}
          />
        </div>

        {/* Cosmic particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `hsl(${180 + Math.random() * 180}, 70%, 60%)`,
              animation: `cosmicFloat ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              boxShadow: `0 0 ${5 + Math.random() * 15}px currentColor`,
            }}
          />
        ))}

        {/* Shooting stars */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-20 bg-gradient-to-t from-transparent to-cyan-400 opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-20px`,
              transform: 'rotate(45deg)',
              animation: `shootingStar ${2 + Math.random() * 3}s linear infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Digital rain */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 font-mono text-sm opacity-40"
            style={{
              left: `${i * 7}%`,
              animation: `digitalRain ${6 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            {['0', '1', 'ア', 'カ', 'サ', 'タ', '二', '三'][Math.floor(Math.random() * 8)]}
          </div>
        ))}

        {/* Energy waves */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 rounded-full border-2 border-blue-400/30"
            style={{
              animation: `energyWave 3s ease-out infinite`,
              animationDelay: '0s'
            }}
          />
          <div 
            className="absolute inset-0 rounded-full border-2 border-purple-400/30"
            style={{
              animation: `energyWave 3s ease-out infinite`,
              animationDelay: '1s'
            }}
          />
          <div 
            className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
            style={{
              animation: `energyWave 3s ease-out infinite`,
              animationDelay: '2s'
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center space-y-8 max-w-md">
          {/* Central Logo with Complex Animation */}
          <div className="relative w-32 h-32 mx-auto mb-12">
            {/* Outer rotating rings */}
            <div className="absolute inset-0 rounded-full animate-spin border-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-border"
                 style={{ animationDuration: '4s' }}>
              <div className="w-full h-full rounded-full bg-slate-900 m-1"></div>
            </div>
            
            <div className="absolute inset-2 rounded-full animate-spin border-2 border-transparent bg-gradient-to-l from-pink-500 via-blue-500 to-green-500 bg-clip-border"
                 style={{ animationDuration: '3s', animationDirection: 'reverse' }}>
              <div className="w-full h-full rounded-full bg-slate-900 m-0.5"></div>
            </div>

            {/* Pulsing core */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse flex items-center justify-center">
              <svg className="w-12 h-12 text-white animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
            </div>

            {/* Orbiting elements */}
            <div className="absolute inset-0">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full animate-spin"
                  style={{
                    animation: `orbit${i + 1} ${2 + i}s linear infinite`,
                    transformOrigin: '64px 64px',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Dynamic Loading Text */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-pulse">
              {loadingText}
            </h1>

            {/* Progress Bar with Rainbow Effect */}
            <div className="w-full max-w-sm mx-auto space-y-3">
              <div className="flex justify-between text-sm text-gray-300">
                <span>Loading...</span>
                <span className="text-cyan-400 font-mono">{Math.round(progress)}%</span>
              </div>
              
              <div className="relative w-full h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-600">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-cyan-500 rounded-full transition-all duration-300 ease-out relative"
                  style={{ width: `${progress}%` }}
                >
                  {/* Moving shimmer */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    style={{
                      animation: "progressShimmer 1.5s ease-in-out infinite",
                    }}
                  />
                  {/* Glowing edge */}
                  <div className="absolute right-0 top-0 h-full w-2 bg-white/60 blur-sm" />
                </div>
              </div>
            </div>

            {/* Phase Indicators */}
            <div className="flex justify-center space-x-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    i <= phase 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 scale-125 shadow-lg shadow-cyan-400/50' 
                      : 'bg-gray-600'
                  }`}
                  style={{
                    animation: i <= phase ? 'phaseGlow 2s ease-in-out infinite' : 'none'
                  }}
                />
              ))}
            </div>

            {/* Status Text */}
            <p className="text-gray-400 text-sm animate-pulse">
              Preparing your digital experience...
            </p>

            {/* Floating Tech Elements */}
            <div className="flex justify-center space-x-4 mt-8">
              {['⚡', '🚀', '💫', '🔮'].map((icon, i) => (
                <div
                  key={i}
                  className="text-2xl"
                  style={{
                    animation: `techFloat ${2 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gridFlow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }

        @keyframes cosmicFloat {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.7; }
          50% { transform: translateY(-30px) scale(1.2); opacity: 1; }
        }

        @keyframes shootingStar {
          0% { transform: translateY(-20px) translateX(0px) rotate(45deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh) translateX(-50px) rotate(45deg); opacity: 0; }
        }

        @keyframes digitalRain {
          0% { transform: translateY(-20px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        @keyframes energyWave {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }

        @keyframes progressShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes phaseGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(6, 182, 212, 0.5); }
          50% { box-shadow: 0 0 20px rgba(6, 182, 212, 1), 0 0 30px rgba(59, 130, 246, 0.5); }
        }

        @keyframes techFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }

        @keyframes orbit1 {
          0% { transform: rotate(0deg) translateX(50px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
        }

        @keyframes orbit2 {
          0% { transform: rotate(0deg) translateX(45px) rotate(0deg); }
          100% { transform: rotate(-360deg) translateX(45px) rotate(360deg); }
        }

        @keyframes orbit3 {
          0% { transform: rotate(0deg) translateX(55px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(55px) rotate(-360deg); }
        }
      `}</style>
    </div>
  );
}
