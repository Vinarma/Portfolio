import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiArrowUpRight, FiCheck, FiSend } from 'react-icons/fi';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | done

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 1800));
    setStatus('done');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      {/* Ambient orbs */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-blue-500/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-purple-500/4 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-6 h-px bg-white/20" />
          <span className="text-xs font-mono text-white/30 uppercase tracking-[0.2em]">Contact</span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Let's build something together
          </h2>
          <p className="text-white/40 text-lg leading-relaxed">
            Open to full-stack developer, software engineer, and web developer roles. Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left: Links */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              { icon: FiMail, label: 'Email', value: 'vinarmajayakaranr@gmail.com', href: 'mailto:vinarmajayakaranr@gmail.com' },
              { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/vinarma-jayakaran', href: 'https://www.linkedin.com/in/vinarma-jayakaran-r/' },
              { icon: FiGithub, label: 'GitHub', value: 'github.com/Vinarma', href: 'https://github.com/Vinarma' },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-5 rounded-2xl glass border border-white/6 hover:border-white/14 hover:bg-white/[0.025] transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/8 group-hover:border-white/14 transition-colors">
                    <Icon size={18} className="text-white/50 group-hover:text-white/70 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-white/25 font-mono mb-0.5">{label}</p>
                    <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors font-medium">{value}</p>
                  </div>
                </div>
                <FiArrowUpRight size={16} className="text-white/15 group-hover:text-white/40 transition-colors" />
              </a>
            ))}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 border border-white/8"
          >
            {status === 'done' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <FiCheck size={22} className="text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Message sent!</h3>
                <p className="text-sm text-white/40">I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                  { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                ].map(({ name, label, type, placeholder }) => (
                  <div key={name}>
                    <label className="block text-xs text-white/30 font-medium mb-1.5">{label}</label>
                    <input
                      type={type}
                      name={name}
                      required
                      value={form[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 focus:bg-white/5 transition-all duration-200"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs text-white/30 font-medium mb-1.5">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What are you working on?"
                    className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 focus:bg-white/5 transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all duration-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-black/20 border-t-black animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={15} />
                      Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-8 border-t border-white/6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/20 font-mono"
        >
          <span>© 2026 Vinarma Jayakaran R</span>
          <span>Full Stack Developer · Banglore, India</span>
        </motion.div>
      </div>
    </section>
  );
}
