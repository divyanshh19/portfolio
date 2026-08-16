import React from 'react';
import { X, FileDown, ExternalLink, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const directDownloadUrl = "https://drive.google.com/uc?export=download&id=1OQ9nzJA7A_XT9Qwl_D-eCIutivWDLSrp";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <FileDown className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-100">Divyansh Dubey — Official Resume</h2>
              <p className="text-xs font-mono text-cyan-400">Verified Technical Resume</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Highlights */}
        <div className="space-y-4 mb-8 text-sm text-slate-300 font-sans">
          <p className="leading-relaxed">
            Download or view Divyansh Dubey's official resume covering hands-on Java Spring Boot backend engineering, microservices architecture, PyTorch deep learning models, and algorithm problem-solving achievements.
          </p>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs font-mono">
            <div className="flex items-center gap-2 text-cyan-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full-Stack & Microservices Architecture Breakdown</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Verified 93.27% ROC-AUC Deep Learning Ensemble Results</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>LeetCode 2x 100-Day Streak & Academic Transcript Specs</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href={directDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-950 font-bold font-mono text-xs shadow-lg shadow-cyan-500/20 transition-all"
          >
            <FileDown className="w-4 h-4" />
            <span>Direct PDF Download</span>
          </a>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs font-semibold border border-slate-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-cyan-400" />
            <span>View on Google Drive</span>
          </a>
        </div>

      </div>
    </div>
  );
}
