import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My <span className="text-indigo-600">Projects</span></h2>
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-600 rounded-full">{project.category}</span>
                <h3 className="text-xl font-bold mt-3 mb-2">{project.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {(project.tech || []).map((t: string) => (
                    <span key={t} className="text-xs px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 rounded-full">{t}</span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.githubLink} target="_blank" className="flex items-center gap-1 text-sm font-medium hover:text-indigo-600"><Github size={16}/> Code</a>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" className="flex items-center gap-1 text-sm font-medium hover:text-indigo-600"><ExternalLink size={16}/> Live</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;