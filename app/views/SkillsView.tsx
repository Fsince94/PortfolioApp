import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CodeIcon } from '../../components/icons';
import { technologyIcons, categoryIcons } from '../../lib/iconMap';
import { SkillCard } from '../../components/ui/SkillCard';
import type { Translation } from '../../lib/i18n';

interface SkillsViewProps {
  t: Translation;
  highlightedSkill: string | null;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const getSkillId = (name: string) => `skill-${name.replace(/\s+/g, '-').toLowerCase()}`;

const SkillGrid = ({ data, highlightedSkill }: { data: { [key: string]: string[] }, highlightedSkill: string | null }) => {
  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {Object.entries(data).flatMap(([category, items]) => {
        if (!Array.isArray(items)) return [];
        return items.map(skill => {
          const Icon = technologyIcons[skill] || categoryIcons[category] || CodeIcon;
          return (
            <SkillCard 
              key={skill} 
              id={getSkillId(skill)}
              name={skill} 
              icon={Icon} 
              isHighlighted={highlightedSkill === skill}
            />
          );
        });
      })}
    </motion.div>
  );
};

export const SkillsView: React.FC<SkillsViewProps> = ({ t, highlightedSkill }) => {
  
  useEffect(() => {
    if (highlightedSkill) {
      // 🧭 El scroll principal hacia la sección lo maneja App.tsx / MainLayout.
      // Aquí solo ajustamos el scroll fino hacia la tarjeta específica.
      const timer = setTimeout(() => {
        const id = getSkillId(highlightedSkill);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 600); // Un poco más de delay para permitir que el scroll de sección termine
      return () => clearTimeout(timer);
    }
  }, [highlightedSkill]);

  return (
    <motion.div
      className="max-w-7xl mx-auto py-20 px-6 md:px-10 min-h-screen"
    >
      <div className="mb-12">
         <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-serif tracking-tight">
          {t.skills_title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg">
           Un vistazo a mi stack técnico y herramientas favoritas para construir experiencias digitales.
        </p>
      </div>
      
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8 pb-2 border-b border-light-tertiary dark:border-dark-tertiary">
          <div className="p-2 rounded-lg bg-accent-premium/10 text-accent-premium">
             <CodeIcon className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white font-serif">{t.skills_technical_title}</h3>
        </div>
        <SkillGrid data={t.skills_technical_data} highlightedSkill={highlightedSkill} />
      </section>

      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8 pb-2 border-b border-light-tertiary dark:border-dark-tertiary">
           <div className="p-2 rounded-lg bg-accent-premium/10 text-accent-premium">
             {React.createElement(categoryIcons['Tools & Platforms'] || CodeIcon, { className: "w-6 h-6" })}
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white font-serif">{t.skills_technologies_title}</h3>
        </div>
        <SkillGrid data={t.skills_technologies_data} highlightedSkill={highlightedSkill} />
      </section>

      <section>
        <div className="flex items-center gap-3 mb-8 pb-2 border-b border-light-tertiary dark:border-dark-tertiary">
           <div className="p-2 rounded-lg bg-accent-premium/10 text-accent-premium">
              {React.createElement(categoryIcons['Communication'] || CodeIcon, { className: "w-6 h-6" })}
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white font-serif">{t.skills_soft_title}</h3>
        </div>
        <SkillGrid data={t.skills_soft_data} highlightedSkill={highlightedSkill} />
      </section>
    </motion.div>
  );
};