'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface PlanetServiceCardProps {
  title: string;
  description: string;
  href: string;
  planetType: 'earth' | 'mars' | 'saturn' | 'exoplanet';
  icon?: React.ComponentType<{ className?: string }>;
}

const planetStyles = {
  earth: {
    gradient: 'radial-gradient(circle at 30% 30%, #4ade80, #22c55e, #16a34a, #15803d)',
    glow: 'rgba(34, 197, 94, 0.4)',
    ring: false,
  },
  mars: {
    gradient: 'radial-gradient(circle at 30% 30%, #f97316, #ea580c, #dc2626, #b91c1c)',
    glow: 'rgba(239, 68, 68, 0.4)',
    ring: false,
  },
  saturn: {
    gradient: 'radial-gradient(circle at 30% 30%, #fbbf24, #f59e0b, #d97706, #b45309)',
    glow: 'rgba(245, 158, 11, 0.4)',
    ring: true,
  },
  exoplanet: {
    gradient: 'radial-gradient(circle at 30% 30%, #8b5cf6, #7c3aed, #6d28d9, #5b21b6)',
    glow: 'rgba(139, 92, 246, 0.4)',
    ring: false,
  },
};

export default function PlanetServiceCard({ 
  title, 
  description, 
  href, 
  planetType, 
  icon: Icon 
}: PlanetServiceCardProps) {
  const planet = planetStyles[planetType];

  return (
    <motion.div
      className=\"group relative\"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={href} className=\"block\">
        <div className=\"relative p-8 h-full\">\n          {/* Planet */}\n          <div className=\"relative mx-auto mb-6 w-32 h-32\">\n            <motion.div\n              className=\"w-full h-full rounded-full relative overflow-hidden\"\n              style={{ background: planet.gradient }}\n              whileHover={{ \n                rotate: 360,\n                boxShadow: `0 0 40px ${planet.glow}`,\n              }}\n              transition={{ \n                rotate: { duration: 8, ease: 'linear' },\n                boxShadow: { duration: 0.3 }\n              }}\n            >\n              {/* Planet surface details */}\n              <div className=\"absolute inset-0 opacity-30\">\n                <div className=\"absolute top-4 left-6 w-3 h-3 bg-black/20 rounded-full\" />\n                <div className=\"absolute top-12 right-8 w-2 h-2 bg-black/15 rounded-full\" />\n                <div className=\"absolute bottom-8 left-4 w-4 h-2 bg-black/10 rounded-full\" />\n              </div>\n              \n              {/* Atmosphere glow */}\n              <div \n                className=\"absolute inset-0 rounded-full\"\n                style={{\n                  background: `radial-gradient(circle at center, transparent 60%, ${planet.glow} 100%)`,\n                }}\n              />\n            </motion.div>\n            \n            {/* Saturn's rings */}\n            {planet.ring && (\n              <motion.div\n                className=\"absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 pointer-events-none\"\n                animate={{ rotate: 360 }}\n                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}\n              >\n                <div \n                  className=\"w-full h-full rounded-full border-4 opacity-60\"\n                  style={{ borderColor: planet.glow }}\n                />\n                <div \n                  className=\"absolute top-2 left-2 w-36 h-36 rounded-full border-2 opacity-40\"\n                  style={{ borderColor: planet.glow }}\n                />\n              </motion.div>\n            )}\n          </div>\n\n          {/* Content */}\n          <div className=\"text-center space-y-4\">\n            <div className=\"flex items-center justify-center mb-4\">\n              {Icon && (\n                <Icon className=\"w-8 h-8 text-starlight-500 group-hover:text-aurora-500 transition-colors duration-300\" />\n              )}\n            </div>\n            \n            <h3 className=\"text-2xl font-bold font-cosmic text-space-900 dark:text-cosmic-100 group-hover:text-starlight-600 dark:group-hover:text-starlight-400 transition-colors duration-300\">\n              {title}\n            </h3>\n            \n            <p className=\"text-space-700 dark:text-cosmic-300 leading-relaxed\">\n              {description}\n            </p>\n            \n            <motion.div\n              className=\"inline-flex items-center text-starlight-600 dark:text-starlight-400 font-medium group-hover:text-aurora-500 transition-colors duration-300\"\n              whileHover={{ x: 5 }}\n            >\n              Explore Service\n              <svg className=\"ml-2 w-4 h-4\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n                <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M9 5l7 7-7 7\" />\n              </svg>\n            </motion.div>\n          </div>\n        </div>\n      </Link>\n    </motion.div>\n  );\n}