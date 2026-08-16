import React from 'react';
import { X, ExternalLink, Shield, Cpu, Server, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import ArchitectureDiagram from './ArchitectureDiagram';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-y-auto my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
          <div>
            <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
              {project.subtitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 flex items-center gap-3 mt-1">
              <span>{project.title}</span>
              {project.metric && (
                <span className="px-3 py-1 text-xs font-mono font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-800 rounded-full shadow-sm">
                  ★ {project.metric.value} {project.metric.label}
                </span>
              )}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Overview Tagline */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-300 text-base leading-relaxed font-sans">
            {project.tagline}
          </div>

          {/* Architecture Visualization Component */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              Architecture & Data Flow
            </h3>
            <ArchitectureDiagram projectId={project.id} />
          </div>

          {/* Key Implementation Highlights */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Key Technical Implementations
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {project.highlights.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80 text-sm text-slate-300"
                >
                  <span className="shrink-0 w-6 h-6 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs flex items-center justify-center font-bold">
                    0{idx + 1}
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specific Engineering Focus Breakdown */}
          {project.id === 'e-tradeloop' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-cyan-500/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-300">
                  <Shield className="w-4 h-4 text-cyan-400" /> Security & REST API Layer
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  15+ RESTful APIs secured with Spring Security, JWT stateless tokens, BCrypt hashing, and role-based access control (USER vs ADMIN). Dynamic search built with Spring Data JPA Specifications.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-purple-500/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-300">
                  <Sparkles className="w-4 h-4 text-purple-400" /> LoopBot & AI Trade Engine
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Powered by OpenAI GPT-4o-mini with generative descriptions and trade fairness checking. Equipped with rule-based fallback mechanisms for continuous uptime.
                </p>
              </div>
            </div>
          )}

          {project.id === 'derma-ai' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-emerald-500/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-300">
                  <Cpu className="w-4 h-4 text-emerald-400" /> Deep Learning & Computer Vision
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  CNN + ViT Ensemble (EfficientNet-B0, ConvNeXt-Tiny, DeiT-Tiny) trained on HAM10000. OpenCV preprocessing with DullRazor & CLAHE with Grad-CAM visual heatmaps.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-cyan-500/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-300">
                  <Server className="w-4 h-4 text-cyan-400" /> Microservices & LLM Guardrails
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Spring Boot microservice architecture communicating via REST APIs with Python FastAPI. Integrated NVIDIA Nemotron 3.5 with safety guardrails for patient explanations.
                </p>
              </div>
            </div>
          )}

          {/* Technology Stack Grid */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono font-bold text-slate-200 uppercase tracking-wider">
              Technology Stack Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-slate-950 text-cyan-300 border border-slate-800 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer CTAs inside modal */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs font-semibold border border-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>View Repository on GitHub</span>
              </a>
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Application Demo</span>
                </a>
              )}
            </div>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 font-mono text-xs transition-colors border border-slate-800"
            >
              Close Window
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
