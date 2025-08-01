import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as LucideIcons from 'lucide-react';
import { skills, getSkillCategories } from '../../data/skills';
import { SkillCategory } from '../../types';

const Skills: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState<SkillCategory | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = getSkillCategories();
  const filteredSkills = currentCategory
    ? skills.filter(skill => skill.category === currentCategory)
    : skills;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.3 } 
    },
  };

  // Get the icon component from Lucide
  const getIconComponent = (iconName: string) => {
    const Icon = LucideIcons[iconName as keyof typeof LucideIcons];
    return Icon ? <Icon size={20} /> : <LucideIcons.Code size={20} />;
  };

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Skills & Technologies</h2>
          <p className="section-subheading mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>

          <div className="flex flex-wrap justify-center mt-8 gap-2">
            <button
              onClick={() => setCurrentCategory(null)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                currentCategory === null
                  ? 'bg-primary-600 text-white dark:bg-primary-700'
                  : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCurrentCategory(category as SkillCategory)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  currentCategory === category
                    ? 'bg-primary-600 text-white dark:bg-primary-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mr-3">
                  {getIconComponent(skill.icon)}
                </div>
                <h3 className="font-semibold">{skill.name}</h3>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between mt-2 text-xs text-gray-600 dark:text-gray-400">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;