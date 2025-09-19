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
      className="group relative h-[500px] w-[380px] overflow-hidden bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col"
    >
      {/* Imagen del producto */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={card.url}
          alt={card.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>

      {/* Contenido del producto */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">
            {card.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {card.description}
          </p>
          {card.price && (
            <p className="text-2xl font-bold text-gray-900">
              ${card.price}
            </p>
          )}
        </div>

        {/* Botón Shop Now */}
        <div className="pt-4 flex justify-start">
          <GlassButton 
            variant="secondary" 
            size="md"
            onClick={() => console.log(`Shop now: ${card.title}`)}
          >
            Shop Now
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </GlassButton>
        </div>
      </div>
    </div>
  );
};

export default ScrollCarousel;

const cards = [
  {
    url: "/products/product (1).png",
    title: "Elegance Ring",
    description: "Anillo de compromiso en oro blanco 18k con diamante central de corte princesa. Diseño clásico y atemporal que simboliza el amor eterno.",
    price: "2,850",
    id: 1,
  },
  {
    url: "/products/product (2).png",
    title: "Golden Harmony",
    description: "Collar en oro amarillo 14k con colgante minimalista. Perfecto para uso diario, aporta elegancia sutil a cualquier outfit.",
    price: "1,250",
    id: 2,
  },
  {
    url: "/products/product (3).png",
    title: "Diamond Dreams",
    description: "Aretes de botón con diamantes naturales en montadura de platino. Brillo excepcional que realza la belleza natural de quien los porta.",
    price: "3,200",
    id: 3,
  },
  {
    url: "/products/product (4).png",
    title: "Infinity Bracelet",
    description: "Pulsera de plata esterlina 925 con detalle de infinito. Símbolo de conexiones eternas, ideal para regalo especial.",
    price: "680",
    id: 4,
  },
  {
    url: "/products/product (5).png",
    title: "Rose Vintage",
    description: "Anillo vintage en oro rosa con gemas preciosas. Diseño único inspirado en la elegancia de épocas pasadas con toque contemporáneo.",
    price: "1,890",
    id: 5,
  },
  {
    url: "/products/product (6).png",
    title: "Crystal Pendant",
    description: "Colgante con cristal natural en cadena de plata. Pieza artesanal que combina la belleza de las piedras naturales con diseño moderno.",
    price: "450",
    id: 6,
  },
  {
    url: "/products/product (7).png",
    title: "Sapphire Elite",
    description: "Anillo de zafiro azul con diamantes laterales en oro blanco. Pieza exclusiva para ocasiones especiales, símbolo de sofisticación.",
    price: "4,750",
    id: 7,
  },
];