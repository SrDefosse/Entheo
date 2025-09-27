import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import GlassButton from "../ui/GlassButton";

const ROTATION_RANGE = 35;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;
const PERSPECTIVE = "1500px";

const TiltShineCard = ({ src, title, className = "" }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
  const sheenOpacity = useTransform(
    ySpring,
    [-HALF_ROTATION_RANGE, 0, HALF_ROTATION_RANGE],
    [0.5, 0, 0.5]
  );

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    const rotateY = (mouseX / width) * ROTATION_RANGE - HALF_ROTATION_RANGE;
    const rotateX = -((mouseY / height) * ROTATION_RANGE - HALF_ROTATION_RANGE);
    x.set(rotateX);
    y.set(rotateY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: PERSPECTIVE }} className={`${className} overflow-visible`}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform, backgroundImage: `url(${src})` }}
        className="relative w-full h-full bg-cover bg-center rounded-lg shadow-2xl overflow-hidden"
      >
        {/* Sheen */}
        <motion.div
          style={{ opacity: sheenOpacity }}
          className="absolute inset-0 bg-gradient-to-br from-white/50 via-white to-white/50"
        />
        {/* Overlay con título y botón */}
        {title && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent sm:opacity-0 sm:hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-start p-4 sm:p-6">
            <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-3 transform sm:translate-x-4 sm:hover:translate-x-0 transition-transform duration-300">
              {title}
            </h3>
            <GlassButton 
              variant="primary" 
              size="sm"
              className="transform sm:translate-x-4 sm:hover:translate-x-0 transition-transform duration-300 delay-100"
            >
              Shop Now
            </GlassButton>
          </div>
        )}
      </motion.div>
    </div>
  );
};

function LookBook() {
  const images = [
    { src: "https://cdn.shopify.com/s/files/1/0740/7291/6222/files/lookbook_1.jpg?v=1745551489",  title: "Pure craftsmanship" },
    { src: "https://cdn.shopify.com/s/files/1/0740/7291/6222/files/lookbook_2.jpg?v=1745551489",  title: "Timeless brilliance" },
    { src: "https://cdn.shopify.com/s/files/1/0740/7291/6222/files/lookbook_3.jpg?v=1745551489",  title: "Natural elegance" },
    { src: "https://cdn.shopify.com/s/files/1/0740/7291/6222/files/lookbook_4.jpg?v=1745551489",  title: "Unique details" },
    { src: "https://cdn.shopify.com/s/files/1/0740/7291/6222/files/lookbook_5.jpg?v=1745551489",  title: "Exquisite textures" },
    { src: "https://cdn.shopify.com/s/files/1/0740/7291/6222/files/lookbook_6.jpg?v=1745551489",  title: "Light and form" },
    { src: "https://cdn.shopify.com/s/files/1/0740/7291/6222/files/lookbook_7.jpg?v=1745551489",  title: "Living inspiration" },
    { src: "https://cdn.shopify.com/s/files/1/0740/7291/6222/files/lookbook_8.jpg?v=1745551489",  title: "Timeless design" },
    { src: "https://cdn.shopify.com/s/files/1/0740/7291/6222/files/lookbook_9.jpg?v=1745551489",  title: "Sustainable beauty" },
    { src: "https://cdn.shopify.com/s/files/1/0740/7291/6222/files/lookbook_10.jpg?v=1745551489", title: "The Entheo essence" },
    { src: "https://cdn.shopify.com/s/files/1/0740/7291/6222/files/lookbook_11.jpg?v=1745551489", title: "Passion in silver" },
  ];

  const topGrid    = images.slice(0, 4);   // 2x2
  const middleGrid = images.slice(4, 7);   // 1x3
  const bottomGrid = images.slice(7, 11);  // 2x2

  return (
    <section className="py-12 px-4 overflow-visible">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Título principal */}
        <h2 className="text-4xl md:text-5xl font-bold text-center leading-tight mb-8">
          <span className="inline-block bg-gradient-to-r from-yellow-900 to-orange-300 bg-clip-text text-transparent">
            Unwrap Your Mind
          </span>
        </h2>

        {/* Grid 2x2 superior */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {topGrid.map((img, i) => (
            <TiltShineCard
              key={i}
              src={img.src}
              title={img.title}
              className="aspect-square"
            />
          ))}
        </div>

        {/* Grid 1x3 medio */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {middleGrid.map((img, i) => (
            <TiltShineCard
              key={i}
              src={img.src}
              title={img.title}
              className="aspect-square"
            />
          ))}
        </div>

        {/* Grid 2x2 inferior */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {bottomGrid.map((img, i) => (
            <TiltShineCard
              key={i}
              src={img.src}
              title={img.title}
              className="aspect-square"
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default LookBook;