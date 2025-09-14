'use client';

import { useEffect, useRef } from 'react';

interface CosmicBackgroundProps {
  variant?: 'starfield' | 'nebula' | 'blackhole' | 'wormhole';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export default function CosmicBackground({ 
  variant = 'starfield', 
  intensity = 'medium',
  className = '' 
}: CosmicBackgroundProps) {
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
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      color: string;
    }> = [];

    // Initialize particles based on variant
    const initParticles = () => {
      const count = intensity === 'low' ? 50 : intensity === 'medium' ? 100 : 200;
      
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.8 + 0.2,
          color: variant === 'nebula' 
            ? `hsl(${Math.random() * 60 + 240}, 70%, 70%)` 
            : 'rgba(255, 255, 255, 0.8)'
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update particle position
        particle.y -= particle.speed;
        
        // Reset particle when it goes off screen
        if (particle.y < 0) {
          particle.y = canvas.height;
          particle.x = Math.random() * canvas.width;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Add glow effect for nebula variant
        if (variant === 'nebula') {
          ctx.shadowBlur = 20;
          ctx.shadowColor = particle.color;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [variant, intensity]);

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: variant === 'nebula' ? 'screen' : 'normal' }}
      />
      
      {/* Static background gradients */}
      {variant === 'nebula' && (
        <div className="absolute inset-0 nebula-bg opacity-30" />
      )}
      
      {variant === 'blackhole' && (
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
          <div className="blackhole w-full h-full opacity-60" />
        </div>
      )}
      
      {variant === 'wormhole' && (
        <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2">
          <div className="wormhole w-full h-full opacity-40" />
        </div>
      )}
    </div>
  );
}