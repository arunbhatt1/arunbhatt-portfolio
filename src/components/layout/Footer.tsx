import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { Github, Linkedin, Mail, Phone, Code2, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0a0b0e] relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#14161f] border border-white/10 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-spider-red" />
              </div>
              <span className="font-display font-extrabold text-xl text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm max-w-md leading-relaxed">
              7th-semester Computer Engineering student at Sagarmatha Engineering College (SEC). Passionate about full-stack mobile development, RESTful APIs, and systems engineering.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spider-red/10 border border-spider-red/30 text-spider-red text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-spider-red animate-pulse" />
              <span>Available for internships & software engineering roles</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="text-slate-300 hover:text-spider-red transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-300 hover:text-spider-red transition-colors">
                  About & Education
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-300 hover:text-spider-red transition-colors">
                  Projects & Architectures
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-300 hover:text-spider-red transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-300 hover:text-spider-red transition-colors">
                  Leadership & Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-spider-red transition-colors">
                  Contact Arun
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Details */}
          <div>
            <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              Connect
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-spider-red" />
                  <span>github.com/{personalInfo.githubUsername}</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-spider-blue" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-spider-red" />
                  <span>{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors font-mono"
                >
                  <Phone className="w-4 h-4 text-spider-blue" />
                  <span>{personalInfo.phone}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <span>&copy; {currentYear} {personalInfo.name}</span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2 rounded-xl bg-[#14161f] border border-white/10 text-slate-300 hover:border-spider-red hover:text-spider-red transition-all shadow-md"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

