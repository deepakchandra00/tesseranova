'use client';

import React from 'react';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface HeroProps {
  title: string;
  description: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  backgroundImage,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    });
  }, [controls]);

  return (
    <section className="relative py-20 overflow-hidden">
      {backgroundImage && (
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1
          }}
        />
      )}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 