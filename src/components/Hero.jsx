import React from 'react';
import { ArrowRight, FileDown, Terminal, Cpu, Server, Layers, Code, ShieldCheck, MapPin, Sparkles, CheckCircle2, Trophy, GraduationCap, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const coreBadges = [
    { label: "Java", color: "from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30" },
    { label: "Spring Boot", color: "from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30" },
    { label: "Backend Engineering", color: "from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30" },
    { label: "Computer Vision", color: "from-sky-500/20 to-teal-500/20 text-sky-300 border-sky-500/30" },
    { label: "Full-Stack Development", color: "from-indigo-500/20 to-purple-500/20 text-indigo-300 border-indigo-500/30" },
    { label: "AI/ML", color: "from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30" },
    { label: "Problem Solving", color: "from-rose-500/20 to-orange-500/20 text-rose-300 border-rose-500/30" },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-grid-pattern overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability / Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-300">
                Aspiring Java Backend & Full-Stack Engineer
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" />
                Bengaluru
              </span>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100">
                {personalInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl font-mono font-medium text-gradient">
                {personalInfo.primaryRole}
              </p>
            </div>

            {/* Short Intro */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans">
              "{personalInfo.shortIntro}"
            </p>

            {/* Visual Focus Pills */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {coreBadges.map((badge, idx) => (
                <span 
                  key={idx}
                  className={`px-3 py-1 text-xs font-mono font-semibold rounded-md bg-gradient-to-r ${badge.color} border shadow-sm transition-transform hover:scale-105`}
                >
                  {badge.label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700 hover:border-slate-600 transition-all hover:scale-[1.02]"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              {/* Social Links */}
              <div className="flex items-center gap-2 ml-1">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-all hover:scale-105"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-all hover:scale-105"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-pink-400 border border-slate-800 transition-all hover:scale-105"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">93.27%</div>
                <div className="text-xs text-slate-400 font-mono">ROC-AUC (DermaAI)</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">15+</div>
                <div className="text-xs text-slate-400 font-mono">Secured REST APIs</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-amber-400">2x 100</div>
                <div className="text-xs text-slate-400 font-mono">LeetCode Streak</div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Candidate Highlights & Credentials Card Deck */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel-glow rounded-3xl p-6 sm:p-7 text-left border border-slate-800/90 relative z-10 shadow-2xl space-y-5">
              
              {/* Card Title Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm font-bold text-slate-100">
                      Engineering Highlights
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400">Core Technical Capabilities</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-300 font-mono text-[10px] font-bold">
                  ★ Verified
                </span>
              </div>

              {/* 4 Clean Visual Highlight Cards */}
              <div className="space-y-3">
                
                {/* Highlight 1: Java Backend */}
                <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-all space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-cyan-300 flex items-center gap-2">
                      <Server className="w-4 h-4 text-cyan-400" />
                      Java & Spring Boot Backend
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      15+ REST APIs
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-6">
                    Spring Security, JWT stateless tokens, BCrypt hashing, JPA Specifications, and Docker.
                  </p>
                </div>

                {/* Highlight 2: PyTorch Computer Vision */}
                <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-all space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-purple-300 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-purple-400" />
                      PyTorch Computer Vision
                    </span>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                      93.27% ROC-AUC
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-6">
                    CNN + ViT Ensemble (EfficientNet, ConvNeXt, DeiT) on HAM10000 with Grad-CAM explainability.
                  </p>
                </div>

                {/* Highlight 3: Generative AI & LLMs */}
                <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-all space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-emerald-300 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      Generative AI & LLM Engine
                    </span>
                    <span className="text-[10px] text-emerald-400 font-semibold bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      GPT-4o-mini
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-6">
                    LoopBot barter chatbot & Nemotron 3.5 medical safety guardrails with rule-based fallbacks.
                  </p>
                </div>

                {/* Highlight 4: Data Structures & Algorithms */}
                <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-all space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-amber-300 flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-amber-400" />
                      Data Structures & Algorithms
                    </span>
                    <span className="text-[10px] text-amber-400 font-bold bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800">
                      2x 100 Days Streak
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-6">
                    Daily problem solving in Java on LeetCode with OOP optimization & complexity analysis.
                  </p>
                </div>

              </div>

              {/* Bottom Academic Standing Banner */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span>RNSIT B.E. (Honors) CSE AI&ML</span>
                </div>
                <span className="font-semibold text-cyan-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                  2023 – 2027
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
