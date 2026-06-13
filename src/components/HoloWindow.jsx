import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiArrowUpRight, FiTerminal } from 'react-icons/fi';

export default function HoloWindow({ isOpen, onClose, project }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-xl pointer-events-auto glass-elevated rounded-2xl overflow-hidden">

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/8">
                <div>
                  <h3 className="text-sm font-semibold text-white">{project.title}</h3>
                  <p className="text-xs text-white/30 font-mono mt-0.5">{project.category}</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-white/30 hover:text-white hover:bg-white/6 transition-all duration-150"
                >
                  <FiX size={16} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-5 max-h-[60vh] overflow-y-auto">

                {/* Description */}
                <p className="text-sm text-white/50 leading-relaxed">{project.fullDesc}</p>

                {/* Tech stack */}
                <div>
                  <p className="text-xs font-mono text-white/20 uppercase tracking-widest mb-3">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/8 text-xs text-white/50 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Terminal log */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FiTerminal size={12} className="text-white/20" />
                    <p className="text-xs font-mono text-white/20 uppercase tracking-widest">Runtime log</p>
                  </div>
                  <div className="rounded-xl bg-black border border-white/6 p-4 font-mono text-xs space-y-1.5 max-h-36 overflow-y-auto">
                    {project.logs.map((line, i) => {
                      const isOk    = line.includes('[OK]');
                      const isWarn  = line.includes('[WARN]') || line.includes('[ALERT]');
                      const isInfo  = line.includes('[INFO]');
                      return (
                        <div key={i} className={`${isOk ? 'text-emerald-400' : isWarn ? 'text-amber-400' : isInfo ? 'text-blue-400' : 'text-white/30'}`}>
                          {line}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Footer */}
              {project.link && (
                <div className="px-6 py-4 border-t border-white/6 flex justify-end">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/6 hover:bg-white/10 border border-white/8 text-sm text-white/70 hover:text-white transition-all duration-200 font-medium"
                  >
                    View on GitHub
                    <FiArrowUpRight size={14} />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
