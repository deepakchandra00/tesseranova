import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        space: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#0d0d0d', // Deep Space Black
        },
        // Cosmic Color Palette
        nebula: {
          50: '#f0f4ff',
          100: '#e0eaff',
          200: '#c7d7fe',
          300: '#a7c7e7', // Light Nebula Blue
          400: '#7b9ce8',
          500: '#5b7ce8',
          600: '#4c63d2',
          700: '#3d4eaa',
          800: '#2d3a7a',
          900: '#1e2749',
        },
        cosmic: {
          50: '#fafbfc',
          100: '#f5f7fa', // Cosmic White
          200: '#e4e7eb',
          300: '#c1c9d2',
          400: '#a3aed0',
          500: '#8b9dc3',
          600: '#6b7db0',
          700: '#4a5d8a',
          800: '#2d3748',
          900: '#1a202c',
        },
        starlight: {
          50: '#f4f3ff',
          100: '#ebe9fe',
          200: '#d9d6fe',
          300: '#bfb8fd',
          400: '#a195fc',
          500: '#7b61ff', // Starlight Purple
          600: '#6d4aff',
          700: '#5a3bdb',
          800: '#4a2fb7',
          900: '#3d2494',
        },
        aurora: {
          50: '#f0fdfc',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#4deeea', // Aurora Cyan
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        cosmic: ['Orbitron', 'monospace'],
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'blackhole': 'blackhole 10s linear infinite',
        'wormhole': 'wormhole 8s ease-in-out infinite',
        'starfield': 'starfield 50s linear infinite',
        'comet': 'comet 3s ease-out infinite',
        'blue-drift': 'blue-drift 15s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px rgba(123, 97, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(123, 97, 255, 0.8)' },
        },
        'blackhole': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        'wormhole': {
          '0%, 100%': { transform: 'scale(1) rotateZ(0deg)' },
          '50%': { transform: 'scale(1.2) rotateZ(180deg)' },
        },
        'starfield': {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-100vh)' },
        },
        'comet': {
          '0%': { transform: 'translateX(-100px) translateY(100px)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(100vw) translateY(-100px)', opacity: '0' },
        },
        'blue-drift': {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px)' },
          '33%': { transform: 'translateX(30px) translateY(-20px)' },
          '66%': { transform: 'translateX(-20px) translateY(30px)' },
        },
      },
      backgroundImage: {
        'gray-gradient': 'linear-gradient(135deg, #a7c7e7 0%, #7b61ff 50%, #4deeea 100%)',
        'blue-gradient': 'radial-gradient(ellipse at center, #7b61ff 0%, #4deeea 50%, transparent 70%)',
        'starfield': 'radial-gradient(2px 2px at 20px 30px, #eee, transparent), radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config; 