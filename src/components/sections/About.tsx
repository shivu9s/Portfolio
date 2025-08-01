import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section bg-white dark:bg-gray-950">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading mx-auto">
            I'm a passionate developer and designer with a knack for creating beautiful, functional, and user-friendly digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 dark:bg-primary-900/30 rounded-tl-xl z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary-100 dark:bg-secondary-900/30 rounded-br-xl z-0"></div>
              <div className="rounded-xl overflow-hidden border-2 border-gray-100 dark:border-gray-800 shadow-xl relative z-10">
                <img
                  src="https://images.pexels.com/photos/4064840/pexels-photo-4064840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                  alt="About Me"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4"></h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg">
                    <Code size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Clean Code</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Writing maintainable, efficient code</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="p-2 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 rounded-lg">
                    <Palette size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Creative Design</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Creating beautiful user experiences</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="p-2 bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 rounded-lg">
                    <Lightbulb size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Problem Solving</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Finding efficient, elegant solutions</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg">
                    <Users size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Collaboration</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Working effectively in teams</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;