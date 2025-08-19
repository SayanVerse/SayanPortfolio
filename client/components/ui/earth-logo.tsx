export function EarthLogo() {
  // Earth map coordinates (simplified) - representing continents with white dots
  const earthDots = [
    // North America
    { x: 25, y: 30, delay: 0, continent: 'na' },
    { x: 30, y: 35, delay: 0.1, continent: 'na' },
    { x: 35, y: 25, delay: 0.2, continent: 'na' },
    { x: 28, y: 40, delay: 0.3, continent: 'na' },
    
    // South America
    { x: 40, y: 55, delay: 0.4, continent: 'sa' },
    { x: 42, y: 60, delay: 0.5, continent: 'sa' },
    { x: 38, y: 65, delay: 0.6, continent: 'sa' },
    
    // Europe
    { x: 50, y: 25, delay: 0.7, continent: 'eu' },
    { x: 52, y: 30, delay: 0.8, continent: 'eu' },
    { x: 55, y: 28, delay: 0.9, continent: 'eu' },
    
    // Africa
    { x: 52, y: 45, delay: 1.0, continent: 'af' },
    { x: 54, y: 50, delay: 1.1, continent: 'af' },
    { x: 50, y: 55, delay: 1.2, continent: 'af' },
    { x: 48, y: 60, delay: 1.3, continent: 'af' },
    
    // Asia
    { x: 65, y: 25, delay: 1.4, continent: 'as' },
    { x: 70, y: 30, delay: 1.5, continent: 'as' },
    { x: 75, y: 35, delay: 1.6, continent: 'as' },
    { x: 68, y: 40, delay: 1.7, continent: 'as' },
    { x: 72, y: 45, delay: 1.8, continent: 'as' },
    
    // Australia/Oceania
    { x: 78, y: 65, delay: 1.9, continent: 'oc' },
    { x: 82, y: 68, delay: 2.0, continent: 'oc' },
    
    // Additional scattered dots for realism
    { x: 20, y: 20, delay: 2.1, continent: 'misc' },
    { x: 85, y: 15, delay: 2.2, continent: 'misc' },
    { x: 15, y: 70, delay: 2.3, continent: 'misc' },
    { x: 90, y: 80, delay: 2.4, continent: 'misc' },
  ];

  return (
    <div className="relative w-16 h-16 mx-auto">
      {/* Outer glowing ring representing Earth's atmosphere */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(14, 165, 233, 0.05) 50%, transparent 70%)',
          animation: 'earthGlow 4s ease-in-out infinite'
        }}
      />
      
      {/* Earth sphere background */}
      <div 
        className="absolute inset-1 rounded-full bg-gradient-to-br from-blue-900/20 via-blue-800/10 to-green-900/10 border border-blue-400/20"
        style={{
          animation: 'earthRotate 20s linear infinite',
          boxShadow: 'inset 0 0 20px rgba(59, 130, 246, 0.2), 0 0 30px rgba(59, 130, 246, 0.1)'
        }}
      >
        {/* Continental dots - representing landmasses */}
        {earthDots.map((dot, index) => (
          <div
            key={index}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              transform: 'translate(-50%, -50%)',
              animation: `earthDotPulse 3s ease-in-out infinite, earthDotRotate 20s linear infinite`,
              animationDelay: `${dot.delay}s, 0s`,
              boxShadow: '0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(59, 130, 246, 0.4)',
              opacity: 0.8
            }}
          />
        ))}
        
        {/* Orbital ring */}
        <div 
          className="absolute inset-0 rounded-full border border-cyan-400/30"
          style={{
            animation: 'earthOrbit 15s linear infinite reverse',
            transform: 'rotateX(75deg)'
          }}
        />
        
        {/* Satellite dots */}
        <div 
          className="absolute inset-0"
          style={{ animation: 'satelliteOrbit 8s linear infinite' }}
        >
          <div 
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              top: '10%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 6px rgba(6, 182, 212, 0.8)'
            }}
          />
        </div>
        
        <div 
          className="absolute inset-0"
          style={{ animation: 'satelliteOrbit 12s linear infinite reverse' }}
        >
          <div 
            className="absolute w-0.5 h-0.5 bg-purple-400 rounded-full"
            style={{
              top: '20%',
              left: '80%',
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 4px rgba(147, 51, 234, 0.8)'
            }}
          />
        </div>
      </div>
      
      {/* Center energy core */}
      <div 
        className="absolute inset-6 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30"
        style={{
          animation: 'coreGlow 2s ease-in-out infinite alternate',
          boxShadow: 'inset 0 0 10px rgba(59, 130, 246, 0.5)'
        }}
      />
      
      <style jsx>{`
        @keyframes earthGlow {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.7; 
          }
          50% { 
            transform: scale(1.1); 
            opacity: 1; 
          }
        }
        
        @keyframes earthRotate {
          0% { transform: rotateY(0deg) rotateX(10deg); }
          100% { transform: rotateY(360deg) rotateX(10deg); }
        }
        
        @keyframes earthDotPulse {
          0%, 100% { 
            opacity: 0.6; 
            transform: translate(-50%, -50%) scale(1); 
          }
          50% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1.2); 
          }
        }
        
        @keyframes earthDotRotate {
          0% { transform: translate(-50%, -50%) rotateY(0deg); }
          100% { transform: translate(-50%, -50%) rotateY(360deg); }
        }
        
        @keyframes earthOrbit {
          0% { transform: rotateX(75deg) rotateZ(0deg); }
          100% { transform: rotateX(75deg) rotateZ(360deg); }
        }
        
        @keyframes satelliteOrbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes coreGlow {
          0% { 
            opacity: 0.3; 
            transform: scale(0.9); 
          }
          100% { 
            opacity: 0.7; 
            transform: scale(1.1); 
          }
        }
      `}</style>
    </div>
  );
}
