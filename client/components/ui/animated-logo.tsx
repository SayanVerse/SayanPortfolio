export function AnimatedLogo() {
  return (
    <div className="relative w-16 h-16 mx-auto">
      {/* Outer rotating ring */}
      <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin" 
           style={{ animationDuration: '8s' }}></div>
      
      {/* Inner rotating ring (opposite direction) */}
      <div className="absolute inset-1 rounded-full border border-primary/50 animate-spin" 
           style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
      
      {/* Pulsing center circle */}
      <div className="absolute inset-3 rounded-full bg-primary/20 animate-pulse"></div>
      
      {/* Main logo icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-8 h-8 text-primary animate-pulse"
          style={{ animationDuration: '2s' }}
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
      
      {/* Floating particles */}
      <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary rounded-full animate-bounce"
           style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
      <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"
           style={{ animationDelay: '1s', animationDuration: '2.5s' }}></div>
      <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-cyan-400 rounded-full animate-bounce"
           style={{ animationDelay: '2s', animationDuration: '2s' }}></div>
      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-violet-400 rounded-full animate-bounce"
           style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
    </div>
  );
}
