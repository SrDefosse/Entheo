import React from 'react';

const products = [
  {
    name: 'Producto 1',
    description: 'Descripción breve del producto 1.',
    image: '/products/product (1).png',
    link: '#',
  },
  {
    name: 'Producto 2',
    description: 'Descripción breve del producto 2.',
    image: '/products/product (2).png',
    link: '#',
  },
  {
    name: 'Producto 3',
    description: 'Descripción breve del producto 3.',
    image: '/products/product (3).png',
    link: '#',
  },
  {
    name: 'Producto 4',
    description: 'Descripción breve del producto 4.',
    image: '/products/product (4).png',
    link: '#',
  },
];

const Gallery = () => {
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
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
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
    </section>
  );
};

export default Gallery;
