import React, { useRef, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const Hero = () => {
  const images = [
    {
      src: '/entheo_textlogo_black.png',
      alt: 'Modern architecture building',
      link: 'https://blinksites.mx',
    },
    {
      src: '/products/product (15).png',
      alt: 'Urban cityscape at sunset',
      link: 'https://blinksites.mx',
    },
    {
      src: '/products/product (20).png',
      alt: 'Abstract geometric pattern',
      link: 'https://blinksites.mx',
    },
    {
      src: '/products/product (4).png',
      alt: 'Mountain landscape',
      link: 'https://blinksites.mx',
    },
    {
      src: '/products/product (5).png',
      alt: 'Minimalist design elements',
      link: 'https://blinksites.mx',
    },
    {
      src: '/products/product (11).png',
      alt: 'Ocean waves and beach',
      link: 'https://blinksites.mx',
    },
    {
      src: '/products/product (7).png',
      alt: 'Forest trees and sunlight',
      link: 'https://blinksites.mx',
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

  // Position styles for each image
  const getPositionStyles = (index) => {
    const positions = {
      1: {
        top: '-30vh',
        left: '-1vw',
        height: '30vh',
        width: '35vw'
      },
      2: {
        top: '1vh',
        left: '-30vw',
        height: '45vh',
        width: '20vw'
      },
      3: {
        left: '30vw',
        height: '25vh',
        width: '25vw'
      },
      4: {
        top: '27.5vh',
        left: '-1vw',
        height: '25vh',
        width: '20vw'
      },
      5: {
        top: '20vh',
        left: '-26.5vw',
        height: '25vh',
        width: '30vw'
      },
      6: {
        top: '20vh',
        left: '25vw',
        height: '15vh',
        width: '15vw'
      }
    };
    return positions[index] || {};
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
          {images.map(({ src, alt, link }, index) => {
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
                  <a href={link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', height: '100%', width: '100%' }}>
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