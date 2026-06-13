import React, { useState, useEffect } from 'react';
import { FiVolume2, FiVolumeX, FiRadio, FiActivity, FiClock } from 'react-icons/fi';
import { toggleMute, getMuteState, playClick, playSuccess } from '../utils/audio';

export default function HUD({ activeSection }) {
  const [time, setTime] = useState('');
  const [ping, setPing] = useState(12);
  const [cpu, setCpu] = useState(2.4);
  const [uptime, setUptime] = useState(0);
  const [muted, setMuted] = useState(getMuteState());

  useEffect(() => {
    // Clock
    const clockInterval = setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);

    // Latency fluctuation
    const pingInterval = setInterval(() => {
      setPing((prev) => {
        const offset = Math.random() > 0.5 ? 1 : -1;
        const next = prev + offset;
        return Math.max(9, Math.min(next, 20));
      });
    }, 3000);

    // CPU fluctuation
    const cpuInterval = setInterval(() => {
      setCpu((prev) => {
        const diff = (Math.random() - 0.5) * 1.5;
        const next = prev + diff;
        return Math.max(0.8, Math.min(next, 6.2));
      });
    }, 2000);

    // Uptime ticker
    const uptimeInterval = setInterval(() => {
      setUptime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(clockInterval);
      clearInterval(pingInterval);
      clearInterval(cpuInterval);
      clearInterval(uptimeInterval);
    };
  }, []);

  const handleMuteToggle = () => {
    const nextMuted = toggleMute();
    setMuted(nextMuted);
    if (!nextMuted) {
      setTimeout(() => {
        playSuccess();
      }, 50);
    }
  };

  const formatUptime = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <>
      {/* Top HUD bar */}
      <div className="fixed top-0 left-0 right-0 z-40 h-10 bg-[#050505]/80 backdrop-blur-md border-b border-cyber-grid px-4 flex items-center justify-between text-[10px] md:text-xs text-zinc-500 font-mono select-none">
        {/* Left Status */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-white font-semibold">
            <span className="w-1.5 h-1.5 bg-cyber-cyan rounded-full animate-pulse"></span>
            VINARMA_SYS // V1.0.4
          </div>
          <div className="hidden sm:flex items-center gap-1">
            <FiRadio className="text-zinc-600 animate-pulse" />
            NODE: *****
          </div>
        </div>

        {/* Center Title */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block text-zinc-400 tracking-[0.2em] font-medium">
          COGNITIVE OPERATING SYSTEM
        </div>

        {/* Right Info */}
        <div className="flex items-center gap-4">
          {/* Latency */}
          <div className="flex items-center gap-1">
            <FiActivity className="text-cyber-green" />
            <span>PING: {ping}ms</span>
          </div>

          {/* Live Clock */}
          <div className="flex items-center gap-1 text-zinc-300 font-bold">
            <FiClock className="text-zinc-500" />
            <span>{time || '00:00:00'}</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={handleMuteToggle}
            className={`flex items-center justify-center p-1 rounded border transition-all duration-200 ${muted
                ? 'border-zinc-800 text-zinc-600 hover:border-zinc-700 hover:text-zinc-400'
                : 'border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan/10'
              }`}
            title={muted ? "Unmute system feedback" : "Mute system feedback"}
          >
            {muted ? <FiVolumeX size={12} /> : <FiVolume2 size={12} />}
          </button>
        </div>
      </div>

      {/* Bottom HUD bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 h-8 bg-[#050505]/80 backdrop-blur-md border-t border-cyber-grid px-4 flex items-center justify-between text-[10px] text-zinc-500 font-mono select-none">
        {/* Active Section */}
        <div className="flex items-center gap-1.5 uppercase">
          <span className="text-zinc-600">SECTION:</span>
          <span className="text-white font-medium tracking-wider">{activeSection || 'HERO'}</span>
        </div>

        {/* CPU diagnostics */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1">
            <span>UPTIME:</span>
            <span className="text-zinc-300">{formatUptime(uptime)}</span>
          </div>

          <div className="flex items-center gap-2">
            <span>CPU LOAD:</span>
            <div className="w-16 h-1.5 bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden flex">
              <div
                className="h-full bg-cyber-green transition-all duration-500"
                style={{ width: `${cpu * 16}%` }}
              />
            </div>
            <span className="text-cyber-green min-w-[30px] text-right">{cpu.toFixed(1)}%</span>
          </div>
        </div>
      </div>
    </>
  );
}
