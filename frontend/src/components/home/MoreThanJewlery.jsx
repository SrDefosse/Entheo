import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' }
  }
};

function MoreThanJewlery() {
  return (
    <section className="h-[70vh] flex items-center justify-center px-8 pb-[10vh] bg-white">
      <motion.div
        className="max-w-4xl w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Caption */}
        <div className="flex justify-end items-center mb-6">
          <span className="inline-block h-px w-16 bg-black mr-3" />
          <span className="text-sm tracking-wide">
            what will you find beyond?
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="text-[#785230]">MORE</span>{' '}
          <span className="text-black">than jewelry — a doorway to the unseen.</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-xl md:text-2xl leading-snug">
          Each limited edition piece{' '}
          <span className="text-[#785230]">invites you to uncover</span>{' '}
          what’s within.
        </p>
      </motion.div>
    </section>
  );
}

export default MoreThanJewlery;
