import React from 'react';
import { motion } from 'framer-motion';
import type { Translation } from '../../lib/i18n';
import { AnimatedText } from '../../components/AnimatedText';
import { GithubIcon, LinkedinIcon } from '../../components/icons';

interface AboutViewProps {
  t: Translation;
}

export const AboutView: React.FC<AboutViewProps> = ({ t }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }} // 💡 Animación al hacer scroll
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center min-h-screen py-20 px-6 md:px-12"
    >
      <div className="text-center mb-12">
        <AnimatedText el="h1" text={t.about_greeting} className="text-5xl font-bold text-gray-900 dark:text-white font-serif" />
        <AnimatedText el="p" text={t.about_jobTitle} className="text-2xl text-accent-premium mt-2 font-serif" />
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://github.com/Elloper"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-light-secondary dark:bg-dark-tertiary text-gray-800 dark:text-gray-200 font-semibold rounded-lg shadow-md hover:bg-light-tertiary dark:hover:bg-dark-primary transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            <span>{t.about_github_button}</span>
          </a>
          <a
            href="https://linkedin.com/in/Elloper"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-premium text-dark-primary font-semibold rounded-lg shadow-md hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-premium transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            <span>{t.about_linkedin_button}</span>
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-serif text-center md:text-left">{t.about_title}</h2>
        <div className="space-y-4 text-gray-600 dark:text-gray-400 text-base leading-relaxed">
          <p>{t.about_p1}</p>
          <p>{t.about_p2}</p>
          <p>{t.about_p3}</p>
        </div>
      </div>
    </motion.div>
  );
};