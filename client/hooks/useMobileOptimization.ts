import { useEffect } from "react";

export function useMobileOptimization() {
  useEffect(() => {
    // Detect mobile device and apply optimizations
    const isMobile = window.innerWidth <= 768;
    const isLowEnd =
      navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;

    if (isMobile || isLowEnd) {
      // Reduce animation complexity on mobile/low-end devices
      const style = document.createElement("style");
      style.textContent = `
        .animated-bg {
          animation-duration: 40s !important;
        }
        .floating-orb {
          animation-duration: 25s !important;
        }
        .quantum-particle {
          animation-duration: 30s !important;
        }
        .network-node {
          animation-duration: 15s !important;
        }
        .matrix-char {
          animation-duration: 15s !important;
        }
        .star {
          animation-duration: 8s !important;
        }
      `;
      document.head.appendChild(style);

      // Enable GPU acceleration for better performance
      document.body.style.willChange = "transform";
      document.body.style.transform = "translateZ(0)";

      return () => {
        document.head.removeChild(style);
        document.body.style.willChange = "";
        document.body.style.transform = "";
      };
    }
  }, []);
}
