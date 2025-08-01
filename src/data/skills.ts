import { Skill } from '../types';

export const skills: Skill[] = [
  
  {
    name: 'HTML/CSS',
    icon: 'Code',
    level: 50,
    category: 'frontend'
  },
  {
    name: 'JavaScript',
    icon: 'FileCode',
    level: 50,
    category: 'frontend'
  },
  {
    name: 'React',
    icon: 'Atom',
    level: 40,
    category: 'frontend'
  },
  {
    name: 'Java',
    icon: 'FramerLogo',
    level: 50,
    category: 'frontend'
  },
   {
    name: 'Node.js',
    icon: 'FramerLogo',
    level: 50,
    category: 'backend'
  },
   {
    name: 'MongoDB',
    icon: 'FramerLogo',
    level: 70,
    category: 'backend'
  },

  {
    name: 'Git',
    icon: 'GitBranch',
    level: 59,
    category: 'tools'
  },
   {
    name: 'Vs code',
    icon: 'GitBranch',
    level: 59,
    category: 'tools'
  },
];

export const getSkillCategories = (): string[] => {
  const categories = new Set<string>();
  
  skills.forEach((skill) => {
    categories.add(skill.category);
  });
  
  return Array.from(categories);
};

export const getFilteredSkills = (category: string): Skill[] => {
  if (!category) {
    return skills;
  }
  
  return skills.filter(skill => skill.category === category);
};