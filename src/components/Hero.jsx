import React, { useState } from 'react';
import { ArrowRight, FileDown, Terminal, Cpu, Server, Layers, Code, ShieldCheck, MapPin, Sparkles, Activity, CheckCircle2, Zap, Trophy, Play } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [activeCommand, setActiveCommand] = useState('health'); // 'health' | 'vision' | 'ai' | 'leetcode'

  const coreBadges = [
    { label: "Java", color: "from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30" },
    { label: "Spring Boot", color: "from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30" },
    { label: "Backend Engineering", color: "from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30" },
    { label: "Computer Vision", color: "from-sky-500/20 to-teal-500/20 text-sky-300 border-sky-500/30" },
    { label: "Full-Stack Development", color: "from-indigo-500/20 to-purple-500/20 text-indigo-300 border-indigo-500/30" },
    { label: "AI/ML", color: "from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30" },
    { label: "Problem Solving", color: "from-rose-500/20 to-orange-500/20 text-rose-300 border-rose-500/30" },
  ];

  const commandResponses = {
    health: {
      cmd: "curl -X GET /api/v1/health",
      badge: "HTTP 200 OK",
      output: [
        "✓ Spring Boot Microservices: ONLINE (Port 8080)",
        "✓ Spring Security + JWT Filter: ACTIVE",
        "✓ 15+ RESTful APIs: SECURED & VERIFIED",
        "✓ Database: MySQL + Hibernate JPA (Connected)"
      ]
    },
    vision: {
      cmd: "python evaluate_vision.py --model ensemble",
      badge: "ROC-AUC: 93.27%",
      output: [
        "✓ Architecture: EfficientNet-B0 + ConvNeXt + DeiT-Tiny",
        "✓ Preprocessing: OpenCV DullRazor + CLAHE",
        "✓ Dataset: HAM10000 Skin Lesion Database",
        "✓ Model Explainability: Grad-CAM Heatmaps Enabled"
      ]
    },
    ai: {
      cmd: "java -jar loopbot-service.jar --llm=gpt-4o-mini",
      badge: "AI Active",
      output: [
        "✓ OpenAI GPT-4o-mini: Connected",
        "✓ Barter Trade Fairness Checker: RUNNING",
        "✓ Generative Product Desc Generator: READY",
        "✓ Fallback: Rule-Based Logic Enabled"
      ]
    },
    leetcode: {
      cmd: "leetcode stats --user=divyansh_dubey62",
      badge: "2x 100 Streak",
      output: [
        "✓ Active Streaks: 2x 100 Days Problem-Solving Badges",
        "✓ Primary Language: Java (OOP & DSA)",
        "✓ Focus Areas: Graphs, Trees, Dynamic Programming",
        "✓ Profile: leetcode.com/divyansh_dubey62"
      ]
    }
  };

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

          {/* Right Column: Interactive System Engineering Dashboard */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel-glow rounded-3xl p-6 text-left border border-slate-800/90 relative z-10 shadow-2xl space-y-6">
              
              {/* Card Header & Status Telemetry */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                    <Activity className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm font-bold text-slate-100 flex items-center gap-2">
                      System Architecture Core
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400">Production-Ready Microservices & AI</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 font-mono text-[10px] font-bold">
                  ● ACTIVE
                </span>
              </div>

              {/* 4 Interactive Feature Nodes Grid */}
              <div className="grid grid-cols-2 gap-3 text-left">
                
                {/* Node 1: Spring Boot */}
                <div 
                  onClick={() => setActiveCommand('health')}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all duration-200 ${
                    activeCommand === 'health' 
                      ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300 shadow-md shadow-cyan-500/10 scale-[1.02]' 
                      : 'bg-slate-950/70 border-slate-800/80 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <Server className="w-4 h-4 text-cyan-400" />
                    <span className="text-[10px] font-mono font-bold text-cyan-400">Java 21</span>
                  </div>
                  <div className="font-mono text-xs font-bold text-slate-200">Spring Boot REST</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-1">15+ REST APIs & JWT</div>
                </div>

                {/* Node 2: Computer Vision */}
                <div 
                  onClick={() => setActiveCommand('vision')}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all duration-200 ${
                    activeCommand === 'vision' 
                      ? 'bg-purple-500/10 border-purple-500/40 text-purple-300 shadow-md shadow-purple-500/10 scale-[1.02]' 
                      : 'bg-slate-950/70 border-slate-800/80 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <Cpu className="w-4 h-4 text-purple-400" />
                    <span className="text-[10px] font-mono font-bold text-emerald-400">93.27%</span>
                  </div>
                  <div className="font-mono text-xs font-bold text-slate-200">Computer Vision</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-1">PyTorch CNN + ViT</div>
                </div>

                {/* Node 3: Generative AI */}
                <div 
                  onClick={() => setActiveCommand('ai')}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all duration-200 ${
                    activeCommand === 'ai' 
                      ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300 shadow-md shadow-emerald-500/10 scale-[1.02]' 
                      : 'bg-slate-950/70 border-slate-800/80 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span className="text-[10px] font-mono font-bold text-emerald-400">GPT-4o</span>
                  </div>
                  <div className="font-mono text-xs font-bold text-slate-200">LoopBot LLM</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-1">Barter Trade AI Engine</div>
                </div>

                {/* Node 4: LeetCode DSA */}
                <div 
                  onClick={() => setActiveCommand('leetcode')}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all duration-200 ${
                    activeCommand === 'leetcode' 
                      ? 'bg-amber-500/10 border-amber-500/40 text-amber-300 shadow-md shadow-amber-500/10 scale-[1.02]' 
                      : 'bg-slate-950/70 border-slate-800/80 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <span className="text-[10px] font-mono font-bold text-amber-400">2x 100</span>
                  </div>
                  <div className="font-mono text-xs font-bold text-slate-200">LeetCode Streak</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-1">Java DSA Optimization</div>
                </div>

              </div>

              {/* Interactive Live Terminal Simulator Box */}
              <div className="rounded-2xl bg-slate-950 p-4 border border-slate-900 font-mono text-xs space-y-3 shadow-inner">
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-slate-300 font-semibold">{commandResponses[activeCommand].cmd}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-bold text-[10px]">
                    {commandResponses[activeCommand].badge}
                  </span>
                </div>

                {/* Command Output Stream */}
                <div className="space-y-1.5 text-[11px] text-slate-300">
                  {commandResponses[activeCommand].output.map((line, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">&gt;</span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between text-[10px] text-slate-500 border-t border-slate-900">
                  <span>Click any node above to execute command</span>
                  <span className="text-cyan-400 animate-pulse">● LIVE TELEMETRY</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
