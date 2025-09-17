import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;
    let ticking = false;

    const smoothScroll = () => {
      currentScrollY += (targetScrollY - currentScrollY) * 0.1;
      
      window.scrollTo(0, currentScrollY);

      if (Math.abs(targetScrollY - currentScrollY) > 0.5) {
        requestAnimationFrame(smoothScroll);
      } else {
        ticking = false;
      }
    };

    const handleWheel = (e) => {
      targetScrollY += e.deltaY;
      // Clamp the target scroll to the document boundaries
      targetScrollY = Math.max(0, Math.min(targetScrollY, document.body.scrollHeight - window.innerHeight));
      
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(smoothScroll);
      }
    };
    
    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
};

export default useSmoothScroll;
