'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface WormholeTransitionProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export default function WormholeTransition({ 
  children, 
  className = '',
  intensity = 'medium' 
}: WormholeTransitionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Create wormhole effect
      const rings = intensity === 'low' ? 8 : intensity === 'medium' ? 12 : 16;
      
      for (let i = 0; i < rings; i++) {
        const progress = (i / rings) + (time * 0.01);
        const radius = (progress * 300) % 300;
        const opacity = Math.max(0, 1 - (radius / 300));
        
        // Outer ring
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(123, 97, 255, ${opacity * 0.3})`;
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // Inner ring
        if (radius > 50) {
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius - 20, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(77, 238, 234, ${opacity * 0.2})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }
      
      // Central vortex
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 100);
      gradient.addColorStop(0, 'rgba(123, 97, 255, 0.1)');
      gradient.addColorStop(0.5, 'rgba(77, 238, 234, 0.05)');
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      time += 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [intensity]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Wormhole Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Rotating Wormhole CSS Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-96 h-96 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, transparent, rgba(123, 97, 255, 0.2), transparent, rgba(77, 238, 234, 0.2), transparent)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      
      {/* Content with entrance animation */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ 
          duration: 1.2, 
          ease: "easeOut",
          opacity: { duration: 0.8 },
          scale: { duration: 1 },
          rotateY: { duration: 1.2 }
        }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {children}
      </motion.div>
      
      {/* Floating particles emerging from wormhole */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: '50%',
              top: '50%',
              background: i % 2 === 0 
                ? 'radial-gradient(circle, rgba(123, 97, 255, 0.8) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(77, 238, 234, 0.8) 0%, transparent 70%)',
            }}
            animate={{
              x: [0, (Math.cos(i * 45 * Math.PI / 180) * 200)],
              y: [0, (Math.sin(i * 45 * Math.PI / 180) * 200)],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    </div>
  );
}