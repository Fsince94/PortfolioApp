import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  id?: string;
  isHighlighted?: boolean;
}

const cardVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.8 },
  visible: { y: 0, opacity: 1, scale: 1 },
};

export const SkillCard: React.FC<SkillCardProps> = ({ name, icon: Icon, id, isHighlighted = false }) => {
  return (
    <motion.div
      id={id}
      variants={cardVariants}
      whileHover={{ y: -5, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={isHighlighted ? { 
        scale: [1, 1.1, 1],
        boxShadow: "0 0 25px rgba(113, 196, 239, 0.4)",
        borderColor: "rgba(113, 196, 239, 0.8)"
      } : {}}
      transition={isHighlighted ? { duration: 0.5, repeat: 1 } : {}}
      className={`relative group flex flex-col items-center justify-between aspect-square rounded-2xl bg-white dark:bg-dark-secondary border shadow-sm hover:shadow-xl hover:shadow-accent-premium/10 dark:hover:shadow-accent-premium/20 transition-all duration-300 overflow-hidden p-4 sm:p-5
        ${isHighlighted 
          ? 'border-accent-premium ring-2 ring-accent-premium/20 z-20' 
          : 'border-light-tertiary dark:border-dark-tertiary'
        }`}
    >
      {/* 🎨 Fondo decorativo sutil en hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-premium/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* 🖼️ Área del Icono: Ocupa todo el espacio disponible (flex-1) */}
      <div className="relative z-10 flex-1 w-full flex items-center justify-center overflow-hidden pb-2">
        {/* El icono se escala al máximo pero manteniendo un padding visual estético */}
        <Icon className={`w-full h-full max-w-[85%] max-h-[85%] object-contain transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 drop-shadow-sm
          ${isHighlighted ? 'text-accent-premium' : 'text-gray-400 dark:text-gray-500 group-hover:text-accent-premium'}`} 
        />
      </div>

      {/* 📝 Etiqueta de texto */}
      <span className={`relative z-10 text-sm sm:text-base font-bold text-center w-full truncate leading-tight transition-colors duration-300
        ${isHighlighted 
          ? 'text-accent-premium' 
          : 'text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
        }`}>
        {name}
      </span>
    </motion.div>
  );
};