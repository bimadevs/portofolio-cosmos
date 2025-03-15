'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navItems = [
  { name: 'Beranda', href: '#home' },
  { name: 'Tentang', href: '#about' },
  { name: 'Proyek', href: '#projects' },
  { name: 'Keahlian', href: '#skills' },
  { name: 'Kontak', href: '#contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Deteksi scroll untuk mengubah tampilan navbar
      setScrolled(window.scrollY > 50);
      
      // Deteksi section yang aktif
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tutup menu mobile saat mengklik link
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    
    // Scroll ke section yang dipilih
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'py-3 glass-panel bg-space-dark/90' : 'py-5 bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          href="#home"
          className="text-2xl font-bold text-gradient z-20"
          tabIndex={0}
          aria-label="Kembali ke beranda"
          onClick={() => handleNavClick('home')}
          onKeyDown={(e) => e.key === 'Enter' && handleNavClick('home')}
        >
          COSMOS
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                    tabIndex={0}
                    aria-label={`Navigasi ke ${item.name}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href.substring(1));
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && handleNavClick(item.href.substring(1))}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-space-accent/20 border border-space-accent/30 -z-10"
                        layoutId="activeSection"
                        transition={{ type: 'spring', duration: 0.6 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-full space-border z-20"
          aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={mobileMenuOpen}
          tabIndex={0}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <motion.div
            className="w-6 h-6 relative"
            animate={mobileMenuOpen ? "open" : "closed"}
          >
            <motion.span
              className="absolute top-0 left-0 w-6 h-0.5 bg-white"
              variants={{
                closed: { rotate: 0, translateY: 0 },
                open: { rotate: 45, translateY: 8 }
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute top-2.5 left-0 w-6 h-0.5 bg-white"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute top-5 left-0 w-6 h-0.5 bg-white"
              variants={{
                closed: { rotate: 0, translateY: 0 },
                open: { rotate: -45, translateY: -8 }
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-space-dark/95 backdrop-blur-md z-10 md:hidden pt-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container mx-auto px-4 py-8 bg-space-dark/95 backdrop-blur-md rounded-2xl">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`block py-3 px-4 text-xl rounded-lg transition-all duration-300 ${
                          isActive 
                            ? 'bg-space-accent/20 text-white border border-space-accent/30 neon-glow' 
                            : 'text-gray-300 hover:bg-space-dark/50 hover:text-white'
                        }`}
                        tabIndex={0}
                        aria-label={`Navigasi ke ${item.name}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href.substring(1));
                        }}
                        onKeyDown={(e) => e.key === 'Enter' && handleNavClick(item.href.substring(1))}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              
              {/* Social links in mobile menu */}
              <div className="mt-8 pt-8 border-t border-space-accent/20">
                <p className="text-gray-400 mb-4">Hubungi Saya</p>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-space-dark flex items-center justify-center border border-space-accent/30 hover:border-space-neon hover:neon-glow transition-all duration-300"
                    aria-label="GitHub"
                    tabIndex={0}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-space-dark flex items-center justify-center border border-space-accent/30 hover:border-space-neon hover:neon-glow transition-all duration-300"
                    aria-label="LinkedIn"
                    tabIndex={0}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-space-dark flex items-center justify-center border border-space-accent/30 hover:border-space-neon hover:neon-glow transition-all duration-300"
                    aria-label="Twitter"
                    tabIndex={0}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar; 