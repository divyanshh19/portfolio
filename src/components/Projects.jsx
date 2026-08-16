import React from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import { Code, Terminal, Sparkles } from 'lucide-react';

export default function Projects({ onOpenModal }) {
  return (
    <section id="projects" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
            Featured Systems & Applications
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Production-Style Backend & AI Engineering
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans leading-relaxed">
            Deep-dive showcase of production-ready microservices, secure Spring Boot APIs, and PyTorch deep learning vision systems.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} onOpenModal={onOpenModal} />
          ))}
        </div>

        {/* Code Quality Banner */}
        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-left shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-slate-200 font-bold font-mono text-sm">Full Source Code & Commit History Available</h3>
              <p className="text-slate-400 text-xs mt-0.5">Explore modular Spring Boot service structures, JPA specifications, and PyTorch model architectures directly on GitHub.</p>
            </div>
          </div>
          <a
            href="https://github.com/divyanshh19"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold transition-all shadow-md shadow-cyan-500/20"
          >
            Visit GitHub Profile &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
