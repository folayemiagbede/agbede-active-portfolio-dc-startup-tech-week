
export interface ExpertiseItem {
  title: string;
  points: string[];
}

export interface Project {
  title: string;
  tags: string[];
  challenge: string;
  solution: string[];
  impact: string;
  link?: string;
  vision?: string; 
}

export interface ProjectCategory {
  title: string;
  projects: Project[];
}

export interface BackgroundItem {
  company: string;
  role: string;
  duration: string;
  description: string;
  details?: {
    title: string;
    points: string[];
  }[];
}

export interface EducationItem {
  institution: string;
  details: string[];
}

export interface TrainingItem {
  institution: string;
  details: string;
}

export interface SkillCategory {
  title: string;
  skills: string;
}

export interface ResearchItem {
    title: string;
    meta: string;
    description: string;
    links?: { text: string; url: string }[];
}
