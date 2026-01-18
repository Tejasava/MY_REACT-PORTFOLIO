import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Lightbulb, RefreshCcw, Handshake, MessageSquare, Rocket } from 'lucide-react';

const technicalSkills = [
  { name: 'HTML5', color: '#E34F26' },
  { name: 'CSS3', color: '#1572B6' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Java', color: '#007396' },
  { name: 'C++', color: '#00599C' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Node.js', color: '#339933' },
  { name: 'MySQL', color: '#4479A1' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'Git', color: '#F05032' },
  { name: 'GitHub', color: '#ffffff' },
];

const softSkills = [
  { icon: Users, title: 'Leadership', description: 'Led teams as CEO of Anurise, core member of Enigma 12, and team captain at FEA' },
  { icon: Lightbulb, title: 'Problem Solving', description: 'Thrive in hackathons and AI challenges, turning complex problems into elegant solutions' },
  { icon: RefreshCcw, title: 'Adaptability', description: 'Quickly learn and apply new technologies and methodologies' },
  { icon: Handshake, title: 'Teamwork', description: 'Collaborate effectively across projects and events' },
  { icon: MessageSquare, title: 'Communication', description: 'Awarded Green Horn Language Wizard at FEA for excellence in communication' },
  { icon: Rocket, title: 'Entrepreneurship', description: 'Founder/co-founder of Schooloo and Anurise, driving innovation and business growth' },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref} className="py-20 px-6 max-w-7xl mx-auto">
      {/* Technical Skills */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className="text-3xl md:text-5xl font-bold font-display text-center gradient-text mb-4 relative"
      >
        Technical Skills
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full glow-effect" style={{ background: 'var(--gradient-accent)' }} />
      </motion.h2>

      <div className="mt-16 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6">
        {technicalSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ 
              scale: 1.1, 
              y: -10,
              boxShadow: `0 15px 50px hsl(var(--glow) / 0.3), 0 0 60px hsl(var(--glow-purple) / 0.2)`
            }}
            className="glass-card rounded-2xl p-4 md:p-6 text-center border border-border/20 hover:border-primary transition-all duration-300 cursor-pointer group"
          >
            <div 
              className="text-4xl md:text-5xl mb-3 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-[360deg]"
              style={{ 
                filter: `drop-shadow(0 0 10px ${skill.color})`,
              }}
            >
              {getSkillIcon(skill.name)}
            </div>
            <p className="font-semibold text-sm md:text-base text-foreground">{skill.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Soft Skills */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 100 }}
        className="text-3xl md:text-5xl font-bold font-display text-center gradient-text mt-24 mb-4 relative"
      >
        Soft Skills
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full glow-effect" style={{ background: 'var(--gradient-accent)' }} />
      </motion.h2>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {softSkills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            whileHover={{ 
              scale: 1.03, 
              y: -8,
            }}
            className="rounded-3xl p-8 border border-border/20 hover:border-primary transition-all duration-500 cursor-pointer group relative overflow-hidden bg-card/60 backdrop-blur-md"
          >
            {/* Gradient border effect on hover */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ 
                background: 'linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--secondary) / 0.15))',
              }} 
            />
            
            {/* Top gradient line */}
            <div 
              className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'var(--gradient-primary)' }}
            />

            {/* Shine sweep effect */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:left-full transition-all duration-700" />
            </div>

            <div className="relative z-10">
              <skill.icon 
                className="w-14 h-14 mb-4 text-primary transition-transform duration-500 group-hover:scale-110"
                style={{ 
                  filter: 'drop-shadow(0 0 8px hsl(var(--glow) / 0.4))'
                }}
              />
              <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SVG Gradient Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

function getSkillIcon(name: string): string {
  const icons: Record<string, string> = {
    'HTML5': '🌐',
    'CSS3': '🎨',
    'JavaScript': '⚡',
    'Python': '🐍',
    'Java': '☕',
    'C++': '⚙️',
    'React': '⚛️',
    'Node.js': '💚',
    'MySQL': '🗄️',
    'Firebase': '🔥',
    'Git': '📦',
    'GitHub': '🐙',
  };
  return icons[name] || '💻';
}

export default SkillsSection;
