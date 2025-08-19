export function ModernLogo() {
  return (
    <div className="relative w-16 h-16 mx-auto">
      {/* Outer rotating hexagon */}
      <div 
        className="absolute inset-0 border-2 border-primary/40"
        style={{
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
          animation: 'logoRotate 8s linear infinite'
        }}
      />
      
      {/* Inner pulsing circle */}
      <div 
        className="absolute inset-4 rounded-full bg-gradient-to-r from-primary/60 to-cyan-400/60 border border-primary/30"
        style={{
          animation: 'logoPulse 3s ease-in-out infinite'
        }}
      />
      
      {/* Center dot with glow */}
      <div 
        className="absolute inset-7 rounded-full bg-white"
        style={{
          animation: 'logoGlow 2s ease-in-out infinite alternate',
          boxShadow: '0 0 15px rgba(59, 130, 246, 0.8)'
        }}
      />
      
      {/* Floating corners */}
      <div 
        className="absolute top-0 left-0 w-2 h-2 bg-primary rounded-sm"
        style={{
          animation: 'logoFloat1 4s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute top-0 right-0 w-2 h-2 bg-cyan-400 rounded-sm"
        style={{
          animation: 'logoFloat2 4s ease-in-out infinite 1s'
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-2 h-2 bg-purple-400 rounded-sm"
        style={{
          animation: 'logoFloat3 4s ease-in-out infinite 2s'
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-2 h-2 bg-pink-400 rounded-sm"
        style={{
          animation: 'logoFloat4 4s ease-in-out infinite 3s'
        }}
      />
      
      {/* Orbital lines */}
      <div 
        className="absolute inset-2 border border-primary/20 rounded-full"
        style={{
          animation: 'logoOrbit 6s linear infinite reverse'
        }}
      />
      
      <style jsx>{`
        @keyframes logoRotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.05); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes logoPulse {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.7; 
          }
          50% { 
            transform: scale(1.1); 
            opacity: 1; 
          }
        }
        
        @keyframes logoGlow {
          0% { 
            opacity: 0.8; 
            transform: scale(0.9);
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.8);
          }
          100% { 
            opacity: 1; 
            transform: scale(1.1);
            box-shadow: 0 0 25px rgba(59, 130, 246, 1), 0 0 35px rgba(6, 182, 212, 0.5);
          }
        }
        
        @keyframes logoFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          25% { transform: translate(3px, -3px) scale(1.2); opacity: 1; }
          50% { transform: translate(-2px, -5px) scale(0.8); opacity: 0.8; }
          75% { transform: translate(4px, -2px) scale(1.1); opacity: 0.9; }
        }
        
        @keyframes logoFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          25% { transform: translate(-3px, -3px) scale(1.2); opacity: 1; }
          50% { transform: translate(2px, -5px) scale(0.8); opacity: 0.8; }
          75% { transform: translate(-4px, -2px) scale(1.1); opacity: 0.9; }
        }
        
        @keyframes logoFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          25% { transform: translate(3px, 3px) scale(1.2); opacity: 1; }
          50% { transform: translate(-2px, 5px) scale(0.8); opacity: 0.8; }
          75% { transform: translate(4px, 2px) scale(1.1); opacity: 0.9; }
        }
        
        @keyframes logoFloat4 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          25% { transform: translate(-3px, 3px) scale(1.2); opacity: 1; }
          50% { transform: translate(2px, 5px) scale(0.8); opacity: 0.8; }
          75% { transform: translate(-4px, 2px) scale(1.1); opacity: 0.9; }
        }
        
        @keyframes logoOrbit {
          0% { transform: rotate(0deg); opacity: 0.3; }
          50% { opacity: 0.7; }
          100% { transform: rotate(360deg); opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
