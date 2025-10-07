import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'Sustancias - Las Llaves Prohibidas',
    description: 'Las plantas sagradas despiertan la puerta a lo desconocido',
    image: '/upcoming/product (4).png',
    story: 'Ayahuasca. Hongos. DMT. Peyote. Bufo.\n\nLa primera colección es el inicio del sacrilegio: ingerir lo sagrado y permitir que lo humano se rompa.\n\nCada pieza es un talismán de esas llaves que destrozan la mente para abrir universos.\n\nNo es joyería. Es un recordatorio de que un solo respiro puede borrarlo todo.',
  },
  {
    name: 'Unwrap Your Mind - El Desgarro',
    description: 'La mente se abre y lo surreal envuelve cada pensamiento',
    image: '/upcoming/product (19).png',
    story: 'Las puertas se quiebran.\n\nDe pronto, lo real ya no es real. Lo familiar se derrumba y lo imposible se vuelve inevitable.\n\nLas piezas nacen de ese desgarro: fracturas, luces líquidas, símbolos que sangran belleza.\n\nNo abres tu mente: la desgarras hasta que grita.',
  },
  {
    name: 'Peak - Disolución del Ego',
    description: 'El ego se disuelve, el laberinto interno se recorre y el cosmos se revela',
    image: '/upcoming/product (21).png',
    story: 'Aquí mueres.\n\nEl "yo" se hace polvo. No hay identidad, no hay nombre, no hay cuerpo.\n\nLas joyas de esta colección son cenizas de ego fundidas con destellos de infinito.\n\nMorir para entender que nunca exististe.',
  },
  {
    name: 'Peak - Laberinto',
    description: 'En la espiral del extravío, cada giro es una herida que te acerca al centro',
    image: '/upcoming/product (25).png',
    story: 'El viaje no es recto. Es espiral.\n\nSombras, espejos, pasajes imposibles. Cada mente crea su propio infierno y su propio paraíso.\n\nEsta colección encarna la geometría del extravío. Piezas que giran, se cruzan, se pierden.\n\nEl centro existe, pero tendrás que sangrar para llegar.',
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
          No son colecciones. <br/>Son capítulos de un rito. <br/> Una odisea que cada año abre otra puerta, hasta deshacerte y rehacerte. 
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
                   <p className="text-base mb-6 text-shadow leading-relaxed">
                     {selectedProduct.story}
                   </p>
                   <Link 
                     to="/upcoming"
                     className="inline-block px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white font-semibold border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                   >
                     Ver más
                   </Link>
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
