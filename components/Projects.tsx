
import React from 'react';
import { PROJECTS_DATA } from '../constants';
import { Project as ProjectType } from '../types';
import Section, { SectionTitle } from './Section';

const ProjectLink: React.FC<{ href: string }> = ({ href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#0066cc] border-b border-[#0066cc] transition-opacity duration-300 hover:opacity-70">
        View Project
    </a>
);

const Project: React.FC<{ project: ProjectType }> = ({ project }) => (
    <div className="mb-20 pb-20 border-b border-[#e5e5e5] last:border-b-0 last:mb-0 last:pb-0">
        <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-normal mb-4 tracking-[-1px]">{project.title}</h3>
            <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map(tag => (
                    <span key={tag} className="text-xs uppercase tracking-[1px] px-4 py-2 border border-[#e5e5e5] text-[#666]">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
                <h4 className="text-sm uppercase tracking-[1px] mb-4 text-[#666]">The Challenge</h4>
                <p className="text-[#1a1a1a] leading-relaxed">{project.challenge}</p>
            </div>
            <div>
                <h4 className="text-sm uppercase tracking-[1px] mb-4 text-[#666]">The Solution</h4>
                <ul className="text-[#1a1a1a] leading-relaxed space-y-2">
                    {project.solution.map((item, index) => (
                        <li key={index} className="pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-[#0066cc]">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h4 className="text-sm uppercase tracking-[1px] mb-4 text-[#666]">{project.vision ? 'The Vision' : 'The Impact'}</h4>
                <p className="text-[#1a1a1a] leading-relaxed">
                    {project.impact || project.vision}
                    {project.link && <> <ProjectLink href={project.link} /></>}
                </p>
            </div>
        </div>
    </div>
);


const Projects: React.FC = () => {
    return (
        <Section id="projects" className="bg-[#fafafa]">
            <SectionTitle>Featured Projects</SectionTitle>
            {PROJECTS_DATA.map(category => (
                <div key={category.title} className="mb-24 last:mb-0">
                    <h3 className="text-2xl md:text-3xl font-normal mb-12 pb-4 border-b-2 border-[#1a1a1a] tracking-[-0.5px]">
                        {category.title}
                    </h3>
                    {category.projects.map(project => (
                        <Project key={project.title} project={project} />
                    ))}
                </div>
            ))}
        </Section>
    );
};

export default Projects;
