import React, { memo } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = memo(({ project }) => (
  <div className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] hover:border-indigo-500/30 transition-all duration-500 overflow-hidden h-full flex flex-col">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400 mb-6 block">
      {project.type}
    </span>
    {project.featured && (
      <div className="mb-4">
        <span className="px-3 py-1 rounded-lg bg-indigo-500/20 text-[10px] font-bold text-indigo-300 border border-indigo-500/30">
          FEATURED
        </span>
      </div>
    )}
    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
    <p className="text-slate-400 leading-relaxed mb-8 text-sm flex-grow">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2 mb-10">
      {project.tags.map(tag => (
        <span 
          key={tag} 
          className="px-3 py-1 rounded-lg bg-white/5 text-[11px] font-medium text-slate-300 border border-white/5 hover:border-indigo-500/30 transition-colors"
        >
          {tag}
        </span>
      ))}
    </div>
    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-white text-sm font-semibold group-hover:text-indigo-400 transition-colors"
    >
      View Project <ExternalLink size={14} />
    </a>
  </div>
));

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
