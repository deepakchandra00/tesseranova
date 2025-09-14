'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CosmicBackground from './CosmicBackground';

interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
  showGradient?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cosmic Background Effects */}
      <CosmicBackground variant="blackhole" intensity="high" className="opacity-60" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[10, 25, 40, 60, 75, 90].map((left, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-60"
            style={{
              left: `${left}%`,
              top: `${20 + (i * 15)}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Main blackhole animation */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, transparent 20%, rgba(123, 97, 255, 0.3) 40%, rgba(13, 13, 13, 0.8) 70%, #000 100%)',
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400"
            style={{
              background: 'linear-gradient(135deg, #a7c7e7 0%, #7b61ff 50%, #4deeea 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="/services"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg text-lg px-8 py-4 group"
            >
              <span className="relative z-10">Explore Services</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
              />
            </Link>
            
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-lg text-lg font-medium text-gray-900 dark:text-white hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 border border-white/30"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white dark:from-gray-900 to-transparent" />
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-purple-400 rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 