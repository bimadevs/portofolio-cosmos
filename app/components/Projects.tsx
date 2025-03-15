'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "Galaksi E-Commerce",
    description: "Platform e-commerce dengan UI futuristik dan fitur-fitur canggih seperti AR untuk melihat produk.",
    image: "/project1.jpg", // Placeholder, ganti dengan gambar sebenarnya
    tags: ["React", "Node.js", "MongoDB", "AR.js"],
    link: "#",
  },
  {
    id: 2,
    title: "Nebula Dashboard",
    description: "Dashboard admin dengan visualisasi data interaktif dan tema luar angkasa yang memukau.",
    image: "/project2.jpg", // Placeholder, ganti dengan gambar sebenarnya
    tags: ["Vue.js", "D3.js", "Firebase", "TailwindCSS"],
    link: "#",
  },
  {
    id: 3,
    title: "Orbit Social Network",
    description: "Jaringan sosial dengan antarmuka yang unik dan fitur-fitur inovatif untuk berbagi konten.",
    image: "/project3.jpg", // Placeholder, ganti dengan gambar sebenarnya
    tags: ["React", "GraphQL", "AWS", "Socket.io"],
    link: "#",
  },
  {
    id: 4,
    title: "Stellar Weather App",
    description: "Aplikasi cuaca dengan visualisasi yang indah dan prediksi cuaca yang akurat.",
    image: "/project4.jpg", // Placeholder, ganti dengan gambar sebenarnya
    tags: ["React Native", "OpenWeatherAPI", "Redux", "Lottie"],
    link: "#",
  },
  {
    id: 5,
    title: "Cosmic Task Manager",
    description: "Aplikasi manajemen tugas dengan antarmuka yang intuitif dan fitur kolaborasi tim.",
    image: "/project5.jpg", // Placeholder, ganti dengan gambar sebenarnya
    tags: ["Next.js", "Prisma", "PostgreSQL", "WebSockets"],
    link: "#",
  },
  {
    id: 6,
    title: "Pulsar Music Player",
    description: "Pemutar musik dengan visualisasi audio yang menakjubkan dan antarmuka yang elegan.",
    image: "/project6.jpg", // Placeholder, ganti dengan gambar sebenarnya
    tags: ["React", "Web Audio API", "Electron", "Three.js"],
    link: "#",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const filteredProjects = filter 
    ? projectsData.filter(project => project.tags.includes(filter))
    : projectsData;

  const uniqueTags = Array.from(new Set(projectsData.flatMap(project => project.tags)));

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 left-0 w-1/4 h-1/4 bg-nebula opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-nebula opacity-10 blur-2xl rounded-full"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Proyek Galaksi</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Jelajahi berbagai proyek digital yang telah saya ciptakan di seluruh galaksi digital
          </p>
          
          {/* Filter tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <motion.button
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                filter === null 
                  ? 'bg-space-accent text-white neon-glow' 
                  : 'bg-space-dark/50 text-gray-300 hover:bg-space-dark/80 border border-space-accent/30'
              }`}
              onClick={() => setFilter(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              tabIndex={0}
              aria-label="Tampilkan semua proyek"
              onKeyDown={(e) => e.key === 'Enter' && setFilter(null)}
            >
              Semua
            </motion.button>
            
            {uniqueTags.map((tag) => (
              <motion.button
                key={tag}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  filter === tag 
                    ? 'bg-space-accent text-white neon-glow' 
                    : 'bg-space-dark/50 text-gray-300 hover:bg-space-dark/80 border border-space-accent/30'
                }`}
                onClick={() => setFilter(tag)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                tabIndex={0}
                aria-label={`Filter proyek dengan tag ${tag}`}
                onKeyDown={(e) => e.key === 'Enter' && setFilter(tag)}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-panel rounded-xl overflow-hidden group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              whileHover={{ y: -10 }}
            >
              {/* Project image placeholder with gradient background */}
              <div className="h-48 bg-gradient-to-br from-space-blue via-space-purple to-space-accent relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-20 text-6xl font-bold">
                  {project.title.split(' ')[0]}
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-space-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.link} 
                    className="px-6 py-2 rounded-full bg-space-accent text-white font-medium hover:bg-space-neon transition-colors duration-300"
                    tabIndex={0}
                    aria-label={`Lihat proyek ${project.title}`}
                    onKeyDown={(e) => e.key === 'Enter' && window.open(project.link, '_blank')}
                  >
                    Lihat Proyek
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-space-neon">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={`${project.id}-${tag}`} 
                      className="text-xs px-2 py-1 rounded-full bg-space-dark border border-space-accent/30 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-space-accent opacity-70"></div>
              <div className="absolute top-2 right-7 w-2 h-2 rounded-full bg-space-neon opacity-50"></div>
              <div className="absolute top-2 right-11 w-1 h-1 rounded-full bg-space-pink opacity-30"></div>
            </motion.div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">Tidak ada proyek yang ditemukan dengan filter yang dipilih.</p>
            <button 
              className="mt-4 px-6 py-2 rounded-full bg-space-accent text-white font-medium hover:bg-space-neon transition-colors duration-300"
              onClick={() => setFilter(null)}
              tabIndex={0}
              aria-label="Reset filter"
              onKeyDown={(e) => e.key === 'Enter' && setFilter(null)}
            >
              Tampilkan Semua
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 