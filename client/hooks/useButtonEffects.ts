import { useEffect } from "react";

export function useButtonEffects() {
  useEffect(() => {
    const handleButtonClick = (event: MouseEvent) => {
      const button = event.currentTarget as HTMLElement;

      // Add ripple effect
      if (button.classList.contains("glow-button")) {
        // Remove existing animation class
        button.classList.remove("animate-click");

        // Force reflow to ensure class removal takes effect
        button.offsetHeight;

        // Add animation class
        button.classList.add("animate-click");

        // Remove animation class after animation completes
        setTimeout(() => {
          button.classList.remove("animate-click");
        }, 600);
      }
    };

    // Add click listeners to all glow buttons
    const buttons = document.querySelectorAll(".glow-button");
    buttons.forEach((button) => {
      button.addEventListener("click", handleButtonClick);
    });

    // Cleanup
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", handleButtonClick);
      });
    };
  }, []);
}
