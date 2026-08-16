import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { Cpu, Coffee, Database, Sparkles, Code, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-amber-400" />;
      case 'Database': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'Code': return <Code className="w-5 h-5 text-indigo-400" />;
      default: return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="certifications" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
            Verified Knowledge
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Certifications & Technical Assessments
          </h2>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-lg flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {getIcon(cert.icon)}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-100 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-0.5">
                    {cert.issuer}
                  </p>
                </div>
              </div>
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
