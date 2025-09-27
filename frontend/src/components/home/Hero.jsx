import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const images = [
    {
      src: '/entheo_textlogo_black.png',
      alt: 'Modern architecture building',
    },
    {
      src: '/products/product (15).png',
      alt: 'Urban cityscape at sunset',
    },
    {
      src: '/products/product (20).png',
      alt: 'Abstract geometric pattern',
    },
    {
      src: '/products/product (4).png',
      alt: 'Mountain landscape',
    },
    {
      src: '/products/product (5).png',
      alt: 'Minimalist design elements',
    },
    {
      src: '/products/product (11).png',
      alt: 'Ocean waves and beach',
    },
    {
      src: '/products/product (7).png',
      alt: 'Forest trees and sunlight',
    },
  ];

  // ZoomParallax component logic
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  // Position styles for desktop layout
  const getDesktopPositionStyles = (index) => {
    const positions = {
      1: {
        top: '-30vh',
        left: '-1vw',
        height: '25vh',
        width: '30vw'
      },
      //IZQUIERDA ARRIBA
      2: {
        top: '-15vh',
        left: '-30vw',
        height: '25vh',
        width: '30vw'
      },
      //DERECHA ARRIBA
      3: {
        top: '-15vh',
        left: '30vw',
        height: '25vh',
        width: '30vw'
      },
      //ABAJO AL CENTRO
      4: {
        top: '30vh',
        left: '-1vw',
        height: '25vh',
        width: '30vw'
      },
      //IZQUIERDA ABAJO
      5: {
        top: '15vh',
        left: '-26.5vw',
        height: '25vh',
        width: '30vw'
      },
      //DERECHA ABAJO
      6: {
        top: '15vh',
        left: '25vw',
        height: '25vh',
        width: '30vw'
      }
    };
    return positions[index] || {};
  };

  // Position styles for mobile layout
  const getMobilePositionStyles = (index) => {
    const positions = {
      //ARRIBA AL CENTRO
      1: {
        top: '-30vh',
        left: '-1vw',
        height: '20vh',
        width: '25vw'
      },
      //IZQUIERDA ARRIBA
      2: {
        top: '-15vh',
        left: '-30vw',
        height: '20vh',
        width: '25vw'
      },
      //DERECHA ARRIBA
      3: {
        top: '-15vh',
        left: '30vw',
        height: '20vh',
        width: '25vw'
      },
      //ABAJO AL CENTRO
      4: {
        top: '30vh',
        left: '-1vw',
        height: '20vh',
        width: '25vw'
      },
      //IZQUIERDA ABAJO
      5: {
        top: '15vh',
        left: '-26.5vw',
        height: '20vh',
        width: '25vw'
      },
      //DERECHA ABAJO
      6: {
        top: '15vh',
        left: '25vw',
        height: '20vh',
        width: '25vw'
      }
    };
    return positions[index] || {};
  };

  // Get position styles based on device type
  const getPositionStyles = (index) => {
    return isMobile ? getMobilePositionStyles(index) : getDesktopPositionStyles(index);
  };

  return (
    <main style={{ minHeight: '100vh', width: '100%' }}>

      {/* Zoom Parallax Section */}
      <div ref={container} style={{ position: 'relative', height: '300vh' }}>
        <div style={{ 
          position: 'sticky', 
          top: 0, 
          height: '100vh', 
          overflow: 'hidden' 
        }}>
          {images.map(({ src, alt }, index) => {
            const scale = scales[index % scales.length];
            const customPosition = getPositionStyles(index);
            
            return (
              <motion.div
                key={index}
                style={{ 
                  scale,
                  position: 'absolute',
                  top: 0,
                  display: 'flex',
                  height: '100%',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: index + 1,
                  pointerEvents: 'none',
                }}
              >
                <div style={{
                  position: 'relative',
                  height: customPosition.height || '25vh',
                  width: customPosition.width || '25vw',
                  top: customPosition.top || 'auto',
                  left: customPosition.left || 'auto',
                  pointerEvents: 'auto',
                }}>
                  <a style={{ display: 'block', height: '100%', width: '100%' }}>
                    <img
                      src={src}
                      alt={alt || `Parallax image ${index + 1}`}
                      style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Hero;