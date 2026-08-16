import React from 'react';
import { achievementsData } from '../data/portfolioData';
import { Trophy, Presentation, Award, Target, CheckCircle2 } from 'lucide-react';

export default function Achievements() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Trophy': return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Presentation': return <Presentation className="w-5 h-5 text-cyan-400" />;
      case 'Award': return <Award className="w-5 h-5 text-purple-400" />;
      case 'Target': return <Target className="w-5 h-5 text-emerald-400" />;
      default: return <Trophy className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
            Honors & Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Key Achievements & Technical Deliveries
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Recognitions earned through consistent practice, workshop instruction, and hackathon participation.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl flex flex-col justify-between text-left group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                      {getIcon(item.icon)}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-medium text-cyan-400">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-100">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs font-semibold shrink-0">
                    {item.badge}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-sans mt-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified Achievement</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
