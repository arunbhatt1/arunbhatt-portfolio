export interface Project {
  id: string;
  title: string;
  category: 'Mobile & Cloud' | 'Systems & Graphics' | 'DSA & Algorithms' | 'OOP';
  role?: string;
  year: string;
  shortDescription: string;
  fullDescription: string[];
  technologies: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  architectureHighlights?: string[];
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level?: 'Proficient' | 'Familiar' | 'Basic';
    highlight?: boolean;
    iconName?: string;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  status?: string;
  details?: string[];
}

export interface ExperienceItem {
  organization: string;
  department?: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username: string;
}
