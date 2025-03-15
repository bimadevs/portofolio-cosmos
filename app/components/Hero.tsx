'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const planetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!planetRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as percentage of screen
      const xPercent = (clientX / innerWidth - 0.5) * 2; // -1 to 1
      const yPercent = (clientY / innerHeight - 0.5) * 2; // -1 to 1
      
      // Apply parallax effect
      planetRef.current.style.transform = `translate(${xPercent * 20}px, ${yPercent * 20}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-nebula opacity-30 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-nebula opacity-20 blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div 
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-xl md:text-2xl font-light mb-2 text-space-neon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Selamat Datang di Galaksi Digital
          </motion.h2>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Eksplorasi Portofolio Luar Angkasa
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Jelajahi galaksi proyek kreatif dan inovatif yang menggabungkan teknologi dan desain dalam harmoni kosmik.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-space-accent hover:bg-space-accent/80 text-white font-medium transition-all duration-300 neon-glow"
              tabIndex={0}
              aria-label="Lihat proyek"
              onKeyDown={(e) => e.key === 'Enter' && document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Lihat Proyek
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full border border-space-neon/50 hover:border-space-neon text-space-neon hover:text-white hover:bg-space-neon/20 font-medium transition-all duration-300"
              tabIndex={0}
              aria-label="Hubungi saya"
              onKeyDown={(e) => e.key === 'Enter' && document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Hubungi Saya
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Planet */}
            <motion.div 
              ref={planetRef}
              className="absolute inset-0"
              animate={{ 
                rotate: 360,
              }}
              transition={{ 
                duration: 200, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-space-blue via-space-purple to-space-accent shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_70%)]"></div>
                <div className="absolute inset-0 opacity-30">
                  {/* Planet texture */}
                  <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]"></div>
                  <div className="absolute w-1/2 h-1/3 top-1/4 left-1/4 rounded-full bg-space-accent/20 blur-md"></div>
                  <div className="absolute w-1/3 h-1/4 bottom-1/4 right-1/4 rounded-full bg-space-neon/20 blur-md"></div>
                </div>
              </div>
            </motion.div>
            
            {/* Orbit ring */}
            <div className="absolute inset-0 -m-8 border-4 border-dashed border-space-accent/20 rounded-full animate-spin-slow"></div>
            
            {/* Small orbiting moon */}
            <motion.div 
              className="absolute w-8 h-8 rounded-full bg-space-neon shadow-lg purple-glow"
              animate={{ 
                rotate: 360,
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              style={{
                top: '50%',
                left: '50%',
                marginLeft: '-4rem',
                marginTop: '-4rem',
                transformOrigin: 'calc(100% + 4rem) calc(100% + 4rem)',
              }}
            />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 1 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll ke bawah</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-space-neon" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 