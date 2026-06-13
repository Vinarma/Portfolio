import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';

const roles = ['Full Stack Developer', 'Software Engineer', 'Web Developer', 'BCA Graduate'];

// Floating particle component
function Particle({ style }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-white/20"
      style={style}
      animate={{ y: [0, -30, 0], opacity: [0, 0.6, 0] }}
      transition={{ duration: Math.random() * 4 + 3, repeat: Infinity, delay: Math.random() * 5 }}
    />
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const particles = useRef(
    Array.from({ length: 30 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }))
  );

  // Typing effect
  useEffect(() => {
    const full = roles[roleIndex];
    let timer;
    if (!deleting && displayed.length < full.length) {
      timer = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === full.length) {
      timer = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timer);
  }, [displayed, deleting, roleIndex]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">

      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-100 pointer-events-none" />
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      {/* Ambient gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      {/* Floating particles */}
      {particles.current.map((p, i) => (
        <Particle key={i} style={{ left: p.left, top: p.top }} />
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center space-y-8">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs font-mono text-white/50 tracking-widest uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities · Banglore, India
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none">
            Vinarma
            <br />
            <span className="text-white/30">Jayakaran R</span>
          </h1>
        </motion.div>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-8 flex items-center justify-center"
        >
          <span className="text-xl md:text-2xl font-mono text-white/40 tracking-wide">
            {displayed}
            <span className="inline-block w-0.5 h-5 ml-1 bg-white/40 animate-cursor-blink align-middle" />
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xl mx-auto text-base md:text-lg text-white/40 leading-relaxed font-light"
        >
          BCA graduate building production-ready web systems. Passionate about full-stack architecture, AI integration, and elegant user experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={scrollToContact}
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all duration-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            Get in touch
            <FiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
          </button>
          <a
            href={`${import.meta.env.BASE_URL}Resume Vinarma-1.pdf`}
            download="Resume Vinarma-1.pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-sm font-medium text-white/70 hover:text-white hover-glow-white transition-all duration-200"
          >
            <FiDownload size={15} />
            Resume
          </a>
          <div className="flex items-center gap-3 pl-2">
            <a href="https://github.com/vinarma" target="_blank" rel="noreferrer"
              className="p-2.5 rounded-lg glass border border-white/8 text-white/40 hover:text-white hover:border-white/20 transition-all duration-200">
              <FiGithub size={18} />
            </a>
            <a href="https://linkedin.com/in/vinarma-jayakaran" target="_blank" rel="noreferrer"
              className="p-2.5 rounded-lg glass border border-white/8 text-white/40 hover:text-white hover:border-white/20 transition-all duration-200">
              <FiLinkedin size={18} />
            </a>
          </div>
        </motion.div>

        {/* Floating stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {[
            { label: 'Degree', value: 'BCA' },
            { label: 'Projects', value: '5+' },
            { label: 'Tech Stack', value: '12+' },
            { label: 'Location', value: 'Banglore' },
          ].map(({ label, value }) => (
            <div key={label} className="glass rounded-xl p-4 text-center border border-white/8 hover-glow-white transition-all duration-300">
              <div className="text-xl font-bold text-white">{value}</div>
              <div className="text-xs text-white/30 mt-0.5 font-mono uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
