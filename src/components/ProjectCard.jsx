import React from 'react';
import { ExternalLink, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import ArchitectureDiagram from './ArchitectureDiagram';

export default function ProjectCard({ project, onOpenModal }) {
  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-2xl relative group flex flex-col justify-between overflow-hidden">
      
      {/* Background Gradient Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/5 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none group-hover:from-cyan-500/10 transition-colors" />

      <div>
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 font-mono text-xs font-semibold">
              {project.badgeText}
            </span>
            {project.metric && (
              <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-300 font-mono text-xs font-bold shadow-sm">
                ★ {project.metric.value} {project.metric.label}
              </span>
            )}
          </div>

          <button
            onClick={() => onOpenModal(project)}
            className="text-xs font-mono text-slate-400 hover:text-cyan-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
          >
            <span>Full Specs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Project Title & Subtitle */}
        <div className="space-y-1 mb-4 text-left">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm font-mono font-medium text-slate-400">
            {project.subtitle}
          </p>
        </div>

        {/* Short Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6 text-left font-sans">
          "{project.tagline}"
        </p>

        {/* Key Highlights List */}
        <div className="space-y-2.5 mb-6 text-left">
          {project.highlights.slice(0, 3).map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span className="leading-normal">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Interactive Architecture Flow Diagram Embedded */}
        <div className="mb-6">
          <ArchitectureDiagram projectId={project.id} />
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-8 text-left">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-900 text-slate-300 border border-slate-800/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => onOpenModal(project)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-slate-200 font-mono text-xs font-semibold border border-slate-700 transition-all hover:scale-[1.02]"
        >
          <Layers className="w-4 h-4 text-cyan-400" />
          <span>View Deep Dive Specs</span>
        </button>

        <div className="flex items-center gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
            aria-label={`View ${project.title} on GitHub`}
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
              aria-label={`Live Demo for ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

    </div>
  );
}
