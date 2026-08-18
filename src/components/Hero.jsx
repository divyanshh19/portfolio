import React, { useState } from 'react';
import { ArrowRight, FileDown, Terminal, Cpu, Server, Layers, Code, ShieldCheck, MapPin, Check, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState('security'); // 'security' | 'vision' | 'ai' | 'metrics'
  const [copied, setCopied] = useState(false);

  const coreBadges = [
    { label: "Java", color: "from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30" },
    { label: "Spring Boot", color: "from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30" },
    { label: "Backend Engineering", color: "from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30" },
    { label: "Computer Vision", color: "from-sky-500/20 to-teal-500/20 text-sky-300 border-sky-500/30" },
    { label: "Full-Stack Development", color: "from-indigo-500/20 to-purple-500/20 text-indigo-300 border-indigo-500/30" },
    { label: "AI/ML", color: "from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30" },
    { label: "Problem Solving", color: "from-rose-500/20 to-orange-500/20 text-rose-300 border-rose-500/30" },
  ];

  const codeSnippets = {
    security: {
      file: "SecurityConfig.java",
      lang: "Java",
      tag: "Spring Security 6 + JWT",
      code: `@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
            .csrf(AbstractHttpConfigurer::disable)
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/v1/auth/**").permitAll()
                .requestMatchers("/api/v1/trade/**").hasRole("USER")
                .requestMatchers("/api/v1/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .sessionManagement(s -> s.sessionCreationPolicy(STATELESS))
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
            .build(); // Secured 15+ RESTful APIs
    }
}`
    },
    vision: {
      file: "DermaAI_Vision.py",
      lang: "Python",
      tag: "PyTorch CNN + ViT Ensemble",
      code: `import torch
import torchvision.models as models

class LesionEnsemble(nn.Module):
    def __init__(self):
        super().__init__()
        # Preprocessed with OpenCV DullRazor & CLAHE
        self.effnet = models.efficientnet_b0(pretrained=True)
        self.convnext = models.convnext_tiny(pretrained=True)
        self.deit = torch.hub.load('facebook/deit', 'deit_tiny_patch16_224')

    def forward(self, img_tensor):
        l1, l2, l3 = self.effnet(img_tensor), self.convnext(img_tensor), self.deit(img_tensor)
        logits = (l1 + l2 + l3) / 3.0
        return torch.softmax(logits / 1.5, dim=-1) # 93.27% ROC-AUC on HAM10000`
    },
    ai: {
      file: "LoopBotService.java",
      lang: "Java",
      tag: "OpenAI GPT-4o-mini + Fallback",
      code: `@Service
public class LoopBotService {

    @Autowired
    private OpenAiChatModel chatModel;

    public TradeFairnessResult evaluateBarter(Product p1, Product p2) {
        try {
            String prompt = String.format("Analyze barter fairness between %s and %s", p1, p2);
            String aiResponse = chatModel.call(prompt);
            return parseAiDecision(aiResponse);
        } catch (Exception ex) {
            // Rule-based fallback mechanism for guaranteed uptime
            return executeRuleBasedFallback(p1, p2);
        }
    }
}`
    },
    metrics: {
      file: "SystemMetrics.json",
      lang: "JSON",
      tag: "Telemetry & Performance",
      code: `{
  "candidate": "Divyansh Dubey",
  "positioning": "Aspiring Java Backend & AI/ML Engineer",
  "location": "Bengaluru, Karnataka, India",
  "verified_achievements": {
    "derma_ai_roc_auc": "93.27%",
    "secured_rest_apis": "15+ (Spring Security & JWT)",
    "leetcode_streak": "2x 100 Days Badges",
    "rnsit_cgpa": "8.80 / 10 (Honors CSE AI/ML)"
  },
  "live_deployments": ["DermaAI (Vercel)", "E-TradeLoop (Vercel)"]
}`
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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

          {/* Right Column: Interactive Multi-Tab Code IDE Window */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel-glow rounded-2xl p-5 text-left border border-slate-800 relative z-10 shadow-2xl space-y-4">
              
              {/* Window Header with File Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800 font-mono text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                <div className="flex items-center gap-1 overflow-x-auto max-w-full">
                  <button
                    onClick={() => setActiveTab('security')}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                      activeTab === 'security'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                        : 'text-slate-400 hover:text-slate-200 bg-slate-900/60'
                    }`}
                  >
                    Security.java
                  </button>
                  <button
                    onClick={() => setActiveTab('vision')}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                      activeTab === 'vision'
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 font-bold'
                        : 'text-slate-400 hover:text-slate-200 bg-slate-900/60'
                    }`}
                  >
                    DermaAI.py
                  </button>
                  <button
                    onClick={() => setActiveTab('ai')}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                      activeTab === 'ai'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold'
                        : 'text-slate-400 hover:text-slate-200 bg-slate-900/60'
                    }`}
                  >
                    LoopBot.java
                  </button>
                  <button
                    onClick={() => setActiveTab('metrics')}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                      activeTab === 'metrics'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                        : 'text-slate-400 hover:text-slate-200 bg-slate-900/60'
                    }`}
                  >
                    Metrics.json
                  </button>
                </div>
              </div>

              {/* Sub-Header Indicator */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  {codeSnippets[activeTab].file}
                </span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-bold">
                    {codeSnippets[activeTab].tag}
                  </span>
                  <button
                    onClick={handleCopyCode}
                    className="p-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
                    aria-label="Copy Code"
                    title="Copy Code"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Interactive Code Display Box */}
              <div className="rounded-xl bg-slate-950 p-4 border border-slate-900 font-mono text-[11px] leading-relaxed text-slate-300 overflow-x-auto min-h-[260px] flex items-center">
                <pre className="w-full">
                  <code>{codeSnippets[activeTab].code}</code>
                </pre>
              </div>

              {/* Bottom Quick Feature Highlights */}
              <div className="pt-2 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <Server className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Spring Boot + JWT</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Cpu className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>PyTorch Vision & LLMs</span>
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
