import React from 'react';
import { personalInfo, heroStats } from '../../data/portfolioData';
import { Github, Linkedin, Mail, FileDown, ArrowRight, MapPin, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[95vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center overflow-hidden">
      {/* Background Radial Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-spider-red/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-spider-blue/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtext, CTAs */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#14161f] border border-white/10 shadow-lg text-xs font-mono">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-spider-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-spider-red"></span>
              </span>
              <span className="text-slate-200 font-semibold">{personalInfo.statusBadge}</span>
            </div>

            {/* Display Title with Cursive Accent */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-100 tracking-tight leading-[1.1]">
                HELLO, I'M{' '}
                <span className="font-cursive text-spider-red text-6xl sm:text-7xl lg:text-8xl font-normal inline-block transform -rotate-2 hover:rotate-0 transition-transform">
                  Arun
                </span>
                <br />
                <span className="text-gradient-spider">COMPUTER</span>{' '}
                <span className="font-cursive text-spider-blue text-5xl sm:text-6xl lg:text-7xl font-normal lowercase tracking-normal">
                  engineer
                </span>
              </h1>

              <p className="text-lg sm:text-xl font-medium text-slate-300 max-w-2xl leading-relaxed">
                7th sem computer engineering student.
              </p>
            </div>

            {/* Meta Location & Leadership Badge */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 font-mono">
              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-4 h-4 text-spider-red" />
                <span>{personalInfo.location}</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-1.5 text-spider-blue font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>3x Elected Class Representative</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-spider-red text-white hover:bg-spider-redGlow transition-all duration-200 shadow-lg shadow-spider-red/30 hover:scale-105"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Arun_Bhatt_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-[#14161f] border border-white/15 text-slate-200 hover:border-spider-red/50 hover:bg-white/5 transition-all duration-200"
              >
                <FileDown className="w-4 h-4 text-spider-red" />
                <span>Resume PDF</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider text-slate-400 hover:text-white transition-all"
              >
                <Mail className="w-4 h-4 text-spider-blue" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Profiles:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#14161f] border border-white/10 text-slate-300 hover:text-white hover:border-spider-red/50 hover:bg-spider-red/10 transition-all shadow-md"
                aria-label="GitHub Profile"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#14161f] border border-white/10 text-slate-300 hover:text-white hover:border-spider-blue/50 hover:bg-spider-blue/10 transition-all shadow-md"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-xl bg-[#14161f] border border-white/10 text-slate-300 hover:text-white hover:border-spider-red/50 hover:bg-spider-red/10 transition-all shadow-md"
                aria-label="Send Email"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Photo Frame */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            
            {/* Profile Photo Frame with Spider Web Accent Border */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-spider-red via-spider-blue to-spider-red rounded-3xl blur-xl opacity-40 group-hover:opacity-80 transition duration-500" />
              
              <div className="relative rounded-3xl bg-[#14161f] border border-white/15 p-2.5 overflow-hidden max-w-[280px] sm:max-w-[340px] shadow-2xl">
                <img
                  src={personalInfo.avatarUrl}
                  alt="Arun Bhatt - Computer Engineering Student"
                  className="w-full h-[340px] sm:h-[400px] object-cover object-top rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                
                {/* Photo Badge Overlay */}
                <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-xl bg-[#0d0e12]/90 backdrop-blur-xl border border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-spider-red animate-pulse" />
                    <span className="text-slate-200 font-semibold">7th Sem BCT</span>
                  </div>
                  <span className="text-spider-blue font-bold">SEC Lalitpur</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Stats Grid Bar */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {heroStats.map((stat, i) => (
            <div key={i} className="glass-card glass-card-hover p-5 rounded-2xl text-center md:text-left">
              <div className="text-[11px] font-mono text-slate-400 mb-1 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-white">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

