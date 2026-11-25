import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { Github, Linkedin, Mail, FileDown, ArrowRight, MapPin } from 'lucide-react';

const facts = [
  { label: 'Studying', value: 'B.E. Computer Engineering, 8th semester' },
  { label: 'Builds with', value: 'Flutter, Node.js, C++' },
  { label: 'Leads', value: 'Class Representative for 4 straight semesters' },
];

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-8 text-left">
            <p className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#14161f] border border-white/10 text-sm text-slate-200">
              <span className="h-2 w-2 rounded-full bg-spider-red" aria-hidden="true" />
              {personalInfo.statusBadge}
            </p>

            <div className="space-y-5">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-50 tracking-tight leading-[1.05] text-balance">
                Arun Bhatt
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 max-w-[34ch] leading-snug text-balance">
                I build mobile apps, REST backends and C++ systems.
              </p>
            </div>

            <dl className="space-y-2.5 text-sm sm:text-base max-w-xl">
              {facts.map((f) => (
                <div key={f.label} className="flex gap-4 border-t border-white/10 pt-2.5">
                  <dt className="w-24 shrink-0 text-slate-400">{f.label}</dt>
                  <dd className="text-slate-200">{f.value}</dd>
                </div>
              ))}
              <div className="flex gap-4 border-t border-white/10 pt-2.5">
                <dt className="w-24 shrink-0 text-slate-400">Based in</dt>
                <dd className="text-slate-200 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-spider-red" aria-hidden="true" />
                  {personalInfo.location}
                </dd>
              </div>
            </dl>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-spider-red text-white hover:bg-spider-redGlow transition-colors duration-200"
              >
                View projects
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={personalInfo.resumePath}
                download="Arun_Bhatt_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-[#14161f] border border-white/15 text-slate-100 hover:border-spider-red/60 transition-colors duration-200"
              >
                <FileDown className="w-4 h-4 text-spider-red" aria-hidden="true" />
                Download resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full font-medium text-sm text-slate-300 hover:text-white transition-colors"
              >
                Contact me
              </a>
            </div>

            <div className="flex items-center gap-3">
              {[
                { href: personalInfo.github, label: 'GitHub profile', Icon: Github, ext: true },
                { href: personalInfo.linkedin, label: 'LinkedIn profile', Icon: Linkedin, ext: true },
                { href: `mailto:${personalInfo.email}`, label: 'Email Arun', Icon: Mail, ext: false },
              ].map(({ href, label, Icon, ext }) => (
                <a
                  key={label}
                  href={href}
                  {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="p-3 rounded-xl bg-[#14161f] border border-white/10 text-slate-300 hover:text-white hover:border-spider-red/50 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <figure className="rounded-3xl bg-[#14161f] border border-white/15 p-2.5 max-w-[300px] sm:max-w-[360px] shadow-[0_24px_48px_-24px_rgba(0,0,0,0.8)]">
              <img
                src={personalInfo.avatarUrl}
                alt="Arun Bhatt"
                width={340}
                height={400}
                className="w-full h-[340px] sm:h-[400px] object-cover object-top rounded-2xl"
                loading="eager"
                decoding="async"
              />
              <figcaption className="px-3 py-3 flex items-center justify-between text-sm">
                <span className="text-slate-200">8th semester, BCT</span>
                <span className="text-slate-400">Sagarmatha Engineering College</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
