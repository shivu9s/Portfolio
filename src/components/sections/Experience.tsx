import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { experiences } from '../../data/experience';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="section bg-white dark:bg-gray-950">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Work Experience</h2>
          <p className="section-subheading mx-auto">
           
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-800"></div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={item}
                className={`relative flex flex-col md:flex-row items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/3 w-5 h-5 rounded-full bg-primary-600 dark:bg-primary-500 z-10 shadow-md"></div>
                
                {/* Date */}
                <div className={`w-full md:w-1/2 md:pr-12 ${index % 2 === 0 ? 'md:pl-12 md:pr-0' : ''} pb-8 md:pb-0`}>
                  <div className="bg-gray-100 dark:bg-gray-900 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <Calendar size={16} className="text-primary-600 dark:text-primary-400 mr-2" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{experience.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{experience.position}</h3>
                    <div className="flex items-center mb-4">
                      <Briefcase size={16} className="text-gray-500 dark:text-gray-400 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">{experience.company}</span>
                    </div>
                    <ul className="space-y-2">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight size={16} className="text-primary-600 dark:text-primary-400 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Spacer for alternate layout */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;