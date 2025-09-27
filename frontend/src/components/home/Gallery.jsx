import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  {
    name: 'Coleccion 1',
    description: 'Descripción breve de la colección 1.',
    image: '/products/product (1).png',
    link: '#',
    story: 'Aquí va una historia cautivadora sobre la Colección 1, describiendo la inspiración, los materiales y el viaje creativo detrás de cada pieza. La idea es que el cliente se sienta conectado con el producto a un nivel más profundo.',
  },
  {
    name: 'Colección 2',
    description: 'Descripción breve de la colección 2.',
    image: '/products/product (2).png',
    link: '#',
    story: 'La Colección 2 se inspira en la belleza de la naturaleza. Cada joya refleja la luz de una manera única, al igual que los rayos del sol a través de las hojas de un bosque. Descubre la magia que se esconde en cada detalle.',
  },
  {
    name: 'Colección 3',
    description: 'Descripción breve de la colección 3.',
    image: '/products/product (3).png',
    link: '#',
    story: 'Urbana y moderna, la Colección 3 está diseñada para la mujer contemporánea. Líneas limpias y formas geométricas se unen para crear piezas audaces que no pasarán desapercibidas. Perfecta para destacar en cualquier ocasión.',
  },
  {
    name: 'Colección 4',
    description: 'Descripción breve de la colección 4.',
    image: '/products/product (4).png',
    link: '#',
    story: 'Un viaje a través del tiempo. La Colección 4 reinterpreta diseños clásicos con un toque moderno. Joyas atemporales que cuentan historias de elegancia y sofisticación, destinadas a pasar de generación en generación.',
  },
];

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="bg-white text-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Proximas Colecciones</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Descubre nuestra colección exclusiva. Diseños únicos que cuentan una historia y realzan tu estilo personal.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer" onClick={() => openModal(product)}>
              <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="mt-2 text-sm opacity-80">{product.description}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={closeModal}
          >
             <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.9, opacity: 0 }}
               transition={{ duration: 0.3 }}
               className="relative bg-white/30 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-2xl m-4 p-6 text-white border border-white/20"
               onClick={(e) => e.stopPropagation()}
             >
               <div className="text-center">
                 <div className="mb-6">
                   <motion.img 
                     src={selectedProduct.image} 
                     alt={selectedProduct.name} 
                     className="w-80 h-80 object-cover rounded-xl mx-auto shadow-lg"
                     initial={{ scale: 1.1 }}
                     animate={{ scale: 1 }}
                     transition={{ duration: 0.5 }}
                   />
                 </div>
                 <div>
                   <h2 className="text-3xl font-extrabold mb-4 text-shadow-lg">{selectedProduct.name}</h2>
                   <p className="text-base mb-4 text-shadow leading-relaxed">
                     {selectedProduct.story}
                   </p>
                 </div>
               </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
