'use client';

import { useTheme } from './ThemeProvider';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-gray-100/20 dark:hover:bg-gray-800/20 transition-all duration-300 group overflow-hidden"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      role="switch"
      aria-checked={theme === 'dark'}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Background cosmic effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
      
      {/* Icon container */}
      <div className="relative z-10">
        <motion.div
          key={theme}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {theme === 'light' ? (
            <MoonIcon className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:text-purple-600 transition-colors duration-300" />
          ) : (
            <SunIcon className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:text-cyan-500 transition-colors duration-300" />
          )}
        </motion.div>
      </div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: theme === 'dark' 
            ? ['0 0 10px rgba(77, 238, 234, 0.3)', '0 0 20px rgba(77, 238, 234, 0.5)', '0 0 10px rgba(77, 238, 234, 0.3)']
            : ['0 0 10px rgba(123, 97, 255, 0.3)', '0 0 20px rgba(123, 97, 255, 0.5)', '0 0 10px rgba(123, 97, 255, 0.3)']
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.button>
  );
} 