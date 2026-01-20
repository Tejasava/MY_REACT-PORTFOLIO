import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Trophy } from 'lucide-react';
import { useState, useRef } from 'react';
import profileImage from '@/assets/profile.jpg';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Tejasava', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/tejasava-singh-yadav-ba8818274', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/Tejasava_Yadav', label: 'X (Twitter)' },
  { icon: Instagram, href: 'https://www.instagram.com/tejasavasinghyadav', label: 'Instagram' },
  { icon: Trophy, href: 'https://unstop.com/u/tejasyad7508', label: 'Unstop' },
];

const HeroSection = () => {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error('Error playing video:', error);
        });
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-12">
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-display gradient-text animate-glow mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          TEJASAVA SINGH YADAV
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground tracking-widest mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AI/ML PROFESSIONAL | ENTREPRENEUR | INNOVATOR
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            whileHover={{ y: -3, boxShadow: '0 0 50px hsl(var(--glow) / 0.5), 0 0 80px hsl(var(--glow-purple) / 0.3)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo('#projects')}
            className="px-8 py-4 rounded-full font-semibold text-primary-foreground glow-effect"
            style={{ background: 'var(--gradient-primary)' }}
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ y: -3, boxShadow: '0 0 30px hsl(var(--glow) / 0.3)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo('#contact')}
            className="px-8 py-4 rounded-full font-semibold border-2 border-primary text-foreground hover:bg-primary/10 transition-colors"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1, boxShadow: '0 0 30px hsl(var(--glow) / 0.4)' }}
              className="w-14 h-14 rounded-full glass-card border-2 border-primary flex items-center justify-center text-primary hover:text-primary-foreground transition-all duration-300"
              style={{ 
                background: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--gradient-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
              title={social.label}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Profile Image with Video Hover */}
      <motion.div
        className="mt-16 flex justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 100 }}
      >
        <motion.div 
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden cursor-pointer relative group flex items-center justify-center"
          whileHover={{ 
            boxShadow: '0 0 80px hsl(var(--glow) / 0.6), 0 0 150px hsl(var(--glow-purple) / 0.4)',
            scale: 1.08
          }}
          transition={{ duration: 0.3 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Profile Image */}
          <img
            src={profileImage}
            alt="Tejasava Singh Yadav"
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isHovering ? 'opacity-0' : 'opacity-100'
            }`}
          />
          
          {/* Introduction Video */}
          <video
            ref={videoRef}
            className={`absolute w-full h-full object-cover transition-opacity duration-300 ${
              isHovering ? 'opacity-100' : 'opacity-0'
            }`}
            loop
            muted={false}
            playsInline
            preload="auto"
            crossOrigin="anonymous"
            onError={(e) => {
              console.error('Video error:', e);
            }}
            onCanPlay={() => {
              console.log('Video ready to play');
            }}
          >
            <source src="/intro-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Hover Indicator */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white text-center"
            >
              <div className="text-sm font-semibold">Hover to see intro</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
