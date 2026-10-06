import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Work Experience</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Full Stack Developer with 4+ years experience in building scalable web applications with MERN & DevOps</p>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-200 dark:bg-indigo-900/50 transform md:-translate-x-1/2"></div>
          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white dark:border-slate-900 z-10"></div>
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 !== 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all duration-300">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 !== 0 ? 'flex-row' : 'md:flex-row-reverse flex-row'}`}>
                       <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                         <Briefcase size={20} />
                       </div>
                       <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.company}</h3>
                    </div>
                    <h4 className="text-indigo-600 dark:text-indigo-400 font-semibold mb-1">{exp.role}</h4>
                    <div className={`flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs mb-4 ${index % 2 !== 0 ? 'justify-start' : 'md:justify-end justify-start'}`}>
                      <MapPin size={14} /><span>{exp.location}</span>
                    </div>
                    <ul className="space-y-2 mb-4 text-left">
                      {exp.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                          <ChevronRight size={14} className="text-indigo-500 mt-1 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-200/50 dark:bg-slate-700 rounded-full text-xs font-bold text-indigo-600 dark:text-indigo-300">
                      <Calendar size={14} /><span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;