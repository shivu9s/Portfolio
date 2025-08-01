export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: ProjectCategory;
  link?: string;
  github?: string;
  featured: boolean;
}

export type ProjectCategory = 'web' | 'mobile' | 'design' | 'all';

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: SkillCategory;
}

export type SkillCategory = 'frontend' | 'backend' | 'design' | 'tools';

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}