'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Skill = {
  name: string;
  level: number; // 1-10
  icon: string;
  color: string;
};

const skillsData: Skill[] = [
  { name: 'React', level: 9, icon: '⚛️', color: 'text-space-neon' },
  { name: 'Next.js', level: 8, icon: '▲', color: 'text-white' },
  { name: 'TypeScript', level: 8, icon: '𝕋', color: 'text-space-neon' },
  { name: 'JavaScript', level: 9, icon: '𝕁𝕊', color: 'text-yellow-400' },
  { name: 'HTML', level: 9, icon: '🌐', color: 'text-orange-500' },
  { name: 'CSS', level: 8, icon: '🎨', color: 'text-blue-400' },
  { name: 'TailwindCSS', level: 9, icon: '🌊', color: 'text-cyan-400' },
  { name: 'Node.js', level: 7, icon: '🟢', color: 'text-green-500' },
  { name: 'GraphQL', level: 7, icon: '◯', color: 'text-pink-500' },
  { name: 'MongoDB', level: 6, icon: '🍃', color: 'text-green-500' },
  { name: 'PostgreSQL', level: 6, icon: '🐘', color: 'text-blue-500' },
  { name: 'Docker', level: 5, icon: '🐳', color: 'text-blue-400' },
];

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Deteksi ukuran layar untuk responsivitas
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Cek saat pertama kali load
    checkMobile();
    
    // Cek saat resize window
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-1/3 h-1/3 bg-nebula opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-1/4 h-1/4 bg-nebula opacity-10 blur-2xl rounded-full"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Konstelasi Keahlian</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Peta bintang keahlian teknis yang telah saya kuasai selama perjalanan digital
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Skills visualization */}
          <motion.div 
            className="glass-panel p-4 sm:p-8 rounded-2xl relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-space-neon">Teknologi & Bahasa</h3>
            
            <div className="space-y-4 sm:space-y-6">
              {skillsData.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className={`text-lg sm:text-xl mr-2 ${skill.color}`}>{skill.icon}</span>
                      <span className="font-medium text-sm sm:text-base">{skill.name}</span>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-400">{skill.level}/10</span>
                  </div>
                  
                  <div className="h-1.5 sm:h-2 bg-space-dark/50 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full rounded-full bg-gradient-to-r from-space-accent to-space-neon"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level * 10}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-space-accent/5 blur-2xl"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-space-neon/5 blur-2xl"></div>
          </motion.div>
          
          {/* Skill categories */}
          <motion.div 
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-panel p-4 sm:p-8 rounded-2xl relative overflow-hidden">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-space-pink">Front-End Development</h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">
                Membangun antarmuka yang responsif, interaktif, dan menarik dengan fokus pada pengalaman pengguna yang luar biasa.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2 text-sm sm:text-base">
                <li>Pengembangan UI/UX yang modern dan intuitif</li>
                <li>Animasi dan transisi yang halus</li>
                <li>Optimasi performa dan aksesibilitas</li>
                <li>Integrasi API dan manajemen state</li>
              </ul>
              
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-2 border-dashed border-space-pink/20 animate-spin-slow"></div>
            </div>
            
            <div className="glass-panel p-4 sm:p-8 rounded-2xl relative overflow-hidden">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-space-neon">Back-End Development</h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">
                Membangun sistem yang skalabel, aman, dan efisien untuk mendukung aplikasi web modern.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2 text-sm sm:text-base">
                <li>Arsitektur API RESTful dan GraphQL</li>
                <li>Manajemen database dan optimasi query</li>
                <li>Autentikasi dan otorisasi</li>
                <li>Deployment dan CI/CD</li>
              </ul>
              
              {/* Decorative element */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full border-2 border-dashed border-space-neon/20 animate-spin-slow"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Skill constellation visualization */}
        <motion.div 
          className="mt-16 relative h-60 sm:h-80 glass-panel rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Rotating constellation container */}
            <motion.div 
              className="relative w-full h-full max-w-3xl mx-auto"
              animate={{ 
                rotate: 360
              }}
              transition={{ 
                duration: 120, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {skillsData.map((skill, index) => {
                // Calculate position in a circular pattern
                const angle = (index / skillsData.length) * Math.PI * 2;
                const radius = isMobile ? 
                  (80 + (skill.level * 3)) : // Radius lebih kecil untuk mobile
                  (120 + (skill.level * 5)); // Radius normal untuk desktop
                const x = 50 + Math.cos(angle) * radius / 4;
                const y = 50 + Math.sin(angle) * radius / 4;
                
                // Skill node with counter-rotation
                const counterRotation = {
                  initial: { opacity: 0, scale: 0 },
                  whileInView: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 0.5, delay: index * 0.1 }
                  },
                  animate: { 
                    rotate: -360,
                    transition: { duration: 120, repeat: Infinity, ease: "linear" }
                  },
                  viewport: { once: true }
                };
                
                return (
                  <motion.div
                    key={skill.name}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                    initial={counterRotation.initial}
                    whileInView={counterRotation.whileInView}
                    animate={counterRotation.animate}
                    viewport={counterRotation.viewport}
                  >
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full glass-panel flex items-center justify-center ${skill.level > 7 ? 'neon-glow' : ''}`}>
                      <span className={`text-sm sm:text-xl ${skill.color}`}>{skill.icon}</span>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 sm:mt-2 whitespace-nowrap">
                      <span className="text-[10px] sm:text-xs font-medium">{skill.name}</span>
                    </div>
                  </motion.div>
                );
              })}
              
              {/* Connection lines between skills */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                {skillsData.map((_, i) => {
                  const nextIndex = (i + 1) % skillsData.length;
                  
                  // Calculate positions
                  const angle1 = (i / skillsData.length) * Math.PI * 2;
                  const radius1 = isMobile ? 
                    (80 + (skillsData[i].level * 3)) : 
                    (120 + (skillsData[i].level * 5));
                  const x1 = 50 + Math.cos(angle1) * radius1 / 4;
                  const y1 = 50 + Math.sin(angle1) * radius1 / 4;
                  
                  const angle2 = (nextIndex / skillsData.length) * Math.PI * 2;
                  const radius2 = isMobile ? 
                    (80 + (skillsData[nextIndex].level * 3)) : 
                    (120 + (skillsData[nextIndex].level * 5));
                  const x2 = 50 + Math.cos(angle2) * radius2 / 4;
                  const y2 = 50 + Math.sin(angle2) * radius2 / 4;
                  
                  return (
                    <motion.line
                      key={`line-${i}`}
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke="rgba(123, 44, 191, 0.2)"
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  );
                })}
              </svg>
            </motion.div>
            
            {/* Center point with glow effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-space-accent/30 purple-glow z-10"></div>
          </div>
          
          {/* Decorative orbit rings */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full border border-dashed border-space-accent/10 animate-spin-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border border-dashed border-space-neon/10 animate-orbit"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 