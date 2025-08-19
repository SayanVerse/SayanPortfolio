import { useEffect, useRef } from "react";

export function AdvancedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Network nodes removed as requested (transparent blue balls/squares)

    // Create digital matrix effect
    const createMatrixEffect = () => {
      const matrixContainer = container.querySelector(".digital-matrix");
      if (!matrixContainer) return;

      const chars =
        "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
      const columns = Math.floor(window.innerWidth / 20);
      // Reduce matrix density on mobile
      const sparseFactor = window.innerWidth < 768 ? 0.85 : 0.7;

      for (let i = 0; i < columns; i++) {
        if (Math.random() > sparseFactor) {
          // Sparse matrix
          const char = document.createElement("div");
          char.className = "matrix-char";
          char.textContent = chars[Math.floor(Math.random() * chars.length)];
          char.style.left = i * 20 + "px";
          char.style.animationDelay = Math.random() * 8 + "s";
          char.style.animationDuration = 8 + Math.random() * 4 + "s";

          // Tech color variations
          const colors = [
            "59, 130, 246", // Blue
            "14, 165, 233", // Sky
            "6, 182, 212", // Cyan
            "16, 185, 129", // Emerald
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
      const constellationContainer =
        container.querySelector(".constellation-bg");
      if (!constellationContainer) return;

      // Reduce stars on mobile for better performance
      const starCount = window.innerWidth < 768 ? 25 : 50;

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.className = "star";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDelay = Math.random() * 3 + "s";
        star.style.animationDuration = 2 + Math.random() * 2 + "s";

        // Size variation
        const size = 1 + Math.random() * 2;
        star.style.width = size + "px";
        star.style.height = size + "px";

        constellationContainer.appendChild(star);
      }
    };

    // Initialize effects (removed network nodes)
    createMatrixEffect();
    createConstellation();

    const matrixInterval = setInterval(() => {
      const matrixContainer = container.querySelector(".digital-matrix");
      if (matrixContainer) {
        matrixContainer.innerHTML = "";
        createMatrixEffect();
      }
    }, 12000);

    return () => {
      clearInterval(matrixInterval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Tech Grid Background */}
      <div className="tech-grid"></div>

      {/* Digital Matrix Layer - Keep as requested */}
      <div className="digital-matrix"></div>

      {/* Constellation Layer - Keep as requested */}
      <div className="constellation-bg"></div>

      {/* Floating Animated Tiles */}
      <div className="floating-tiles">
        <div className="tile tile-1"></div>
        <div className="tile tile-2"></div>
        <div className="tile tile-3"></div>
        <div className="tile tile-4"></div>
        <div className="tile tile-5"></div>
        <div className="tile tile-6"></div>
        <div className="tile tile-7"></div>
        <div className="tile tile-8"></div>
      </div>
    </div>
  );
}
