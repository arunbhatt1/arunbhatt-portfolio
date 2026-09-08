import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { experienceData } from '../../data/portfolioData';
import { ShieldCheck, Award, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="04."
          title="Leadership & Academic Experience"
          subtitle="Demonstrated organizational reliability, peer trust, and team leadership."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover p-7 sm:p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                <Award className="w-28 h-28 text-spider-red" />
              </div>

              <div>
                {/* Header Period & Location */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-spider-red/10 text-spider-red border border-spider-red/30 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>
                  {item.location && (
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-spider-blue" />
                      <span>{item.location}</span>
                    </span>
                  )}
                </div>

                {/* Role Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1.5 flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-spider-red shrink-0" />
                  <span>{item.role}</span>
                </h3>

                {/* Organization & Dept */}
                <div className="mb-5">
                  <p className="text-sm font-bold text-slate-200">
                    {item.organization}
                  </p>
                  {item.department && (
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {item.department}
                    </p>
                  )}
                </div>

                {/* Bullet Highlights */}
                <ul className="space-y-3 mt-4">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-3 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-spider-blue shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Tag */}
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-spider-red flex items-center gap-2 font-bold">
                <span className="w-2 h-2 rounded-full bg-spider-red animate-pulse" />
                <span>Elected Peer Leadership Role</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

