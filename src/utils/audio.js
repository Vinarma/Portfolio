// Web Audio API synthesizer for cyberpunk sound effects
let isMuted = true;

export const toggleMute = () => {
  isMuted = !isMuted;
  return isMuted;
};

export const getMuteState = () => {
  return isMuted;
};

// Create a audio context lazily
let audioCtx = null;
const getAudioContext = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
};

// Simple clean click beep
export const playClick = () => {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.05);
    
    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {
    console.warn('Audio context blocked or failed:', e);
  }
};

// Soft hover tick
export const playTick = () => {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1500, ctx.currentTime);
    
    gain.gain.setValueAtTime(0.015, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.02);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.02);
  } catch (e) {
    // Fail silently on quick hover interactions
  }
};

// Cyber sweep/glitch sound
export const playGlitch = () => {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(80, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(350, ctx.currentTime + 0.15);

    osc2.type = 'square';
    osc2.frequency.setValueAtTime(300, ctx.currentTime);
    osc2.frequency.linearRampToValueAtTime(900, ctx.currentTime + 0.15);
    
    gain.gain.setValueAtTime(0.03, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    
    osc.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc2.start();
    osc.stop(ctx.currentTime + 0.2);
    osc2.stop(ctx.currentTime + 0.2);
  } catch (e) {
    console.warn(e);
  }
};

// Success chime
export const playSuccess = () => {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    const time = ctx.currentTime;
    
    const playNote = (freq, delay, duration) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, time + delay);
      
      gain.gain.setValueAtTime(0.05, time + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, time + delay + duration);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(time + delay);
      osc.stop(time + delay + duration);
    };

    playNote(523.25, 0, 0.15);     // C5
    playNote(659.25, 0.08, 0.15);  // E5
    playNote(783.99, 0.16, 0.3);   // G5
    playNote(1046.50, 0.24, 0.4);  // C6
  } catch (e) {
    console.warn(e);
  }
};
