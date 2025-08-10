import { useEffect, useRef } from "react";

export function AdvancedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create geometric network
    const createNetworkNodes = () => {
      const networkContainer = container.querySelector('.geometric-network');
      if (!networkContainer) return;

      // Clear existing nodes
      networkContainer.innerHTML = '';

      const nodeCount = 15;
      const nodes: { x: number; y: number; element: HTMLElement }[] = [];

      // Create nodes
      for (let i = 0; i < nodeCount; i++) {
        const node = document.createElement('div');
        node.className = 'network-node';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        node.style.left = x + '%';
        node.style.top = y + '%';
        node.style.animationDelay = Math.random() * 8 + 's';
        
        // Tech-inspired colors
        const colors = [
          'rgba(59, 130, 246, 0.9)',   // Blue
          'rgba(14, 165, 233, 0.9)',   // Sky blue
          'rgba(6, 182, 212, 0.9)',    // Cyan
          'rgba(16, 185, 129, 0.9)',   // Emerald
          'rgba(139, 92, 246, 0.9)'    // Violet
        ];
        node.style.background = colors[Math.floor(Math.random() * colors.length)];
        node.style.boxShadow = `0 0 20px ${colors[Math.floor(Math.random() * colors.length)]}`;
        
        networkContainer.appendChild(node);
        nodes.push({ x, y, element: node });
      }

      // Create connecting lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = Math.sqrt(
            Math.pow(nodes[i].x - nodes[j].x, 2) + 
            Math.pow(nodes[i].y - nodes[j].y, 2)
          );
          
          // Only connect nearby nodes
          if (distance < 25) {
            const line = document.createElement('div');
            line.className = 'network-line';
            
            const angle = Math.atan2(nodes[j].y - nodes[i].y, nodes[j].x - nodes[i].x);
            const length = distance;
            
            line.style.left = nodes[i].x + '%';
            line.style.top = nodes[i].y + '%';
            line.style.width = length + '%';
            line.style.transform = `rotate(${angle}rad)`;
            line.style.animationDelay = Math.random() * 4 + 's';
            
            networkContainer.appendChild(line);
          }
        }
      }
    };

    // Create digital matrix effect
    const createMatrixEffect = () => {
      const matrixContainer = container.querySelector('.digital-matrix');
      if (!matrixContainer) return;

      const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const columns = Math.floor(window.innerWidth / 20);
      
      for (let i = 0; i < columns; i++) {
        if (Math.random() > 0.7) { // Sparse matrix
          const char = document.createElement('div');
          char.className = 'matrix-char';
          char.textContent = chars[Math.floor(Math.random() * chars.length)];
          char.style.left = (i * 20) + 'px';
          char.style.animationDelay = Math.random() * 8 + 's';
          char.style.animationDuration = (8 + Math.random() * 4) + 's';
          
          // Tech color variations
          const colors = [
            '59, 130, 246',    // Blue
            '14, 165, 233',    // Sky
            '6, 182, 212',     // Cyan
            '16, 185, 129'     // Emerald
          ];
          const color = colors[Math.floor(Math.random() * colors.length)];
          const opacity = 0.2 + Math.random() * 0.4;
          char.style.color = `rgba(${color}, ${opacity})`;
          
          matrixContainer.appendChild(char);
        }
      }
    };

    // Create constellation effect
    const createConstellation = () => {
      const constellationContainer = container.querySelector('.constellation-bg');
      if (!constellationContainer) return;

      const starCount = 50;
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (2 + Math.random() * 2) + 's';
        
        // Size variation
        const size = 1 + Math.random() * 2;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        constellationContainer.appendChild(star);
      }
    };

    // Initialize all effects
    createNetworkNodes();
    createMatrixEffect();
    createConstellation();

    // Refresh effects periodically
    const refreshInterval = setInterval(() => {
      createNetworkNodes();
    }, 15000);

    const matrixInterval = setInterval(() => {
      const matrixContainer = container.querySelector('.digital-matrix');
      if (matrixContainer) {
        matrixContainer.innerHTML = '';
        createMatrixEffect();
      }
    }, 12000);

    return () => {
      clearInterval(refreshInterval);
      clearInterval(matrixInterval);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Tech Grid Background */}
      <div className="tech-grid"></div>

      {/* Geometric Network Layer */}
      <div className="geometric-network"></div>

      {/* Morphing Blobs Layer */}
      <div className="morphing-blob blob-1"></div>
      <div className="morphing-blob blob-2"></div>
      <div className="morphing-blob blob-3"></div>

      {/* Digital Matrix Layer */}
      <div className="digital-matrix"></div>

      {/* Constellation Layer */}
      <div className="constellation-bg"></div>
    </div>
  );
}
