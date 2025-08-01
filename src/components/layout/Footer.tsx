import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { contactInfo } from '../../data/contact';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4"></h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-sm">
              
            </p>
            <div className="flex space-x-4">
              {contactInfo.socials.github && (
                <a
                  href={contactInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              )}
              
              {contactInfo.socials.linkedin && (
                <a
                  href={contactInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              )}
              
              {contactInfo.socials.twitter && (
                <a
                  href={contactInfo.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              )}
              
              <a
                href={`mailto:${contactInfo.email}`}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4"></h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"></a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"></a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"></a>
              </li>
              <li>
                <a href="#experience" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"></a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"></a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"></a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <address className="not-italic text-gray-600 dark:text-gray-400 space-y-2">
              <p>{contactInfo.location}</p>
              <p>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </p>
              {contactInfo.phone && (
                <p>
                  <a 
                    href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </p>
              )}
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;