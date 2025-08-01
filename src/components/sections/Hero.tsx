import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Github, FileCode } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200/30 dark:bg-primary-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary-200/30 dark:bg-secondary-900/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl text-center lg:text-left"
          >
            <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium mb-6">
              Full Stack Web Developer
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-primary-600 dark:text-primary-400">Shiven Chauhan</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
                
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8">
              A Computer Science graduate from Chandigarh University, I bring together technical expertise and creative thinking to design innovative digital solutions. With a background in both development and event organization, I thrive in roles that require both strategic planning and hands-on execution.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="btn btn-primary px-6 py-3 rounded-lg"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/shiven-chauhan-63334b227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline px-6 py-3 rounded-lg text-blue-600 hover:text-blue hover:bg-blue-600 border-blue-600"
              >
               
                Linkdin Profile
              </a>
              
              <a 
                href="https://drive.google.com/file/d/11EQhmTko_7fLeuqEbJOR-hx_G7FAABzF/view?usp=sharing" 
                className="btn btn-secondary px-6 py-3 rounded-lg"
              >
                <FileCode className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </div>
          </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary-200/30 dark:bg-primary-900/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-secondary-200/30 dark:bg-secondary-900/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <img
                  src="https://avatars.githubusercontent.com/u/153435937?v=4"
                  alt="Shiven Chauhan"
                  className="w-80 h-80 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
        >
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          </span>
          <a
            href="#about"
            className="animate-bounce p-1 bg-white dark:bg-gray-800 rounded-full shadow-md"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-5 w-5 text-primary-600 dark:text-primary-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;