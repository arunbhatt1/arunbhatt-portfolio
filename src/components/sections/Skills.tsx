import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { skillCategories } from '../../data/portfolioData';
import { SkillBadge } from '../ui/SkillBadge';
import { Code2, Smartphone, Server, Globe, BrainCircuit, Wrench, Users } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Programming Languages": <Code2 className="w-5 h-5 text-spider-red" />,
  "Mobile Development": <Smartphone className="w-5 h-5 text-spider-blue" />,
  "Backend & APIs": <Server className="w-5 h-5 text-spider-red" />,
  "Frontend & Web": <Globe className="w-5 h-5 text-spider-blue" />,
  "CS Fundamentals & Architecture": <BrainCircuit className="w-5 h-5 text-slate-200" />,
  "Tools & Platforms": <Wrench className="w-5 h-5 text-amber-400" />,
  "Leadership & Soft Skills": <Users className="w-5 h-5 text-spider-red" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="02."
          title="Technical Skills & Competencies"
          subtitle="Directly sourced from my coursework, real-world development, and engineering stack."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const icon = CATEGORY_ICONS[category.title] || <Code2 className="w-5 h-5 text-spider-red" />;

            return (
              <div
                key={index}
                className="glass-card glass-card-hover p-6 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-5 pb-3.5 border-b border-white/10">
                    <div className="p-2.5 rounded-2xl bg-[#0d0e12] border border-white/10 shadow-inner">
                      {icon}
                    </div>
                    <h3 className="font-extrabold text-base text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <SkillBadge
                        key={sIdx}
                        name={skill.name}
                        level={skill.level}
                        highlight={skill.highlight}
                      />
                    ))}
                  </div>
                </div>

                {/* Subtext */}
                <div className="mt-5 pt-3 border-t border-white/10 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>{category.skills.length} competencies</span>
                  <span className="w-2 h-2 rounded-full bg-spider-red/40" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

