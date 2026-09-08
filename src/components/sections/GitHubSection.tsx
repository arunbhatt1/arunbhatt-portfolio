import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { githubProfile } from '../../data/portfolioData';
import { Github, ExternalLink, Code } from 'lucide-react';

export const GitHubSection: React.FC = () => {
  return (
    <section id="github" className="py-24 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="05."
          title="GitHub & Open Source Repositories"
          subtitle="Explore source code, project architectures, and engineering implementations on GitHub."
        />

        {/* GitHub Highlight Banner */}
        <div className="glass-card p-7 sm:p-8 rounded-3xl mb-10 border-spider-red/30 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-spider-red/10 border border-spider-red/30 text-spider-red">
                  <Github className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    github.com/{githubProfile.username}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-mono">
                    {githubProfile.bio}
                  </p>
                </div>
              </div>
            </div>

            <a
              href={githubProfile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-spider-red text-white hover:bg-spider-redGlow transition-all duration-200 shadow-lg shadow-spider-red/30"
            >
              <span>Visit GitHub Profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Pinned Repositories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {githubProfile.pinnedRepositories.map((repo, index) => (
            <a
              key={index}
              href={githubProfile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-6 sm:p-7 rounded-3xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <Code className="w-5 h-5 text-spider-red" />
                    <span className="font-extrabold text-base text-white group-hover:text-spider-red transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-spider-blue/10 text-spider-blue border border-spider-blue/30">
                    {repo.stars}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.topics.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#0d0e12] text-slate-400 border border-white/10"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-spider-red" />
                    <span>{repo.language}</span>
                  </div>
                  <span className="group-hover:text-spider-red transition-colors flex items-center gap-1 font-bold">
                    <span>View repo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

