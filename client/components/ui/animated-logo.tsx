export function AnimatedLogo() {
  return (
    <div className="relative w-16 h-16 mx-auto perspective-1000">
      {/* Outer energy ring with color morphing */}
      <div className="absolute inset-0 rounded-full animate-spin" 
           style={{ 
             animationDuration: '3s',
             background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #06b6d4, #10b981, #3b82f6)',
             padding: '2px',
             filter: 'blur(1px)'
           }}>
        <div className="w-full h-full rounded-full bg-background"></div>
      </div>
      
      {/* Middle ring with reverse spin and glow */}
      <div className="absolute inset-1 rounded-full border-2 animate-spin shadow-lg" 
           style={{ 
             animationDuration: '2s', 
             animationDirection: 'reverse',
             borderImage: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899) 1',
             boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), inset 0 0 20px rgba(139, 92, 246, 0.4)'
           }}></div>
      
      {/* Inner pulsing core with scale animation */}
      <div className="absolute inset-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"
           style={{ 
             animationDuration: '1.5s',
             transform: 'scale(1)',
             animation: 'pulseScale 1.5s ease-in-out infinite'
           }}></div>
      
      {/* Main coding icon with glitch effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Glitch layers */}
          <svg
            className="absolute w-8 h-8 text-red-400 opacity-30"
            style={{ 
              transform: 'translate(-1px, -1px)',
              animation: 'glitchRed 0.1s infinite'
            }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          
          <svg
            className="absolute w-8 h-8 text-cyan-400 opacity-30"
            style={{ 
              transform: 'translate(1px, 1px)',
              animation: 'glitchCyan 0.15s infinite'
            }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          
          {/* Main icon */}
          <svg
            className="relative w-8 h-8 text-white z-10"
            style={{ 
              filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))',
              animation: 'iconFloat 2s ease-in-out infinite'
            }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
      </div>
      
      {/* Orbiting particles with trails */}
      <div className="absolute inset-0">
        {/* Particle 1 - Fast orbit */}
        <div className="absolute w-3 h-3 animate-spin" 
             style={{ 
               animationDuration: '1s',
               transformOrigin: '32px 32px'
             }}>
          <div className="w-3 h-3 bg-blue-400 rounded-full"
               style={{
                 boxShadow: '0 0 10px #3b82f6, 0 0 20px #3b82f6',
                 animation: 'particleGlow 0.5s ease-in-out infinite alternate'
               }}></div>
        </div>
        
        {/* Particle 2 - Medium orbit */}
        <div className="absolute w-2 h-2 animate-spin" 
             style={{ 
               animationDuration: '1.5s',
               animationDirection: 'reverse',
               transformOrigin: '30px 30px',
               top: '4px',
               left: '4px'
             }}>
          <div className="w-2 h-2 bg-purple-400 rounded-full"
               style={{
                 boxShadow: '0 0 8px #8b5cf6, 0 0 16px #8b5cf6',
                 animation: 'particleGlow 0.7s ease-in-out infinite alternate'
               }}></div>
        </div>
        
        {/* Particle 3 - Slow orbit */}
        <div className="absolute w-2.5 h-2.5 animate-spin" 
             style={{ 
               animationDuration: '2.5s',
               transformOrigin: '28px 28px',
               top: '2px',
               left: '2px'
             }}>
          <div className="w-2.5 h-2.5 bg-pink-400 rounded-full"
               style={{
                 boxShadow: '0 0 12px #ec4899, 0 0 24px #ec4899',
                 animation: 'particleGlow 0.3s ease-in-out infinite alternate'
               }}></div>
        </div>
        
        {/* Particle 4 - Erratic orbit */}
        <div className="absolute w-1.5 h-1.5 animate-spin" 
             style={{ 
               animationDuration: '0.8s',
               transformOrigin: '34px 34px',
               top: '-2px',
               left: '-2px'
             }}>
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
               style={{
                 boxShadow: '0 0 6px #06b6d4, 0 0 12px #06b6d4',
                 animation: 'particleGlow 0.4s ease-in-out infinite alternate'
               }}></div>
        </div>
      </div>
      
      {/* Energy sparks */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-0.5 h-3 bg-gradient-to-t from-blue-500 to-transparent"
             style={{ animation: 'sparkFade 2s ease-in-out infinite', animationDelay: '0s' }}></div>
        <div className="absolute bottom-0 right-1/4 w-0.5 h-2 bg-gradient-to-b from-purple-500 to-transparent"
             style={{ animation: 'sparkFade 2s ease-in-out infinite', animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/4 right-0 h-0.5 w-3 bg-gradient-to-r from-pink-500 to-transparent"
             style={{ animation: 'sparkFade 2s ease-in-out infinite', animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-0 h-0.5 w-2 bg-gradient-to-l from-cyan-500 to-transparent"
             style={{ animation: 'sparkFade 2s ease-in-out infinite', animationDelay: '1.5s' }}></div>
      </div>
      
      <style jsx>{`
        @keyframes pulseScale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        
        @keyframes glitchRed {
          0%, 90%, 100% { transform: translate(-1px, -1px); opacity: 0.3; }
          5%, 15% { transform: translate(-2px, -1px); opacity: 0.7; }
          10% { transform: translate(-1px, -2px); opacity: 0.5; }
        }
        
        @keyframes glitchCyan {
          0%, 85%, 100% { transform: translate(1px, 1px); opacity: 0.3; }
          10%, 20% { transform: translate(2px, 1px); opacity: 0.6; }
          15% { transform: translate(1px, 2px); opacity: 0.8; }
        }
        
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0px) rotateZ(0deg); }
          25% { transform: translateY(-2px) rotateZ(1deg); }
          50% { transform: translateY(-1px) rotateZ(0deg); }
          75% { transform: translateY(-3px) rotateZ(-1deg); }
        }
        
        @keyframes particleGlow {
          0% { opacity: 0.6; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes sparkFade {
          0%, 80%, 100% { opacity: 0; transform: scale(0.8); }
          10%, 70% { opacity: 1; transform: scale(1.2); }
          40% { opacity: 0.7; transform: scale(1); }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}
