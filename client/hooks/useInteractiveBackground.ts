import { useEffect, useRef } from "react";

export function useInteractiveBackground() {
  const trailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Cursor animation removed as requested

    const handleClick = (e: MouseEvent) => {
      const ripple = document.createElement("div");
      ripple.className = "touch-ripple";
      ripple.style.left = e.clientX + "px";
      ripple.style.top = e.clientY + "px";
      ripple.style.width = "20px";
      ripple.style.height = "20px";
      document.body.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 1000);
    };

    const handleTouch = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) {
        const ripple = document.createElement("div");
        ripple.className = "touch-ripple";
        ripple.style.left = touch.clientX + "px";
        ripple.style.top = touch.clientY + "px";
        ripple.style.width = "30px";
        ripple.style.height = "30px";
        document.body.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 1000);
      }
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("touchstart", handleTouch);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("touchstart", handleTouch);
    };
  }, []);
}
