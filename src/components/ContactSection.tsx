import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail, Send, Trophy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  { icon: Github, title: 'GitHub', handle: '@Tejasava', href: 'https://github.com/Tejasava' },
  { icon: Linkedin, title: 'LinkedIn', handle: 'Tejasava Singh Yadav', href: 'https://www.linkedin.com/in/tejasava-singh-yadav-ba8818274' },
  { icon: Twitter, title: 'X (Twitter)', handle: '@Tejasava_Yadav', href: 'https://x.com/Tejasava_Yadav' },
  { icon: Instagram, title: 'Instagram', handle: '@tejasavasinghyadav', href: 'https://www.instagram.com/tejasavasinghyadav' },
  { icon: Trophy, title: 'Unstop', handle: '@tejasyad7508', href: 'https://unstop.com/u/tejasyad7508' },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xovklyjw', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        toast({
          title: 'Message sent!',
          description: "Thanks for reaching out. I'll get back to you soon!",
        });
        form.reset();
      } else {
        throw new Error('Failed to send');
      }
    } catch {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-20 px-6 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className="text-3xl md:text-5xl font-bold font-display text-center gradient-text mb-4 relative"
      >
        Get In Touch
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full glow-effect" style={{ background: 'var(--gradient-accent)' }} />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-muted-foreground text-lg mt-8 mb-12"
      >
        Have a project in mind or want to collaborate? I'd love to hear from you!
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card rounded-3xl p-8 glow-effect"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ y: -3, boxShadow: '0 0 50px hsl(var(--glow) / 0.5)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-full font-semibold text-primary-foreground glow-effect flex items-center justify-center gap-2 disabled:opacity-50"
              style={{ background: 'var(--gradient-primary)' }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={18} />
            </motion.button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold gradient-text mb-6">Connect With Me</h3>
          
          <div className="space-y-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.title}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ x: 10, boxShadow: '0 5px 30px hsl(var(--glow) / 0.3)' }}
                className="flex items-center gap-4 p-4 glass-card rounded-2xl border border-border/20 hover:border-primary transition-all duration-300 group"
              >
                <social.icon className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[360deg]" />
                <div>
                  <h4 className="font-semibold text-foreground">{social.title}</h4>
                  <p className="text-muted-foreground text-sm">{social.handle}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center gap-4 p-6 glass-card rounded-2xl glow-effect mt-8"
          >
            <Mail className="w-10 h-10 text-primary" />
            <div>
              <h4 className="font-semibold text-foreground">Email Me Directly</h4>
              <a 
                href="mailto:tejasavasinghyadav4@gmail.com" 
                className="text-primary hover:underline break-all"
              >
                tejasavasinghyadav4@gmail.com
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
