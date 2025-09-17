import { useEffect, useRef, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(Observer, SplitText);

const defaultSections = [
  {
    text: "Whispers of Radiance",
    img: "/products/product (21).png"
  },
  {
    text: "Ethereal Moments",
    img: "/products/product (22).png"
  },
  {
    text: "Silent Beauty",
    img: "/products/product (23).png"
  }
];

const AnimatedSections = ({
  sections = defaultSections,
  className = "",
}) => {
  const containerRef = useRef(null);
  const observerRef = useRef(null);
  const timelineRef = useRef(null);
  const splitHeadingsRef = useRef([]);
  const currentIndexRef = useRef(-1);
  const animatingRef = useRef(false);
  const sectionsRefs = useRef([]);
  const imagesRefs = useRef([]);
  const outerRefs = useRef([]);
  const innerRefs = useRef([]);
  const headingRefs = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  let loaded = 0;
  sections.forEach((section) => {
    const img = new Image();
    img.src = section.img;
    img.onload = () => {
      loaded++;
      if (loaded === sections.length) {
        setImagesLoaded(true);
      }
    };
    img.onerror = () => {
      loaded++;
      if (loaded === sections.length) {
        setImagesLoaded(true);
      }
    };
  });
}, [sections]);

  const gotoSection = useCallback((index, direction) => {
    if (!containerRef.current || animatingRef.current) return;

    const sectionsElements = sectionsRefs.current;
    const images = imagesRefs.current;
    const outerWrappers = outerRefs.current;
    const innerWrappers = innerRefs.current;

    const wrap = gsap.utils.wrap(0, sectionsElements.length);
    index = wrap(index);
    animatingRef.current = true;

    const fromTop = direction === -1;
    const dFactor = fromTop ? -1 : 1;

    const tl = gsap.timeline({
      defaults: { duration: 1.25, ease: 'power1.inOut' },
      onComplete: () => {
        animatingRef.current = false;
      }
    });

    timelineRef.current = tl;

    if (currentIndexRef.current >= 0) {
      gsap.set(sectionsElements[currentIndexRef.current], { zIndex: 0 });
      tl.to(images[currentIndexRef.current], { xPercent: -15 * dFactor })
        .set(sectionsElements[currentIndexRef.current], { autoAlpha: 0 });
    }

    gsap.set(sectionsElements[index], { autoAlpha: 1, zIndex: 1 });

    tl.fromTo(
      [outerWrappers[index], innerWrappers[index]],
      {
        xPercent: (i) => (i ? -100 * dFactor : 100 * dFactor)
      },
      { xPercent: 0 },
      0
    )
      .fromTo(
        images[index],
        { xPercent: 15 * dFactor },
        { xPercent: 0 },
        0
      );

    if (splitHeadingsRef.current[index] && splitHeadingsRef.current[index].lines) {
      const lines = splitHeadingsRef.current[index].lines;

      gsap.set(lines, {
        opacity: 0,
        yPercent: 100
      });

      tl.to(
        lines,
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: {
            each: 0.1,
            from: 'start'
          }
        },
        0.4
      );
    }


    currentIndexRef.current = index;
    setCurrentIndex(index);
  }, []);

  useGSAP(() => {
  if (!containerRef.current || !imagesLoaded) return;

    gsap.registerPlugin(Observer, SplitText);

    const headings = headingRefs.current;
    const outerWrappers = outerRefs.current;
    const innerWrappers = innerRefs.current;

    splitHeadingsRef.current = headings.map(
      (heading) =>
        new SplitText(heading, {
          type: 'lines',
          linesClass: 'line',
          mask: 'lines'
        })
    );

    gsap.set(outerWrappers, { xPercent: 100 });
    gsap.set(innerWrappers, { xPercent: -100 });

    observerRef.current = Observer.create({
      type: 'wheel,touch,pointer',
      wheelSpeed: -1,
      onDown: () => {
        if (!animatingRef.current && currentIndexRef.current > 0) {
          gotoSection(currentIndexRef.current - 1, -1);
        }
      },
      onUp: () => {
        if (!animatingRef.current && currentIndexRef.current < sections.length - 1) {
          gotoSection(currentIndexRef.current + 1, 1);
        }
      },
      tolerance: 10,
      preventDefault: (self, event) => {
        // Solo prevenir el scroll si no estamos en el primer/último slide
        const isFirstSlide = currentIndexRef.current === 0;
        const isLastSlide = currentIndexRef.current === sections.length - 1;
        const isScrollingUp = event.deltaY < 0;
        const isScrollingDown = event.deltaY > 0;
        
        // Permitir scroll natural si estamos en el primer slide y scrolleando hacia arriba,
        // o en el último slide y scrolleando hacia abajo
        if ((isFirstSlide && isScrollingUp) || (isLastSlide && isScrollingDown)) {
          return false;
        }
        return true;
      }
    });

    gotoSection(0, 1);

    return () => {
      if (observerRef.current) {
        observerRef.current.kill();
        observerRef.current = null;
      }
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
      splitHeadingsRef.current.forEach((split) => {
        if (split && typeof split.revert === 'function') {
          split.revert();
        }
      });
      splitHeadingsRef.current = [];
    };
  }, { scope: containerRef, dependencies: [sections.length, imagesLoaded] });

  return (
    <div 
      ref={containerRef}
      className={`relative h-screen w-full overflow-hidden bg-black text-white uppercase font-sans ${className}`}
    >
      {/* Section preview thumbnails */}
      <div className="absolute bottom-4 right-6 z-30 flex items-center gap-4">
        <div className="flex gap-2">
          {sections.map((section, i) => (
            <div
              key={`thumb-${i}`}
              className="w-12 h-8 rounded overflow-hidden relative cursor-pointer transition-transform duration-300"
              onClick={() => {
                if (currentIndex !== i && !animatingRef.current) {
                  const direction = i > currentIndex ? 1 : -1;
                  gotoSection(i, direction);
                }
              }}
            >
              <img
                src={section.img}
                alt={`Section ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div 
                 className={`absolute inset-0 bg-black transition-opacity duration-1000 ease-in-out ${
                   currentIndex !== i ? 'opacity-50' : 'opacity-0'
                 }`} 
               />
            </div>
          ))}
        </div>
        
      </div>

      {sections.map((section, i) => (
        <section 
          key={`section-${i}`} 
          className="absolute top-0 left-0 h-full w-full invisible"
          ref={(el) => { if (el) sectionsRefs.current[i] = el; }}
        >
          <div className="outer w-full h-full overflow-hidden" ref={(el) => { if (el) outerRefs.current[i] = el; }}>
            <div className="inner w-full h-full overflow-hidden" ref={(el) => { if (el) innerRefs.current[i] = el; }}>
              <div
                className="bg flex items-center justify-center absolute top-0 h-full w-full bg-cover bg-center"
                ref={(el) => { if (el) imagesRefs.current[i] = el; }}
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%), url("${section.img}")`
                }}
              >
                <h2 className="section-heading text-white text-center font-semibold w-[90vw] max-w-[1200px] text-[clamp(1rem,4vw,9rem)] normal-case leading-none z-10" ref={(el) => { if (el) headingRefs.current[i] = el; }}>
                  {section.text}
                </h2>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default AnimatedSections;