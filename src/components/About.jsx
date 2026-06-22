import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiLayers, FiGlobe, FiUsers } from 'react-icons/fi';

const traits = [
  { icon: FiZap, title: 'Fast Learner', desc: 'Quickly adopts new technologies and frameworks to deliver modern solutions.' },
  { icon: FiLayers, title: 'Full Stack Focus', desc: 'Comfortable building across the entire stack — UI to APIs to databases.' },
  { icon: FiGlobe, title: 'AI & Cloud Interest', desc: 'Exploring cloud deployment, LLM integrations, and intelligent automation.' },
  { icon: FiUsers, title: 'Team Collaborator', desc: 'Thrives in team environments, contributing to projects from planning to delivery.' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Subtle section divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-6 h-px bg-white/20" />
          <span className="text-xs font-mono text-white/30 uppercase tracking-[0.2em]">About</span>
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Building the web,<br />
              <span className="text-white/30">one layer at a time.</span>
            </h2>
            <div className="space-y-4 text-white/50 text-base leading-relaxed">
              <p>
                I'm a BCA graduate from Bangalore with a deep interest in how software is architected — from database schemas to UI components. I enjoy the full journey of building a product.
              </p>
              <p>
                My projects span security tooling, event platforms, and database management systems. I'm particularly excited about AI-augmented development and how it's reshaping what solo developers can ship.
              </p>
            </div>

            {/* Key specs */}
            <div className="pt-4 space-y-3 font-mono text-sm">
              {[
                { key: 'Degree', val: 'Bachelor of Computer Applications' },
                { key: 'College', val: 'IFIM College' },
                { key: 'Focus', val: 'Full Stack · AI · Cloud' },
                { key: 'Status', val: 'Open to opportunities' },
              ].map(({ key, val }) => (
                <div key={key} className="flex items-center gap-4">
                  <span className="text-white/20 min-w-[90px]">{key}</span>
                  <span className="w-6 h-px bg-white/10" />
                  <span className="text-white/60">{val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Trait cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {traits.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                className="glass rounded-2xl p-5 border border-white/6 hover-glow-white hover:bg-white/[0.03] transition-all duration-300 group cursor-default"
              >
                <div className="mb-3 p-2 rounded-lg bg-white/5 w-fit group-hover:bg-white/8 transition-colors">
                  <Icon size={18} className="text-white/60" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
