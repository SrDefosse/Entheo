import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { SiShopify } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Fragment>
      <footer className="w-full bg-stone-900 backdrop-blur-md shadow-lg py-6 px-4 md:py-8 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Logo izquierda */}
        <Link to="/" className="cursor-pointer">
          <img
            src="https://cdn.shopify.com/s/files/1/0740/7291/6222/files/entheo-logotext-white.png?v=1745554064"
            alt="Entheo Logo"
            className="h-20"
          />
        </Link>

        {/* Iconos derecha */}
        <div className="flex items-center space-x-6">
          <a
            href="https://www.instagram.com/__entheo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <FaInstagram className="h-6 w-6 text-white" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <SiShopify className="h-6 w-6 text-white" />
          </a>
        </div>
      </div>

      {/* Texto de derechos reservados */}
      <div className="mt-4 text-center text-sm text-white">
        © {new Date().getFullYear()} Entheo. Todos los derechos reservados.
      </div>

      {/* Texto de apoyo social */}
      <div className="mt-2 text-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-sm text-gray-300 hover:text-white transition-colors underline cursor-pointer"
        >
          Apoyo Social
        </button>
      </div>
    </footer>

    {/* Modal de Apoyo Social */}
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Apoyo Social</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl cursor-pointer"
              >
                ×
              </button>
            </div>

            <div className="text-gray-700 space-y-3">
              <p className="text-sm">
                En <strong>Entheo</strong>, creemos en el poder de la comunidad y el apoyo mutuo.
                Nuestro programa de Apoyo Social está diseñado para ayudar a quienes más lo necesitan.
              </p>

              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">¿Cómo funciona?</h3>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Identificamos necesidades en nuestra comunidad</li>
                  <li>• Canalizamos recursos de manera transparente</li>
                  <li>• Apoyamos causas sociales y ambientales</li>
                  <li>• Fomentamos la colaboración comunitaria</li>
                </ul>
              </div>

              <p className="text-sm">
                Cada compra que realizas contribuye a fortalecer estos lazos comunitarios
                y apoyar iniciativas que generan un impacto positivo en la sociedad.
              </p>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-stone-900 text-white px-6 py-2 rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </Fragment>
  );
}

export default Footer;
