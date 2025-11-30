import React from 'react';
import { motion } from 'framer-motion';
import type { Translation } from '../../lib/i18n';
import type { Project } from '../../types'; // Importar tipo Project
import { ProjectCard } from '../../components/ui/ProjectCard';

interface ProjectsViewProps {
  t: Translation;
  onNavigateToSkill: (skill: string) => void;
  projects?: Project[]; // 💡 Prop opcional para recibir datos de BD
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const ProjectsView: React.FC<ProjectsViewProps> = ({ t, onNavigateToSkill, projects }) => {
  // Usar props.projects si existe, sino usar datos de traducción (fallback)
  const displayProjects = projects || t.projects_data;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="max-w-6xl mx-auto py-20 px-6 md:px-10 min-h-screen flex flex-col justify-center"
    >
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-serif tracking-tight">
          {t.projects_title}
        </h2>
        <div className="h-1 w-20 bg-accent-premium rounded-full mx-auto md:mx-0"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {displayProjects.map((project, index) => (
          <ProjectCard 
            key={project.id || index} // Usar ID de BD si existe
            project={project} 
            t_tech_label={t.projects_technologies_label} 
            t_buy_label={t.project_buy_button}
            onNavigateToSkill={onNavigateToSkill}
          />
        ))}
      </div>
    </motion.div>
  );
};