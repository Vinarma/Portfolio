import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiShield, FiCalendar, FiDatabase, FiFilm, FiGlobe } from 'react-icons/fi';
import HoloWindow from './HoloWindow';

const FILTERS = ['All', 'Web', 'Security', 'Database'];

const projects = [
  {
    id: 1,
    title: 'Smart Event Management Portal',
    desc: 'Full-stack event organization system with registration, automated reminders, and feedback collection.',
    category: 'Web',
    icon: FiCalendar,
    accent: 'blue',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express'],
    sysId: 'EVENT_PORTAL',
    fullDesc: 'A full-stack event organization system developed to manage client registrations, automate reminders, and capture feedback. Integrated with background processes to trigger communications based on registration status.',
    link: 'https://github.com/vinarma-j',
    logs: [
      '[INFO] Booting event portal service...',
      '[OK] Connected to MongoDB instance.',
      '[OK] Socket launched on port 5000.',
      '[INFO] Scheduling cron tasks for email reminders...',
      '[OK] Cron daemon initialized: 2 reminders queued.',
      '[INFO] POST /api/events/register received',
      '[OK] QR entry code generated: HASH_90812BA.',
      '[OK] Transaction confirmed.',
    ],
  },
  {
    id: 2,
    title: 'SSH Brute Force Detector',
    desc: 'Real-time security monitoring tool that detects anomalous SSH auth attempts with GeoIP threat mapping.',
    category: 'Security',
    icon: FiShield,
    accent: 'purple',
    tech: ['Python', 'GeoIP', 'IPtables', 'Sockets'],
    sysId: 'SSH_DETECTOR',
    fullDesc: 'A cybersecurity utility monitoring active SSH connections, logging authentication failures, and blocking malicious sources automatically. Features GeoIP queries to map coordinate domains.',
    link: 'https://github.com/vinarma-j',
    logs: [
      '[INFO] SSH monitor daemon starting...',
      '[OK] Binding to port 22.',
      '[WARN] Multiple auth failures from 185.220.101.4!',
      '[INFO] GeoIP lookup: Berlin, DE (TOR Exit Node)',
      '[ALERT] Blacklisting source IP...',
      '[OK] iptables rule applied.',
    ],
  },
  {
    id: 3,
    title: 'FraudTracker AI',
    desc: 'AI-powered fraud detection system using behavioral analytics and anomaly scoring to flag suspicious transactions in real time.',
    icon: FiShield,
    accent: 'teal',
    tech: ['React', 'Machine Learning', 'REST API', 'Node.js', 'MongoDB'],
    sysId: 'FRAUD_TRACKER',
    fullDesc: 'An AI-driven fraud detection platform that analyzes transaction patterns, applies behavioral scoring models, and surfaces anomalies in real time. Integrates with REST APIs to deliver instant risk assessment and alert dashboards.',
    link: 'https://github.com/vinarma',
    logs: [
      '[INFO] Scrubber environment initialized...',
      '[OK] Received: photo_banglore.jpg (5.2MB)',
      '[INFO] Parsing EXIF... Found GPS Location, Device: iPhone 13',
      '[ALERT] Deleting metadata...',
      '[OK] Clean payload: 4.8MB',
    ],
  },
  {
    id: 4,
    title: 'Movie Search Application',
    desc: 'Film discovery app querying TMDB API with genre filtering, search, and upcoming movie listings.',
    category: 'Web',
    icon: FiFilm,
    accent: 'blue',
    tech: ['React.js', 'TMDB API', 'JavaScript', 'CSS3'],
    sysId: 'MOVIE_SEARCH',
    fullDesc: 'A sleek web application querying TMDB API to list film details, upcoming theatre releases, and categorizing by active search criteria.',
    link: 'https://github.com/vinarma',
    logs: [
      '[INFO] TMDB Gateway connected.',
      '[OK] Loaded 20 cinema titles.',
      '[INFO] Search: "Interstellar"',
      '[OK] ID 157336. Rating: 8.6/10.',
    ],
  },
  {
    id: 5,
    title: 'Banking Order Management System',
    desc: 'Enterprise relational dashboard for managing customer orders, transactions, and admin reporting.',
    category: 'Database',
    icon: FiDatabase,
    accent: 'purple',
    tech: ['Java', 'MySQL', 'JDBC', 'Admin UI'],
    sysId: 'BANK_ADMIN',
    fullDesc: 'A relational integration dashboard for banking administration teams to track user profiles, log financial orders, and extract system metrics from connected SQL engines.',
    link: 'https://github.com/vinarma',
    logs: [
      '[INFO] JDBC driver initialized...',
      '[OK] MySQL connection pooled.',
      '[INFO] SELECT * FROM customer_orders ORDER BY date DESC',
      '[OK] 1,452 tuples indexed.',
    ],
  },
];

const accentStyles = {
  blue: 'from-blue-500/8 to-transparent border-blue-500/10 hover:border-blue-500/20',
  purple: 'from-purple-500/8 to-transparent border-purple-500/10 hover:border-purple-500/20',
  teal: 'from-teal-500/8 to-transparent border-teal-500/10 hover:border-teal-500/20',
};

const accentIcon = {
  blue: 'bg-blue-500/10 text-blue-400',
  purple: 'bg-purple-500/10 text-purple-400',
  teal: 'bg-teal-500/10 text-teal-400',
};

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const visible = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
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
          <span className="text-xs font-mono text-white/30 uppercase tracking-[0.2em]">Projects</span>
        </motion.div>

        {/* Heading + filter row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Selected work
          </motion.h2>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-2"
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${filter === f
                  ? 'bg-white/10 text-white border border-white/15'
                  : 'text-white/30 hover:text-white/60 border border-transparent'
                  }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  onClick={() => setSelected(p)}
                  className={`relative rounded-2xl p-5 border cursor-pointer bg-gradient-to-br transition-all duration-300 group ${accentStyles[p.accent]} hover:-translate-y-0.5`}
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2.5 rounded-xl ${accentIcon[p.accent]}`}>
                      <Icon size={18} />
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg bg-white/5">
                      <FiArrowUpRight size={14} className="text-white/50" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-sm font-semibold text-white mb-2 leading-snug group-hover:text-white transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-white/40 leading-relaxed mb-4">{p.desc}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {p.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-md bg-white/4 text-white/30 font-mono">
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 3 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/4 text-white/20 font-mono">
                        +{p.tech.length - 3}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <HoloWindow isOpen={!!selected} onClose={() => setSelected(null)} project={selected} />
    </section>
  );
}
