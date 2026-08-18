import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-950/90 relative border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Education Timeline
          </h2>
        </div>

        {/* Compact Timeline Grid */}
        <div className="space-y-4">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left ${
                edu.isCurrent 
                  ? 'glass-panel-glow border-cyan-500/30' 
                  : 'glass-panel border-slate-800'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl border shrink-0 ${
                  edu.isCurrent 
                    ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' 
                    : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}>
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-mono text-cyan-300 mt-0.5">
                    {edu.institution}
                  </p>
                </div>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2 shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-800/80 font-mono">
                <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.period}
                </span>
                {edu.score && (
                  <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-xs font-bold">
                    {edu.score}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
