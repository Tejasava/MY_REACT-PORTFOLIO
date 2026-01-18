import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: 'CEO – Anurise',
    description: 'Scaled revenue to ₹1.2 LPA through strategic leadership and innovative solutions',
  },
  {
    title: 'Founder & CEO – Schooloo',
    description: 'Built a comprehensive school discovery & admission platform',
  },
  {
    title: 'Ex-CEO – Skilled India',
    description: 'Led educational skill-development initiatives across multiple domains',
  },
  {
    title: 'Physics Faculty – Defense Academy',
    description: 'Teaching and mentoring students in advanced physics concepts',
  },
  {
    title: 'Maths Mentor – (Class 10)',
    description: 'Guiding students through mathematical concepts and problem-solving techniques',
  },
  {
    title: 'Leadership Roles',
    description: 'Core member of college events and presented startup idea at Maha Kumbh to UP Energy Minister',
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" ref={ref} className="py-20 px-6 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className="text-3xl md:text-5xl font-bold font-display text-center gradient-text mb-4 relative"
      >
        Experience
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full glow-effect" style={{ background: 'var(--gradient-accent)' }} />
      </motion.h2>

      <div className="mt-16 space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              x: 15, 
              scale: 1.02,
              boxShadow: `0 15px 50px hsl(var(--glow) / 0.3), 0 0 60px hsl(var(--glow-purple) / 0.2)`
            }}
            className="glass-card rounded-2xl p-6 md:p-8 border border-border/20 hover:border-primary transition-all duration-500 cursor-pointer relative overflow-hidden group"
          >
            {/* Left accent bar */}
            <div 
              className="absolute left-0 top-0 w-1 h-full rounded-full glow-effect"
              style={{ background: 'var(--gradient-accent)' }}
            />
            
            <div className="ml-4">
              <h3 className="text-lg md:text-xl font-bold gradient-text mb-2">{exp.title}</h3>
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
