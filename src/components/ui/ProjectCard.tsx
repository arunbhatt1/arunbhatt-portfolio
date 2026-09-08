import React, { useState } from 'react';
import { Project } from '../../types';
import { Github, ExternalLink, ChevronDown, ChevronUp, Layers, Calendar, CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden group">
      {/* Spider-Man Suit Accent Line */}
      {project.featured && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-spider-red via-spider-blue to-spider-red" />
      )}

      <div>
        {/* Card Header: Category & Year */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-spider-red/10 text-spider-red border border-spider-red/30">
            {project.category}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <Calendar className="w-3.5 h-3.5" />
            <span>{project.year}</span>
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 group-hover:text-spider-red transition-colors">
          {project.title}
        </h3>

        {/* Role */}
        {project.role && (
          <p className="text-xs text-spider-blue font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-spider-blue"></span>
            {project.role}
          </p>
        )}

        {/* Short Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-5">
          {project.shortDescription}
        </p>

        {/* Key Architecture Highlights */}
        {project.architectureHighlights && project.architectureHighlights.length > 0 && (
          <div className="mb-5 p-4 rounded-2xl bg-[#0d0e12]/80 border border-white/10">
            <div className="text-xs font-bold text-slate-400 mb-2.5 flex items-center gap-2">
              <Layers className="w-4 h-4 text-spider-red" />
              <span>Key Architecture & Highlights</span>
            </div>
            <ul className="space-y-2">
              {project.architectureHighlights.map((highlight, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-start gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-spider-red shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Expandable Technical Bullet Points */}
        {expanded && (
          <div className="mb-5 pt-4 border-t border-white/10 text-xs text-slate-300 space-y-2.5 animate-fadeIn">
            <div className="font-bold text-white font-mono text-[11px] uppercase tracking-wider">
              Complete Engineering Breakdown
            </div>
            <ul className="space-y-2">
              {project.fullDescription.map((desc, i) => (
                <li key={i} className="leading-relaxed flex items-start gap-2">
                  <span className="text-spider-blue font-bold">•</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Card Footer: Tech Stack & Action Links */}
      <div className="mt-5 pt-4 border-t border-white/10">
        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#0d0e12] text-slate-300 border border-white/10 hover:border-spider-blue/40 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions Bar */}
        <div className="flex items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-2.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View GitHub repository for ${project.title}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#14161f] border border-white/10 text-slate-200 hover:bg-spider-red hover:text-white hover:border-spider-red transition-all shadow-md"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo for ${project.title}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-spider-blue text-white hover:bg-blue-600 transition-all shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          {/* Read more / less button */}
          <button
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-spider-red transition-colors focus:outline-none"
          >
            <span>{expanded ? 'Less Details' : 'More Details'}</span>
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};

