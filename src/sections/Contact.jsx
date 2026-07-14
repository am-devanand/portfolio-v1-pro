import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, Send, MapPin, Clock } from 'lucide-react';
import SectionWrapper, { FadeInView, StaggerContainer } from '../components/ui/SectionWrapper';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';

const contactInfo = [
  {
    icon: <Mail size={20} />,
    title: 'Email',
    value: 'amdevanand206@gmail.com',
    href: 'mailto:amdevanand206@gmail.com',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <Phone size={20} />,
    title: 'Phone',
    value: '+91 7339031074',
    href: 'tel:+917339031074',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: <Linkedin size={20} />,
    title: 'LinkedIn',
    value: 'dev-anand-ba846a359',
    href: 'https://linkedin.com/in/dev-anand-ba846a359',
    gradient: 'from-blue-600 to-blue-400',
  },
  {
    icon: <Github size={20} />,
    title: 'GitHub',
    value: 'am-devanand',
    href: 'https://github.com/am-devanand',
    gradient: 'from-purple-500 to-pink-500',
  },
];

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: <Github size={18} />, href: 'https://github.com/am-devanand', label: 'GitHub' },
  { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/dev-anand-ba846a359', label: 'LinkedIn' },
  { icon: <Mail size={18} />, href: 'mailto:amdevanand206@gmail.com', label: 'Email' },
];

const Contact = () => {
  return (
    <>
      <SectionWrapper id="contact" dark>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInView className="text-center mb-16">
            <Badge variant="accent" className="bg-accent-pink/10 text-accent-pink border-accent-pink/20 mb-4">
              Contact
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white tracking-tight mb-4">
              Let's build something{' '}
              <span className="gradient-text">special</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it.
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            <div className="lg:col-span-3 space-y-4">
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    target={info.title === 'Email' || info.title === 'Phone' ? undefined : '_blank'}
                    rel={info.title === 'Email' || info.title === 'Phone' ? undefined : 'noopener noreferrer'}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
                    }}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${info.gradient} bg-opacity-20 shrink-0`}>
                      <div className="text-white">{info.icon}</div>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-text-secondary">{info.title}</p>
                      <p className="text-sm font-medium text-white group-hover:text-accent-blue transition-colors duration-300 truncate">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </StaggerContainer>
            </div>

            <FadeInView direction="right" className="lg:col-span-2">
              <GlassCard className="p-6 lg:p-8 h-full flex flex-col" glow>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="success" dot>
                    Available for work
                  </Badge>
                </div>

                <div className="flex items-center gap-2 text-text-secondary text-sm mb-2">
                  <Clock size={14} />
                  <span>Typically responds within 24 hours</span>
                </div>

                <div className="flex items-center gap-2 text-text-secondary text-sm mb-6">
                  <MapPin size={14} />
                  <span>India</span>
                </div>

                <div className="border-t border-white/[0.06] pt-6 mt-auto">
                  <h3 className="text-xl font-bold text-white font-heading mb-2">Start a Project</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    Looking for a professional website that stands out? Let's discuss how I can help bring your vision to life.
                  </p>
                  <a
                    href="mailto:amdevanand206@gmail.com?subject=Project Inquiry"
                    className="relative inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full text-sm font-semibold text-white overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink opacity-90" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center gap-2">
                      <Send size={16} />
                      Send a Message
                    </span>
                  </a>
                </div>
              </GlassCard>
            </FadeInView>
          </div>
        </div>
      </SectionWrapper>

      <footer className="relative border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 flex flex-col items-center gap-8">
            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-lg font-bold font-heading tracking-tight"
              >
                <span className="gradient-text">DEV</span>
              </motion.span>

              <motion.nav
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-6"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </motion.nav>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-3"
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2.5 rounded-xl text-text-secondary hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <p className="text-xs text-text-secondary">
                &copy; {new Date().getFullYear()} DEV. Designed &amp; Developed with React, Tailwind CSS &amp; Framer Motion
              </p>
              <p className="text-xs text-text-secondary/50">
                Built by DEV
              </p>
            </motion.div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
