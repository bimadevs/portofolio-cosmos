'use client';

import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: 'Tahun Pengalaman', value: '5+' },
    { label: 'Proyek Selesai', value: '50+' },
    { label: 'Klien Puas', value: '30+' },
    { label: 'Teknologi', value: '15+' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-nebula opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-nebula opacity-10 blur-2xl rounded-full"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Tentang Saya</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Penjelajah digital yang berdedikasi untuk menciptakan pengalaman web yang luar biasa
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-space-neon">Misi Galaksi Digital</h3>
              <p className="text-gray-300 mb-6">
                Sebagai seorang pengembang web yang berpengalaman, saya berdedikasi untuk menciptakan solusi digital yang tidak hanya fungsional tetapi juga memukau secara visual. Dengan latar belakang yang kuat dalam pengembangan front-end dan back-end, saya menggabungkan kreativitas dan keahlian teknis untuk membangun aplikasi web yang inovatif.
              </p>
              <p className="text-gray-300 mb-6">
                Saya percaya bahwa desain yang baik harus menyeimbangkan estetika dan kegunaan. Setiap proyek yang saya kerjakan dirancang dengan mempertimbangkan pengalaman pengguna, performa, dan aksesibilitas untuk memastikan hasil akhir yang luar biasa.
              </p>
              <p className="text-gray-300">
                Mari berkolaborasi untuk mengubah ide Anda menjadi kenyataan digital yang menakjubkan!
              </p>
              
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="glass-panel p-4 rounded-lg text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <h4 className="text-2xl md:text-3xl font-bold text-space-pink mb-1">{stat.value}</h4>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-space-neon/30 rounded-tl-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-space-accent/30 rounded-br-xl"></div>
              
              {/* Main image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden glass-panel p-2">
                <div className="w-full h-full rounded-lg overflow-hidden relative">
                  {/* Placeholder for profile image - replace with actual image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-space-blue via-space-purple to-space-accent opacity-70"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div 
                className="absolute -top-4 -right-4 glass-panel px-3 py-2 rounded-full text-sm font-medium text-space-neon border border-space-neon/30 neon-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                Web Developer
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 glass-panel px-3 py-2 rounded-full text-sm font-medium text-space-pink border border-space-pink/30 pink-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                UI/UX Designer
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 