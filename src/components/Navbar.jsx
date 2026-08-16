import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'about', 'skills', 'projects', 'dsa', 'achievements', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Problem Solving', href: '#dsa', id: 'dsa' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-2 text-lg font-bold font-mono group tracking-tight"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-slate-950 font-black shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              DD
            </span>
            <span className="text-slate-100 group-hover:text-cyan-400 transition-colors">
              Divyansh<span className="text-cyan-400">.Dubey</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 font-mono text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  activeSection === link.id
                    ? 'text-cyan-400 bg-slate-900/80 border border-cyan-500/30'
                    : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-900/50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-900 transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-900 transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-pink-400 hover:bg-slate-900 transition-colors"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <button
              onClick={onOpenResume}
              className="ml-2 flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 rounded-lg shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="flex sm:hidden items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-md"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-900 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2.5 rounded-lg font-mono text-sm ${
                activeSection === link.id
                  ? 'text-cyan-400 bg-slate-900 border border-cyan-500/30 font-semibold'
                  : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <div className="flex gap-3">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-pink-400"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenResume();
              }}
              className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold text-slate-950 bg-cyan-400 rounded-lg"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
