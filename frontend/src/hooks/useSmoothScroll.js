import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

let lenisInstance = null;

export const getLenisInstance = () => lenisInstance;

const useSmoothScroll = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;
    lenisInstance = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return lenisRef;
};

export default useSmoothScroll;

