import React from 'react';
import { motion } from 'framer-motion';
import gokart from './aethon.jpg';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center">

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${gokart})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Centered Content */}
      <div className="container-custom relative z-10 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block text-primary-500 font-medium mb-3"
          >
            PERFORMANCE RACING
          </motion.span>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Aethon
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Our flagship GoKart project designed for optimal performance and handling on the track,
            pushing the boundaries of collegiate motorsport engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center"
          >
            <a 
              href="#technical-specs" 
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg inline-block transition-colors"
            >
              Explore Specs
            </a>
            <a 
              href="#team" 
              className="px-8 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-lg inline-block transition-colors"
            >
              Meet the Team
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
