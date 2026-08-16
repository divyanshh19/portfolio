import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Code, Server, Layout, Cpu, Database, Cloud, Wrench, BookOpen, Check } from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryIcons = {
    Languages: <Code className="w-4 h-4 text-amber-400" />,
    Backend: <Server className="w-4 h-4 text-cyan-400" />,
    Frontend: <Layout className="w-4 h-4 text-indigo-400" />,
    "Machine Learning": <Cpu className="w-4 h-4 text-purple-400" />,
    Databases: <Database className="w-4 h-4 text-emerald-400" />,
    "Cloud & Deployment": <Cloud className="w-4 h-4 text-sky-400" />,
    Tools: <Wrench className="w-4 h-4 text-rose-400" />,
    "Core Concepts": <BookOpen className="w-4 h-4 text-teal-400" />,
  };

  const categoryColors = {
    Languages: 'border-amber-500/30 text-amber-300 bg-amber-500/10 hover:bg-amber-500/20',
    Backend: 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20',
    Frontend: 'border-indigo-500/30 text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20',
    "Machine Learning": 'border-purple-500/30 text-purple-300 bg-purple-500/10 hover:bg-purple-500/20',
    Databases: 'border-emerald-500/30 text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20',
    "Cloud & Deployment": 'border-sky-500/30 text-sky-300 bg-sky-500/10 hover:bg-sky-500/20',
    Tools: 'border-rose-500/30 text-rose-300 bg-rose-500/10 hover:bg-rose-500/20',
    "Core Concepts": 'border-teal-500/30 text-teal-300 bg-teal-500/10 hover:bg-teal-500/20',
  };

  const categories = ['All', ...Object.keys(skillsData)];

  return (
    <section id="skills" className="py-24 bg-slate-950/90 relative border-t border-slate-900 bg-dots-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Proven Technical Skills & Tools
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Categorized technical stack based directly on practical project experience & core engineering fundamentals.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 scale-105'
                  : 'bg-slate-900/80 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skillsData)
            .filter(([category]) => selectedCategory === 'All' || selectedCategory === category)
            .map(([category, items]) => (
              <div
                key={category}
                className="glass-panel rounded-2xl p-6 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800/80">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      {categoryIcons[category]}
                    </div>
                    <h3 className="font-mono font-bold text-slate-200 text-sm">
                      {category}
                    </h3>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <div
                        key={skill}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border shadow-sm transition-all duration-200 ${categoryColors[category]}`}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/40 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>{items.length} Skills Verified</span>
                  <Check className="w-3 h-3 text-cyan-400" />
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}
