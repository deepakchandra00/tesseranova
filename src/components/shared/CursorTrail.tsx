'use client';

import { useEffect, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export default function CursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: trailId++ }];
        return newTrail.slice(-10); // Keep only last 10 points
      });
    };

    const fadeTrail = () => {
      setTrail(prev => prev.slice(1));
    };

    window.addEventListener('mousemove', handleMouseMove);
    const interval = setInterval(fadeTrail, 50);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: point.x - 10,
            top: point.y - 10,
            opacity: (index + 1) / trail.length * 0.6,
            transform: `scale(${(index + 1) / trail.length})`,
          }}
        />
      ))}
    </>
  );
}