export interface Skill { 
  name: string; 
  percentage: number; 
}

export interface Project {
  id: string;
  title: string;
  category: 'Frontend' | 'Backend' | 'Full Stack' | 'MERN' | 'JavaScript' | 'React' | string;
  description: string;
  image: string;
  video?: string;
  githubLink: string;
  liveLink?: string;
  tech?: string[];
  github?: string;
  live?: string;
  technologies?: string[];
}

export interface EducationItem { 
  id: string; 
  institution: string; 
  degree: string; 
  stream?: string; 
  years: string; 
}

export interface ExperienceItem { 
  id: string; 
  company: string; 
  role: string; 
  location: string; 
  duration: string; 
  description: string[]; 
}