import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar } from 'react-icons/fi';

const experienceItems = [
  {
    role: 'AI Developer Intern',
    company: 'Build AI',
    location: 'Remote',
    period: '2026',
    desc: 'Architected automation pipelines integrating LLM workflows for cognitive agent tasks. Built API routes connecting AI backends to React frontends.',
    tags: ['LLM Workflows', 'Node.js', 'API Design', 'React'],
    accent: 'blue',
  },
  {
    role: 'Cybersecurity Intern',
    company: 'NTTF',
    location: 'Banglore, India',
    period: '2025 – 2026',
    desc: 'Worked in the cybersecurity domain — configured enterprise routers and switches for secure network infrastructure. Conducted login bypass assessments using Burp Suite and performed penetration testing on web applications.',
    tags: ['Networking', 'Burp Suite', 'Router Config', 'Pen Testing', 'Cybersecurity'],
    accent: 'purple',
  },
  {
    role: 'Software Developer Intern',
    company: 'RSR Technologies',
    location: 'Banglore, India',
    period: '2024 – 2025',
    desc: 'Built and maintained banking and inventory management systems. Developed core modules for transaction processing, stock tracking, and reporting dashboards using Java and MySQL.',
    tags: ['Java', 'MySQL', 'Banking Systems', 'Inventory Management'],
    accent: 'teal',
  },
  {
    role: 'Newsletter Editor',
    company: 'IFIM College',
    location: 'Banglore, India',
    period: '2025 – 2026',
    desc: 'Authored technical articles on web engineering and AI, managed publishing workflows, and coordinated with design and writing teams for quarterly issues.',
    tags: ['Technical Writing', 'Coordination', 'Publishing'],
    accent: 'blue',
  },
];

const accentClass = {
  blue: { dot: 'bg-blue-500', line: 'border-blue-500/20', tag: 'bg-blue-500/8 text-blue-400 border-blue-500/15' },
  purple: { dot: 'bg-purple-500', line: 'border-purple-500/20', tag: 'bg-purple-500/8 text-purple-400 border-purple-500/15' },
  teal: { dot: 'bg-teal-400', line: 'border-teal-500/20', tag: 'bg-teal-500/8 text-teal-400 border-teal-500/15' },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="max-w-3xl mx-auto">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-6 h-px bg-white/20" />
          <span className="text-xs font-mono text-white/30 uppercase tracking-[0.2em]">Experience</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16"
        >
          Where I've worked
        </motion.h2>

        {/* Timeline */}
        <div className="relative pl-6 space-y-0">
          {/* Vertical track */}
          <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-white/15 via-white/6 to-transparent" />

          {experienceItems.map((item, i) => {
            const ac = accentClass[item.accent];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pb-12 last:pb-0"
              >
                {/* Dot */}
                <div className={`absolute -left-[23px] top-1.5 w-3 h-3 rounded-full border-2 border-black ${ac.dot}`} />

                <div className="glass rounded-2xl p-6 border border-white/6 hover:border-white/12 hover:bg-white/[0.025] transition-all duration-300 group">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3">
                    <div className="flex items-center gap-1.5 text-xs text-white/25 font-mono">
                      <FiCalendar size={11} />
                      {item.period}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-white/25 font-mono">
                      <FiMapPin size={11} />
                      {item.location}
                    </div>
                  </div>

                  <h3 className="text-base font-semibold text-white mb-0.5 group-hover:text-white/90">
                    {item.role}
                  </h3>
                  <p className="text-sm text-white/30 mb-3 font-medium">{item.company}</p>
                  <p className="text-sm text-white/45 leading-relaxed mb-4">{item.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span key={t} className={`text-[10px] px-2.5 py-1 rounded-lg border font-mono ${ac.tag}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
