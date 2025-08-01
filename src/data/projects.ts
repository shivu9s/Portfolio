import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Free-Flix',
    description: 'Developed an online streaming platform offering movies, anime, web series, and books in one user-friendly interface. Focused on seamless user experience and easy navigation to enhance content accessibility. Designed a clean, user-friendly UI/UX layout with movie posters, trailers, and descriptions',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    technologies: ['React', 'Node.js'],
    category: 'web',
    link: 'https://example.com/ecommerce',
    featured: true,
  },
  {
    id: 2,
    title: 'Sales Data Analysis',
    description: 'Analyzed a large retail sales dataset using Excel and Python to uncover key trends, seasonal patterns, and revenue drivers. Created interactive Power BI dashboards to visualize sales KPIs, including revenue, profit margins, and customer segments. Identified underperforming products and regions, resulting in targeted marketing and inventory optimization strategies. Used pivot tables and charts in Excel to summarize data and derive actionable insights for stakeholders.',
    image: 'https://www.salesforce.com/in/blog/wp-content/uploads/sites/9/2024/05/blog-sales-data-analysis.jpg',
    technologies: ['Python', 'Excel', 'Power BI'],
    category: 'web',
    link: 'https://example.com/finance',
    featured: true,
  },
  {
     id: 3,
    title: 'BudgetWarrior – Expense Tracker',
    description: 'Developed responsive and interactive front-end using React.js for tracking daily expenses and income.Implemented data visualization features (e.g., charts, progress bars) to give users clear financial insights.Integrated with backend APIs for secure user authentication and real-time data syncing.Enhanced user experience with clean UI, smooth navigation, and mobile responsiveness.',
    image: 'https://repository-images.githubusercontent.com/359581441/3e3eb800-df44-11eb-8541-30a6954cb3de',
    technologies: ['Html', 'Css', 'Javascript', 'React.js'],
    category: 'web',
    link: 'https://example.com/finance',
    featured: true,
  },
];

export const getProjectCategories = (): string[] => {
  const categories = new Set<string>();
  categories.add('all');
  
  projects.forEach((project) => {
    categories.add(project.category);
  });
  
  return Array.from(categories);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getFilteredProjects = (category: string): Project[] => {
  if (category === 'all') {
    return projects;
  }
  
  return projects.filter(project => project.category === category);
};