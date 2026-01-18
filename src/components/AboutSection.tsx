import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-20 px-6 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className="text-3xl md:text-5xl font-bold font-display text-center gradient-text mb-4 relative"
      >
        About Me
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full glow-effect" style={{ background: 'var(--gradient-accent)' }} />
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-16 max-w-4xl mx-auto"
      >
        <div className="glass-card rounded-3xl p-8 md:p-12 glow-effect">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
            I'm Tejasava Singh Yadav, a B.Tech CSE (AI & ML) student and the current CEO of Anurise, 
            where under my leadership the company has achieved a revenue of ₹1.2 LPA. Passionate about 
            Generative AI, Automation, and innovative tech solutions, I co-founded Schooloo, an AI-driven 
            educational platform, and have developed AI-powered tools like persona-based AI agents and a 
            Cursor AI clone using OpenAI API and Python. With hands-on expertise in Python, C/C++, Java, 
            HTML/CSS, Linux, VS Code, Android Studio, and N8N, I also lead teams as a Kabaddi athlete, 
            core member of Enigma 12, and team captain at Freedom Employability Academy, where I earned 
            the Green Horn Language Wizard Award. I thrive in hackathons and fast-paced environments, 
            turning ideas into impactful AI solutions.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
