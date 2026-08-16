import React, { useState } from 'react';
import { ArrowRight, ArrowDown, Cpu, Server, Shield, Database, Sparkles, Layers, Eye, CheckCircle2, RefreshCw } from 'lucide-react';

export default function ArchitectureDiagram({ projectId }) {
  const [activeTab, setActiveTab] = useState('system'); // 'system' | 'ai' | 'flow'

  if (projectId === 'e-tradeloop') {
    return (
      <div className="bg-slate-950/80 rounded-xl p-5 border border-slate-800 space-y-4">
        {/* Diagram Mode Tabs */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-xs font-bold text-slate-200">Architecture & AI Workflow Visualizer</span>
          </div>
          <div className="flex gap-1.5 font-mono text-[11px]">
            <button
              onClick={() => setActiveTab('system')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeTab === 'system' 
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                  : 'text-slate-400 hover:text-slate-200 bg-slate-900'
              }`}
            >
              System Flow
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeTab === 'ai' 
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                  : 'text-slate-400 hover:text-slate-200 bg-slate-900'
              }`}
            >
              AI Integration
            </button>
            <button
              onClick={() => setActiveTab('flow')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeTab === 'flow' 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                  : 'text-slate-400 hover:text-slate-200 bg-slate-900'
              }`}
            >
              Barter Pipeline
            </button>
          </div>
        </div>

        {/* Tab 1: System Flow */}
        {activeTab === 'system' && (
          <div className="space-y-3 py-2">
            <p className="text-[11px] font-mono text-slate-400">Microservice Architecture & REST API Flow</p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
              <div className="px-3 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-medium shadow-sm flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" /> React Frontend
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block" />
              <ArrowDown className="w-4 h-4 text-slate-500 sm:hidden" />

              <div className="px-3 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-medium shadow-sm flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5" /> Spring Boot REST API
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block" />
              <ArrowDown className="w-4 h-4 text-slate-500 sm:hidden" />

              <div className="px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-medium shadow-sm flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" /> Security / JWT (15+ APIs)
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block" />
              <ArrowDown className="w-4 h-4 text-slate-500 sm:hidden" />

              <div className="px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 font-medium shadow-sm flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5" /> JPA / MySQL (Aiven)
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: AI Integration */}
        {activeTab === 'ai' && (
          <div className="space-y-3 py-2">
            <p className="text-[11px] font-mono text-slate-400">OpenAI GPT-4o-mini & Rule-Based Fallback Architecture</p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
              <div className="px-3 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-medium">
                Spring Boot Service
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block" />
              <ArrowDown className="w-4 h-4 text-slate-500 sm:hidden" />

              <div className="px-3 py-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 font-semibold shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> OpenAI GPT-4o-mini
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block" />
              <ArrowDown className="w-4 h-4 text-slate-500 sm:hidden" />

              <div className="px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-medium">
                LoopBot / Generative Desc / Trade Fairness
              </div>
            </div>
            <div className="text-[10px] font-mono text-cyan-400/90 text-center bg-cyan-950/40 py-1 px-3 rounded-md border border-cyan-800/40">
              * Includes automated Rule-Based Fallback mechanism for prompt stability
            </div>
          </div>
        )}

        {/* Tab 3: Barter Pipeline */}
        {activeTab === 'flow' && (
          <div className="space-y-3 py-2">
            <p className="text-[11px] font-mono text-slate-400">Cashless Points-Based Trading Decision Flow</p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
              <span className="px-2.5 py-1.5 rounded-md bg-slate-900 border border-slate-700 text-slate-300">Product</span>
              <ArrowRight className="w-3 h-3 text-slate-500" />
              <span className="px-2.5 py-1.5 rounded-md bg-slate-900 border border-slate-700 text-slate-300">Marketplace</span>
              <ArrowRight className="w-3 h-3 text-slate-500" />
              <span className="px-2.5 py-1.5 rounded-md bg-slate-900 border border-slate-700 text-slate-300">Points System</span>
              <ArrowRight className="w-3 h-3 text-slate-500" />
              <span className="px-2.5 py-1.5 rounded-md bg-purple-500/20 border border-purple-500/40 text-purple-300 font-semibold">AI Fairness Checker</span>
              <ArrowRight className="w-3 h-3 text-slate-500" />
              <span className="px-2.5 py-1.5 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-semibold">Trade Decision</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (projectId === 'derma-ai') {
    return (
      <div className="bg-slate-950/80 rounded-xl p-5 border border-slate-800 space-y-4">
        {/* Diagram Mode Tabs */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-purple-400" />
            <span className="font-mono text-xs font-bold text-slate-200">ML Pipeline & Microservices Visualizer</span>
          </div>
          <div className="flex gap-1.5 font-mono text-[11px]">
            <button
              onClick={() => setActiveTab('system')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeTab === 'system' 
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                  : 'text-slate-400 hover:text-slate-200 bg-slate-900'
              }`}
            >
              ML Pipeline
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeTab === 'ai' 
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                  : 'text-slate-400 hover:text-slate-200 bg-slate-900'
              }`}
            >
              LLM Assistant
            </button>
            <button
              onClick={() => setActiveTab('flow')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeTab === 'flow' 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                  : 'text-slate-400 hover:text-slate-200 bg-slate-900'
              }`}
            >
              Microservices Flow
            </button>
          </div>
        </div>

        {/* Tab 1: ML Pipeline (DullRazor -> CLAHE -> CNN+ViT -> Grad-CAM) */}
        {activeTab === 'system' && (
          <div className="space-y-3 py-2">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-mono text-slate-400">OpenCV Preprocessing & CNN + ViT Deep Ensemble</p>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                93.27% ROC-AUC
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
              <div className="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 flex items-center gap-1">
                <Eye className="w-3.5 h-3.5 text-cyan-400" /> Image
              </div>
              <ArrowRight className="w-3 h-3 text-slate-500" />

              <div className="px-2.5 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-medium">
                OpenCV Preprocessing (DullRazor / CLAHE)
              </div>
              <ArrowRight className="w-3 h-3 text-slate-500" />

              <div className="px-2.5 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/40 text-purple-300 font-bold shadow-md">
                CNN + ViT Ensemble (EfficientNet-B0 + ConvNeXt + DeiT)
              </div>
              <ArrowRight className="w-3 h-3 text-slate-500" />

              <div className="px-2.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-medium">
                Grad-CAM Visual Explainability
              </div>
            </div>

            <p className="text-[10px] font-mono text-slate-400 text-center">
              Trained on HAM10000 dataset using Focal Loss & Temperature Scaling.
            </p>
          </div>
        )}

        {/* Tab 2: LLM Assistant */}
        {activeTab === 'ai' && (
          <div className="space-y-3 py-2">
            <p className="text-[11px] font-mono text-slate-400">NVIDIA Nemotron 3.5 & Medical Safety Guardrails</p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
              <div className="px-3 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-medium">
                Spring Boot Microservice
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block" />
              <ArrowDown className="w-4 h-4 text-slate-500 sm:hidden" />

              <div className="px-3 py-2 rounded-lg bg-purple-500/10 border border-purple-500/40 text-purple-300 font-bold shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> NVIDIA Nemotron 3.5
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block" />
              <ArrowDown className="w-4 h-4 text-slate-500 sm:hidden" />

              <div className="px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-medium">
                Medical Guardrails & Patient Explanation
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Microservices Flow */}
        {activeTab === 'flow' && (
          <div className="space-y-3 py-2">
            <p className="text-[11px] font-mono text-slate-400">Spring Boot Microservices & Python FastAPI Service Integration</p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
              <span className="px-2.5 py-1.5 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">React Frontend</span>
              <ArrowRight className="w-3 h-3 text-slate-500" />
              <span className="px-2.5 py-1.5 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">Spring Boot REST Gateway</span>
              <ArrowRight className="w-3 h-3 text-slate-500" />
              <span className="px-2.5 py-1.5 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300">Python FastAPI ML Service</span>
              <ArrowRight className="w-3 h-3 text-slate-500" />
              <span className="px-2.5 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">PyTorch Neural Net</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
}
