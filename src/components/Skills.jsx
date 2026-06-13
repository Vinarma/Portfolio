import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPython, SiHtml5, SiCss, SiJavascript, SiGithub, SiTailwindcss } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { FiCpu, FiDatabase, FiCode, FiLayout, FiTool } from 'react-icons/fi';

const categories = [
  {
    title: 'Frontend',
    color: 'blue',
    skills: [
      { name: 'React.js',    icon: SiReact,       level: 85 },
      { name: 'JavaScript',  icon: SiJavascript,  level: 85 },
      { name: 'HTML5',       icon: SiHtml5,       level: 90 },
      { name: 'CSS3',        icon: SiCss,         level: 85 },
      { name: 'Tailwind',    icon: SiTailwindcss, level: 80 },
    ],
  },
  {
    title: 'Backend',
    color: 'purple',
    skills: [
      { name: 'Node.js',     icon: SiNodedotjs,  level: 80 },
      { name: 'Express.js',  icon: SiExpress,    level: 80 },
      { name: 'Python',      icon: SiPython,     level: 80 },
    ],
  },
  {
    title: 'Databases',
    color: 'teal',
    skills: [
      { name: 'MongoDB',     icon: SiMongodb,    level: 75 },
      { name: 'MySQL',       icon: SiMysql,      level: 80 },
    ],
  },
  {
    title: 'Languages',
    color: 'white',
    skills: [
      { name: 'Java',        icon: FaJava,       level: 75 },
      { name: 'C / C++',     icon: FiCode,       level: 70 },
      { name: 'Python',      icon: SiPython,     level: 80 },
    ],
  },
];

const colorMap = {
  blue:   { bar: 'bg-blue-500',   glow: 'shadow-[0_0_12px_rgba(59,130,246,0.5)]',   border: 'group-hover:border-blue-500/20',   label: 'text-blue-400',   bg: 'bg-blue-500/8' },
  purple: { bar: 'bg-purple-500', glow: 'shadow-[0_0_12px_rgba(168,85,247,0.5)]',   border: 'group-hover:border-purple-500/20', label: 'text-purple-400', bg: 'bg-purple-500/8' },
  teal:   { bar: 'bg-teal-400',   glow: 'shadow-[0_0_12px_rgba(20,184,166,0.5)]',   border: 'group-hover:border-teal-500/20',   label: 'text-teal-400',   bg: 'bg-teal-500/8' },
  white:  { bar: 'bg-white',      glow: 'shadow-[0_0_12px_rgba(255,255,255,0.3)]',   border: 'group-hover:border-white/20',      label: 'text-white/70',   bg: 'bg-white/8' },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-6 h-px bg-white/20" />
          <span className="text-xs font-mono text-white/30 uppercase tracking-[0.2em]">Technical Skills</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16"
        >
          Technologies I work with
        </motion.h2>

        {/* Categories */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, ci) => {
            const c = colorMap[cat.color];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.08 }}
                className={`glass rounded-2xl p-6 border border-white/6 transition-all duration-300 group ${c.border}`}
              >
                {/* Category header */}
                <div className="flex items-center gap-2.5 mb-6">
                  <span className={`text-xs font-mono font-medium uppercase tracking-widest ${c.label}`}>
                    {cat.title}
                  </span>
                </div>

                {/* Skill rows */}
                <div className="space-y-4">
                  {cat.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className={`p-1.5 rounded-md ${c.bg}`}>
                              <Icon size={13} className="text-white/60" />
                            </div>
                            <span className="text-sm text-white/70 font-medium">{skill.name}</span>
                          </div>
                          <span className="text-xs text-white/20 font-mono">{skill.level}%</span>
                        </div>
                        {/* Progress bar */}
                        <div className="h-px w-full bg-white/6 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full ${c.bar} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: ci * 0.1 + 0.2, ease: 'easeOut' }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional tools strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 glass rounded-2xl p-5 border border-white/6"
        >
          <p className="text-xs font-mono text-white/20 uppercase tracking-widest mb-4">Also comfortable with</p>
          <div className="flex flex-wrap gap-2">
            {['Data Structures & Algorithms', 'Computer Networks', 'Git & GitHub', 'REST APIs', 'Linux CLI', 'OOP Design', 'Database Design'].map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-lg bg-white/4 border border-white/6 text-xs text-white/40 hover:text-white/60 hover:bg-white/6 transition-colors cursor-default">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
