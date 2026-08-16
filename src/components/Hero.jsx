import React from 'react';
import { ArrowRight, FileDown, Terminal, Cpu, Server, Layers, Code, ShieldCheck, MapPin } from 'lucide-react';
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

          {/* Right Column: Code Window / Tech Card visual */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel-glow rounded-2xl p-5 text-left border border-slate-800 relative z-10 shadow-2xl">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 font-mono text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-slate-400">DeveloperProfile.java</span>
                </div>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Spring Security
                </span>
              </div>

              {/* Code Snippet */}
              <pre className="font-mono text-xs leading-relaxed overflow-x-auto text-slate-300">
                <code>
                  <span className="text-purple-400">@RestController</span>{"\n"}
                  <span className="text-purple-400">@RequestMapping</span>(<span className="text-emerald-300">"/api/v1/developer"</span>){"\n"}
                  <span className="text-blue-400">public class</span> <span className="text-amber-300">DivyanshDubey</span> &#123;{"\n\n"}
                  {"  "}<span className="text-purple-400">@Autowired</span>{"\n"}
                  {"  "}<span className="text-blue-400">private</span> <span className="text-amber-300">SpringBootService</span> backend;{"\n"}
                  {"  "}<span className="text-purple-400">@Autowired</span>{"\n"}
                  {"  "}<span className="text-blue-400">private</span> <span className="text-amber-300">PyTorchEngine</span> aiEngine;{"\n\n"}
                  {"  "}<span className="text-purple-400">@GetMapping</span>(<span className="text-emerald-300">"/overview"</span>){"\n"}
                  {"  "}<span className="text-blue-400">public</span> <span className="text-cyan-300">ResponseEntity</span>&lt;<span className="text-amber-300">CandidateProfile</span>&gt; getProfile() &#123;{"\n"}
                  {"    "}<span className="text-blue-400">return</span> <span className="text-cyan-300">ResponseEntity</span>.ok(new <span className="text-amber-300">CandidateProfile</span>({"\n"}
                  {"      "}<span className="text-emerald-300">"Divyansh Dubey"</span>,{"\n"}
                  {"      "}<span className="text-emerald-300">"Java Backend & AI/ML"</span>,{"\n"}
                  {"      "}<span className="text-cyan-300">List</span>.of(<span className="text-emerald-300">"E-TradeLoop"</span>, <span className="text-emerald-300">"DermaAI"</span>){"\n"}
                  {"    "}));{"\n"}
                  {"  "}&#125;{"\n"}
                  &#125;
                </code>
              </pre>

              {/* Bottom Quick Feature Highlights */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <Server className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Spring Boot + JWT</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Cpu className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>PyTorch & LLMs</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Layers className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>React Full-Stack</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Code className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>DSA & LeetCode</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
