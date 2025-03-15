'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Star = {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  delay: number;
  duration: number;
};

const Stars = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const starCount = Math.floor(window.innerWidth * window.innerHeight / 1500);
      const newStars: Star[] = [];

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 2 + 1,
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.7 + 0.3,
          delay: Math.random() * 5,
          duration: Math.random() * 3 + 2,
        });
      }

      setStars(newStars);
    };

    generateStars();

    window.addEventListener('resize', generateStars);
    return () => window.removeEventListener('resize', generateStars);
  }, []);

  return (
    <>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Larger stars with glow effect */}
      {stars
        .filter((_, i) => i % 20 === 0) // Only use ~5% of stars for glow effect
        .map((star) => (
          <motion.div
            key={`glow-${star.id}`}
            className="absolute rounded-full neon-glow"
            style={{
              width: `${star.size + 2}px`,
              height: `${star.size + 2}px`,
              left: `${star.x}%`,
              top: `${star.y}%`,
              opacity: star.opacity * 0.8,
            }}
            animate={{
              opacity: [star.opacity * 0.8, star.opacity * 0.2, star.opacity * 0.8],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration * 1.5,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
    </>
  );
};

export default Stars; 