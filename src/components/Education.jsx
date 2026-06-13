import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBookOpen } from 'react-icons/fi';

const certs = [
  { title: 'Cyber Threat Management System', issuer: 'Cisco Networking Academy', year: '2026' },
  { title: 'Intoduction to Python', issuer: 'Infosys SpringBoard', year: '2025' },
  { title: 'Introduction To Cybersecurity', issuer: 'Cisco Networking Academy', year: '2026' },
];

export default function Education() {
  return (
    <section id="education" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="max-w-5xl mx-auto space-y-20">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <div className="w-6 h-px bg-white/20" />
          <span className="text-xs font-mono text-white/30 uppercase tracking-[0.2em]">Education & Certifications</span>
        </motion.div>

        {/* Degree block */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Formal<br /><span className="text-white/25">Education</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6 border border-white/8 hover-glow-white transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/8">
                <FiBookOpen size={22} className="text-white/50" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-white mb-1">
                  Bachelor of Computer Applications
                </h3>
                <p className="text-sm text-white/35 mb-4">IFIM College · 2023 – 2026</p>
                <div className="space-y-2 text-xs text-white/35 leading-relaxed">
                  <p>Core focus in software engineering, database systems, and computer networks.</p>
                  <p>Active involvement in computing clubs and technical projects.</p>
                  <p>Capstone project: Smart Event Management Portal with real-world integrations.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8"
          >
            Certifications
          </motion.h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="glass rounded-2xl p-5 border border-white/6 hover-glow-white hover:bg-white/[0.025] transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="p-2.5 rounded-xl bg-emerald-500/8 border border-emerald-500/12 group-hover:border-emerald-500/20 transition-colors">
                  <FiAward size={16} className="text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">{cert.title}</h4>
                  <p className="text-xs text-white/30">{cert.issuer}</p>
                  <p className="text-xs text-white/20 font-mono mt-1">{cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
