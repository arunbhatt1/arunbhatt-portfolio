import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { educationData } from '../../data/portfolioData';
import { GraduationCap, Languages, Cpu, CheckCircle, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="01."
          title="About Me & Education"
          subtitle="A comprehensive look at my academic journey, engineering focus, and background."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Background & Core Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card glass-card-hover p-7 sm:p-8 rounded-3xl space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                  <Cpu className="w-5 h-5 text-spider-red" />
                  <span>Engineering Background</span>
                </h3>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-spider-blue/10 border border-spider-blue/30 text-spider-blue font-semibold">
                  7th Sem BCT
                </span>
              </div>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I am a 7th-semester <strong className="text-white">Computer Engineering (BCT)</strong> student at <strong className="text-white">Sagarmatha Engineering College (SEC)</strong>, affiliated with Tribhuvan University (IOE). My practical expertise spans building cross-platform mobile apps with <strong className="text-spider-red">Flutter & Firebase</strong>, engineering JWT-authenticated RESTful backends with <strong className="text-spider-blue">Node.js & Express</strong>, and mastering lower-level systems & algorithms in <strong className="text-slate-100">C and C++</strong>.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Beyond coding, I emphasize software architecture, UML/DFD modeling, and engineering documentation on Overleaf. I have been democratically elected as <strong className="text-spider-red">Class Representative (CR)</strong> for three consecutive terms, bridging students and faculty administration.
              </p>

              {/* Core Strengths Checklist */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-3.5">
                  Core Engineering Pillars
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle className="w-4 h-4 text-spider-red shrink-0" />
                    <span>Flutter & Firebase Mobile Apps</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle className="w-4 h-4 text-spider-blue shrink-0" />
                    <span>REST API Architecture (Node/JWT)</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle className="w-4 h-4 text-spider-red shrink-0" />
                    <span>Algorithms & DSA in C++</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle className="w-4 h-4 text-spider-blue shrink-0" />
                    <span>UML / DFD Systems Modeling</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="glass-card glass-card-hover p-6 rounded-3xl">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Languages className="w-5 h-5 text-spider-blue" />
                <span>Languages</span>
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <span className="px-3.5 py-1.5 rounded-xl bg-[#14161f] border border-white/10 text-xs text-white font-medium">
                  Nepali <strong className="text-spider-red font-semibold">(Native)</strong>
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-[#14161f] border border-white/10 text-xs text-white font-medium">
                  English <strong className="text-spider-blue font-semibold">(Professional)</strong>
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-[#14161f] border border-white/10 text-xs text-slate-300">
                  Hindi
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-[#14161f] border border-white/10 text-xs text-slate-300">
                  Doteli
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
              <GraduationCap className="w-6 h-6 text-spider-blue" />
              <span>Academic Timeline</span>
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-spider-red/30 space-y-7">
              {educationData.map((edu, index) => (
                <div key={index} className="relative group">
                  {/* Glowing Web Node Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full bg-[#0d0e12] border-2 border-spider-red group-hover:border-spider-blue group-hover:scale-125 transition-all shadow-[0_0_8px_#e62429]" />

                  <div className="glass-card glass-card-hover p-6 rounded-2xl">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-xs text-spider-red font-bold">
                        {edu.period}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {edu.location}
                      </span>
                    </div>

                    <h4 className="text-base font-extrabold text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium mb-3">
                      {edu.institution}
                    </p>

                    {edu.status && (
                      <span className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 rounded-md bg-spider-red/10 text-spider-red border border-spider-red/20 text-xs font-mono font-semibold">
                        <Award className="w-3.5 h-3.5" />
                        <span>{edu.status}</span>
                      </span>
                    )}

                    {edu.details && (
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {edu.details.map((detail, dIdx) => (
                          <li key={dIdx} className="leading-relaxed flex items-start gap-2">
                            <span className="text-spider-blue font-bold">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

