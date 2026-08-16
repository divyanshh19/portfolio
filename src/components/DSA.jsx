import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Code2, Trophy, Flame, ExternalLink, CheckCircle2, Zap, Brain } from 'lucide-react';

export default function DSA() {
  const dsaTopics = [
    "Arrays & Hashing",
    "Two Pointers & Sliding Window",
    "Stack & Queues",
    "Trees & Binary Search Trees",
    "Graph Algorithms (BFS/DFS)",
    "Dynamic Programming",
    "Heaps / Priority Queues",
    "Bit Manipulation"
  ];

  return (
    <section id="dsa" className="py-20 bg-slate-950/95 relative border-t border-slate-900 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel-glow rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden">
          
          {/* Subtle LeetCode Accent Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-semibold">
                <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>2× 100 Days LeetCode Streak</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
                Problem Solving
              </h2>

              <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
                "Consistently practicing Data Structures and Algorithms with Java, with a focus on building strong problem-solving fundamentals."
              </p>

              {/* DSA Topics Badges */}
              <div className="space-y-2">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Core DSA Topic Coverage:</p>
                <div className="flex flex-wrap gap-2">
                  {dsaTopics.map((topic, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-amber-400" />
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <a
                  href={personalInfo.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-mono text-xs font-bold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all"
                >
                  <Trophy className="w-4 h-4" />
                  <span>View LeetCode Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Card: LeetCode-Inspired Streak Showcase */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-amber-500/30 text-left space-y-6 shadow-xl relative">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-black">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-mono text-sm font-bold text-slate-100">Java Algorithmic Focus</h3>
                      <p className="text-[11px] font-mono text-slate-400">LeetCode Streak Verified</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-mono text-xs font-bold border border-amber-500/40">
                    2x 100 Days
                  </span>
                </div>

                {/* Streak Visual Grid Cards */}
                <div className="grid grid-cols-2 gap-3 font-mono">
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-2xl font-bold text-amber-400 flex items-center gap-1">
                      <Flame className="w-5 h-5 fill-amber-400 text-amber-400" />
                      100+
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">First 100-Day Streak</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-2xl font-bold text-amber-400 flex items-center gap-1">
                      <Trophy className="w-5 h-5 text-amber-400" />
                      100+
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">Second 100-Day Streak</div>
                  </div>
                </div>

                {/* Algorithmic Rigor Quote */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs font-mono text-slate-300 flex items-center gap-2">
                  <Brain className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Primary Language: Java (OOP, Time & Space Complexity Optimization)</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
