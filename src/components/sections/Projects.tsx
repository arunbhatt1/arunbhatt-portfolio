import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/portfolioData';
import { Filter, FolderGit2 } from 'lucide-react';

const CATEGORIES = [
  'All Projects',
  'Mobile & Cloud',
  'Systems & Graphics',
  'DSA & Algorithms',
  'OOP'
] as const;

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');

  const filteredProjects = selectedCategory === 'All Projects'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="03."
          title="Featured Projects & Software Engineering"
          subtitle="Software projects built across academic coursework and practical engineering tracks."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-2 overflow-x-auto">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mr-2">
            <Filter className="w-4 h-4 text-spider-red" />
            <span>Filter:</span>
          </div>

          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 border ${
                  isActive
                    ? 'bg-spider-red text-white border-spider-red font-bold shadow-lg shadow-spider-red/30'
                    : 'bg-[#14161f] text-slate-300 border-white/10 hover:border-spider-blue/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Footnote about repository links */}
        <div className="mt-14 p-5 rounded-3xl glass-card flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2.5">
            <FolderGit2 className="w-5 h-5 text-spider-red" />
            <span>All repository links point directly to Arun Bhatt's GitHub profile.</span>
          </div>
          <a
            href="https://github.com/arunbhatt1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-spider-red hover:text-spider-redGlow font-bold flex items-center gap-1"
          >
            Browse github.com/arunbhatt1 &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

