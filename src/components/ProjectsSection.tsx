import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'SCHOOLOO',
    description: 'School discovery and admission platform connecting parents with the best educational institutions',
    link: 'https://github.com/tejasava/schooloo',
  },
  {
    title: 'SATIS',
    description: 'AI-powered Training & Interview Simulation Platform for career preparation',
    link: 'https://github.com/tejasava/satis',
  },
  {
    title: 'Persona-based AI Agents',
    description: 'Custom AI assistants providing intelligent, personalized recommendations',
    link: 'https://github.com/tejasava/persona-ai-agents',
  },
  {
    title: 'Cursor AI Clone',
    description: 'Productivity tool built with OpenAI API & Python for enhanced development workflow',
    link: 'https://github.com/tejasava/cursor-ai-clone',
  },
  {
    title: 'AI Automation Tool',
    description: 'Smart product recommendation system using AI & APIs to find best-priced products',
    link: 'https://github.com/tejasava/ai-automation-tool',
  },
  {
    title: 'Netflix Clone',
    description: 'Responsive streaming platform clone with modern UI/UX',
    link: 'https://github.com/tejasava/netflix-clone',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={ref} className="py-20 px-6 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className="text-3xl md:text-5xl font-bold font-display text-center gradient-text mb-4 relative"
      >
        Projects
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full glow-effect" style={{ background: 'var(--gradient-accent)' }} />
      </motion.h2>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.03, 
              y: -10,
            }}
            className="rounded-3xl p-8 border border-border/20 hover:border-primary transition-all duration-500 cursor-pointer group relative overflow-hidden bg-card/60 backdrop-blur-md"
          >
            {/* Gradient background overlay on hover */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ 
                background: 'linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--secondary) / 0.1), hsl(var(--accent) / 0.05))',
              }} 
            />
            
            {/* Left gradient accent bar */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'var(--gradient-accent)' }}
            />
            
            {/* Shine sweep effect */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:left-full transition-all duration-700" />
            </div>

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold mb-3 gradient-text">{project.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
              
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all duration-300"
              >
                <Github size={18} />
                View on GitHub
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
