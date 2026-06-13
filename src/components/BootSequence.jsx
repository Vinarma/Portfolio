import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function BootSequence({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Quick progress animation
    const frames = [10, 30, 55, 75, 90, 100];
    const delays = [100, 250, 450, 650, 850, 1100];

    const timers = frames.map((val, i) =>
      setTimeout(() => setProgress(val), delays[i])
    );

    const exitTimer = setTimeout(() => {
      setDone(true);
      setTimeout(onComplete, 600);
    }, 1600);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
      animate={done ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight text-white font-mono"
        >
          VJR
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-white/40 text-sm font-light tracking-[0.2em] uppercase">
            Vinarma Jayakaran R
          </p>
          <p className="text-white/20 text-xs font-mono mt-1 tracking-wider">
            Full Stack Developer
          </p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-48"
        >
          <div className="h-px w-full bg-white/8 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white/40 rounded-full"
              style={{ width: `${progress}%`, transition: 'width 0.3s ease' }}
            />
          </div>
          <p className="text-white/15 text-[10px] font-mono text-center mt-2">{progress}%</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
