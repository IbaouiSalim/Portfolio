import React, { memo } from 'react';
import { Code } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../data/portfolio';

const ProjectsSection = memo(() => (
  <section id="projects" className="py-32 px-8 bg-white/[0.01]">
    <div className="max-w-6xl mx-auto">
      <SectionHeading icon={Code}>Technical Projects</SectionHeading>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  </section>
));

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;
