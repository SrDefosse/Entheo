import React from "react";
import { FaInstagram } from "react-icons/fa";
import { SiShopify } from "react-icons/si";

function Footer() {
  return (
    <footer className="w-full bg-stone-900 backdrop-blur-md shadow-lg py-6 px-4 md:py-8 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Logo izquierda */}
        <img
          src="https://cdn.shopify.com/s/files/1/0740/7291/6222/files/entheo-logotext-white.png?v=1745554064"
          alt="Entheo Logo"
          className="h-20"
        />

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
    </footer>
  );
}

export default Footer;
