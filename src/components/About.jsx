import React from 'react';
import { Server, Brain, Code2, Shield, CheckCircle2, Terminal } from 'lucide-react';
import { personalInfo, aboutPillars } from '../data/portfolioData';

export default function About() {
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'Server': return <Server className="w-6 h-6 text-cyan-400" />;
      case 'Brain': return <Brain className="w-6 h-6 text-purple-400" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-emerald-400" />;
      default: return <Terminal className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Engineering Secure Backends & Intelligent AI Systems
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
            {personalInfo.summary}
          </p>
        </div>

        {/* Three Core Visual Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutPillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="glass-panel p-8 rounded-2xl relative group hover:-translate-y-1 transition-all duration-300 border border-slate-800 hover:border-slate-700 shadow-xl"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r ${
                idx === 0 ? 'from-cyan-500 to-blue-500' :
                idx === 1 ? 'from-purple-500 to-pink-500' :
                'from-emerald-500 to-teal-500'
              }`} />

              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                {getIcon(pillar.icon)}
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-3 flex items-center justify-between">
                <span>{pillar.title}</span>
              </h3>

              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                {pillar.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {pillar.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-900/90 text-slate-300 border border-slate-800"
                  >
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-slate-200 font-bold text-sm font-mono">Clean Architecture & Security First</h4>
              <p className="text-slate-400 text-xs mt-0.5">Focus on OOP design patterns, RESTful conventions, role-based JWT security, and verified ML model accuracy.</p>
            </div>
          </div>
          <a
            href="#projects"
            className="shrink-0 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 font-mono text-xs font-semibold border border-slate-700 transition-colors"
          >
            Explore Projects &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
