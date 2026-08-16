import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, FileDown, CheckCircle2, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

export default function Contact({ onOpenResume }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative border-t border-slate-900 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Resume Banner CTA */}
        <div className="mb-20 p-8 rounded-3xl bg-gradient-to-r from-cyan-950/60 via-slate-900 to-indigo-950/60 border border-cyan-500/30 text-center space-y-4 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <span className="inline-block text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
            Recruiter & Hiring Portal
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Want to know more?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base font-sans">
            Review full technical specifications, project architecture details, and academic transcripts in the official resume.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 text-slate-950 font-mono text-sm font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all"
            >
              <FileDown className="w-5 h-5" />
              <span>Download Resume PDF</span>
            </button>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Let's Build Something Great
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Currently open to Java Backend Developer, Full-Stack Developer, and AI/ML Engineering opportunities in Bengaluru & Remote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="glass-panel p-8 rounded-2xl border border-slate-800 space-y-6 shadow-xl">
              
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2 border-b border-slate-800 pb-4">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                Contact Information
              </h3>

              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800/80 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Direct Email</div>
                  <div className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 font-mono mt-0.5">
                    {personalInfo.email}
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800/80 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Phone / WhatsApp</div>
                  <div className="text-sm font-semibold text-slate-200 group-hover:text-emerald-300 font-mono mt-0.5">
                    {personalInfo.phone}
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Current Location</div>
                  <div className="text-sm font-semibold text-slate-200 font-mono mt-0.5">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              {/* Social Accounts */}
              <div className="pt-2 flex flex-col gap-3 border-t border-slate-800">
                <span className="text-xs font-mono text-slate-400">Social & Code Profiles:</span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 text-xs font-mono transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>divyanshh19</span>
                  </a>
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 text-xs font-mono transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-pink-400 border border-slate-800 text-xs font-mono transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-2xl border border-slate-800 text-left shadow-xl">
              
              <h3 className="text-xl font-bold text-slate-100 mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800 text-center space-y-3 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-100">Message Received!</h4>
                  <p className="text-xs font-mono text-slate-300">
                    Thank you for reaching out, {formData.name}. Divyansh will respond to your message at {formData.email} promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Technical Recruiter / Hiring Manager"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Discuss open roles, backend architecture, or project details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-sm font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-mono text-sm font-bold shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
