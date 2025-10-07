import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import GlassButton from "../ui/GlassButton";

const ScrollCarousel = () => {
  return (
      <HorizontalScrollCarousel />
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[300px] w-[300px] overflow-hidden rounded-lg bg-neutral-200 shadow-lg sm:h-[450px] sm:w-[450px]"
    >
      <img
        src={card.url}
        alt={card.title}
        className="bg-white absolute inset-0 z-0 p-8 w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute bottom-6 left-6 z-10">
        <GlassButton variant="secondary" size="md">
          Shop Now
        </GlassButton>
      </div>
    </div>
  );
};

export default ScrollCarousel;

const cards = [
  {
    url: "/products/producto1.png",
    id: 1,
  },
  {
    url: "/products/producto2.png",
    id: 2,
  },
  {
    url: "/products/producto3.png",
    id: 3,
  },
  {
    url: "/products/producto4.png",
    id: 4,
  },
  {
    url: "/products/producto6.png",
    id: 5,
  },
  {
    url: "/products/producto8.png",
    id: 6,
  },
  {
    url: "/products/producto11.png",
    id: 7,
  },
  {
    url: "/products/producto12.png",
    id: 8,
  },
  {
    url: "/products/producto13.png",
    id: 9,
  },
  {
    url: "/products/producto14.png",
    id: 10,
  },
  {
    url: "/products/producto15.png",
    id: 11,
  },
  {
    url: "/products/producto7.png",
    id: 12,
  },
];