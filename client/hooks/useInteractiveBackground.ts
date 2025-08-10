import { useEffect, useRef } from 'react';

export function useInteractiveBackground() {
  const trailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const trail = document.createElement('div');
    trail.className = 'mouse-trail';
    document.body.appendChild(trail);
    trailRef.current = trail;

    const handleMouseMove = (e: MouseEvent) => {
      if (trailRef.current) {
        trailRef.current.style.left = e.clientX + 'px';
        trailRef.current.style.top = e.clientY + 'px';
        trailRef.current.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      if (trailRef.current) {
        trailRef.current.style.opacity = '0';
      }
    };

    const handleClick = (e: MouseEvent) => {
      const ripple = document.createElement('div');
      ripple.className = 'touch-ripple';
      ripple.style.left = e.clientX + 'px';
      ripple.style.top = e.clientY + 'px';
      ripple.style.width = '20px';
      ripple.style.height = '20px';
      document.body.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 1000);
    };

    const handleTouch = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) {
        const ripple = document.createElement('div');
        ripple.className = 'touch-ripple';
        ripple.style.left = touch.clientX + 'px';
        ripple.style.top = touch.clientY + 'px';
        ripple.style.width = '30px';
        ripple.style.height = '30px';
        document.body.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 1000);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('click', handleClick);
    document.addEventListener('touchstart', handleTouch);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('touchstart', handleTouch);
      if (trailRef.current) {
        trailRef.current.remove();
      }
    };
  }, []);
}
