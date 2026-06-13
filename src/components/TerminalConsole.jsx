import React, { useState, useRef, useEffect } from 'react';
import { FiTerminal, FiChevronUp, FiChevronDown, FiX, FiCornerDownLeft } from 'react-icons/fi';
import { playClick, playTick, playGlitch, playSuccess } from '../utils/audio';

const commandsList = {
  help: 'Display available operating system directives.',
  about: 'Print bio specs for engineer Vinarma Jayakaran R.',
  skills: 'Query technologies loaded in skill matrix core.',
  projects: 'Inspect available project portfolios.',
  experience: 'Query work experience history database.',
  contact: 'Reveal system link options (Email, LinkedIn, GitHub).',
  system: 'Execute visual diagnostic analysis report.',
  matrix: 'Inject digital matrix rain override [ON/OFF].',
  clear: 'Flush command buffer logs.'
};

export default function TerminalConsole({ onMatrixToggle, matrixActive }) {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([
    { type: 'system', text: 'VJR_OS Terminal CLI // V1.0.4' },
    { type: 'system', text: 'Type "help" to see available directives.' },
    { type: 'system', text: '' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const consoleEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = inputValue.trim().toLowerCase();
    if (!cmd) return;

    playClick();

    // Add command to log
    const nextHistory = [...history, { type: 'input', text: `vin_user@vjr_os:~$ ${inputValue}` }];

    switch (cmd) {
      case 'help':
        nextHistory.push({ type: 'system', text: 'Available Directives:' });
        Object.entries(commandsList).forEach(([name, desc]) => {
          nextHistory.push({ type: 'output', text: `  ${name.padEnd(12)} - ${desc}` });
        });
        break;

      case 'about':
        nextHistory.push(
          { type: 'output', text: 'NAME: Vinarma Jayakaran R' },
          { type: 'output', text: 'DEGREE: Bachelor of Computer Applications (BCA)' },
          { type: 'output', text: 'GOAL: Full Stack Developer / Software Engineer' },
          { type: 'output', text: 'LOCATION: Banglore, India' },
          { type: 'output', text: 'BIO: Passionate about software development, full-stack systems, AI nodes, and cloud engineering. Quick learner and team player looking to add value.' }
        );
        break;

      case 'skills':
        nextHistory.push(
          { type: 'output', text: '--- FRONTEND CORE ---' },
          { type: 'output', text: '  React.js, JavaScript, HTML5, CSS3, Tailwind CSS' },
          { type: 'output', text: '--- BACKEND & DB ---' },
          { type: 'output', text: '  Node.js, Express.js, MongoDB, MySQL' },
          { type: 'output', text: '--- PROGRAMMING ---' },
          { type: 'output', text: '  Python, Java, C, C++, Data Structures & Algorithms' },
          { type: 'output', text: '--- TOOLS & PROTOCOLS ---' },
          { type: 'output', text: '  Git, GitHub, VS Code, Computer Networks' }
        );
        break;

      case 'projects':
        nextHistory.push(
          { type: 'output', text: '1. Smart Event Management Portal - Multi-user event hub' },
          { type: 'output', text: '2. SSH Brute Force Detector - Security tracking node' },
          { type: 'output', text: '3. FraudTracker AI - Real Time Fraud Detection System' },
          { type: 'output', text: '4. Movie Search Application - Cinematic catalog engine' },
          { type: 'output', text: '5. Banking Order Management System - SQL admin panel' },
          { type: 'system', text: 'Use dashboard PROJECT_DB panel for full visual blueprints.' }
        );
        break;

      case 'experience':
        nextHistory.push(
          { type: 'output', text: 'WORK_LOG_01: NTTF Web Development Internship' },
          { type: 'output', text: 'WORK_LOG_02: Build AI Internship (Architecting cognitive agents)' },
          { type: 'output', text: 'WORK_LOG_03: Catalyst Team Newsletter Editor (Strategy & editing)' }
        );
        break;

      case 'contact':
        nextHistory.push(
          { type: 'output', text: 'EMAIL: vinarmajayakaranr@gmail.com' },
          { type: 'output', text: 'LINKEDIN: linkedin.com/in/vinarma-jayakaran' },
          { type: 'output', text: 'GITHUB: github.com/vinarma-j' }
        );
        break;

      case 'system':
        playGlitch();
        nextHistory.push(
          { type: 'system', text: 'Running system diagnostics...' },
          { type: 'output', text: '  [OK] Audio Handshake Synthesizer active' },
          { type: 'output', text: '  [OK] Dotted matrix circuit active' },
          { type: 'output', text: '  [OK] Blueprint SVG node-linker stable' },
          { type: 'output', text: '  [STATUS] System core cooling optimal' }
        );
        break;

      case 'matrix':
        onMatrixToggle();
        playSuccess();
        nextHistory.push({
          type: 'system',
          text: `Matrix cyber override toggled ${!matrixActive ? 'ON' : 'OFF'}.`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputValue('');
        return;

      default:
        nextHistory.push({
          type: 'error',
          text: `Unknown directive "${cmd}". Type "help" for a list of system capabilities.`
        });
        break;
    }

    nextHistory.push({ type: 'system', text: '' });
    setHistory(nextHistory);
    setInputValue('');
  };

  const toggleOpen = () => {
    playClick();
    setIsOpen(!isOpen);
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={`fixed bottom-8 right-6 z-45 transition-all duration-300 w-80 md:w-96 select-none font-mono ${isOpen ? 'h-72' : 'h-10'
      }`}>
      {/* Header bar */}
      <div
        onClick={toggleOpen}
        onMouseEnter={playTick}
        className={`glass-panel rounded-t border-zinc-800 flex items-center justify-between px-3 py-2 cursor-pointer transition-all duration-200 select-none ${isOpen ? 'bg-zinc-950/95 border-b-0' : 'bg-zinc-900/80 hover:bg-zinc-900 hover:border-zinc-700 shadow-glass rounded-b'
          }`}
      >
        <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
          <FiTerminal className={`text-cyber-cyan ${isOpen ? 'animate-pulse' : ''}`} />
          <span>VINARMA_CONSOLE_SYS</span>
        </div>
        <div className="flex items-center gap-1.5 text-zinc-500">
          {isOpen ? <FiChevronDown size={14} /> : <FiChevronUp size={14} />}
        </div>
      </div>

      {/* Terminal Content */}
      {isOpen && (
        <div
          onClick={focusInput}
          className="glass-panel-heavy rounded-b border-t-0 border-zinc-800 h-60 flex flex-col p-3 text-xs overflow-hidden bg-black/95 select-text"
        >
          {/* Scrollable logs */}
          <div className="flex-1 overflow-y-auto space-y-1.5 scrollbar-none mb-2">
            {history.map((log, index) => (
              <div
                key={index}
                className={
                  log.type === 'input'
                    ? 'text-white font-medium'
                    : log.type === 'error'
                      ? 'text-red-500'
                      : log.type === 'system'
                        ? 'text-cyber-cyan/90'
                        : 'text-zinc-400'
                }
              >
                {log.text}
              </div>
            ))}
            <div ref={consoleEndRef} />
          </div>

          {/* Form input line */}
          <form onSubmit={handleCommandSubmit} className="flex items-center gap-1 border-t border-zinc-900 pt-2 text-white">
            <span className="text-cyber-green font-bold select-none">vin_user@vjr_os:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                playTick();
              }}
              className="flex-1 bg-transparent focus:outline-none caret-cyber-cyan border-none p-0 text-white selection:bg-zinc-800"
              autoFocus
              maxLength={40}
            />
            <button type="submit" className="text-zinc-600 hover:text-white p-0.5">
              <FiCornerDownLeft size={10} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
