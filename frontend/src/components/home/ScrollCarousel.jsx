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
        className="absolute inset-0 z-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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
    url: "/products/product (1).png",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/products/product (2).png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/products/product (3).png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/products/product (4).png",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/products/product (5).png",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/products/product (6).png",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/products/product (7).png",
    title: "Title 7",
    id: 7,
  },
  {
    url: "/products/product (8).png",
    title: "Title 8",
    id: 8,
  },
  {
    url: "/products/product (9).png",
    title: "Title 9",
    id: 9,
  },
  {
    url: "/products/product (10).png",
    title: "Title 10",
    id: 10,
  },
  {
    url: "/products/product (11).png",
    title: "Title 11",
    id: 11,
  },
  {
    url: "/products/product (12).png",
    title: "Title 12",
    id: 12,
  },
];