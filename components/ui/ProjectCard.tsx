import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { technologyIcons, roleBadges } from '../../lib/iconMap';
import { ShoppingCartIcon } from '../icons';
import { useCart } from '../../context/CartContext';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project; // Use the main Project interface
  t_tech_label: string;
  t_buy_label: string; 
  onNavigateToSkill: (skill: string) => void;
}

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, t_tech_label, t_buy_label, onNavigateToSkill }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  
  const { addToCart } = useCart();

  // 🔦 Lógica del efecto Spotlight: Calculamos la posición del cursor relativa a la tarjeta.
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };
  
  const handleBuyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (project.buyUrl && !project.price) {
        // Fallback to legacy external link if no price is set for cart
        window.open(project.buyUrl, '_blank');
    } else {
        addToCart(project);
    }
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden rounded-xl border border-light-tertiary dark:border-dark-tertiary bg-light-secondary dark:bg-dark-secondary px-6 py-8 shadow-md transition-all duration-300 hover:shadow-2xl dark:shadow-none group"
    >
      {/* 🔦 El Spotlight: un gradiente radial que sigue al cursor */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(113, 196, 239, 0.1), transparent 40%)`,
        }}
      />
      
      {/* Contenido */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-4">
           {/* 🏷️ Roles renderizados como Badges modernos */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.roles.map(role => {
              const badge = roleBadges[role];
              if (!badge) return null;
              return (
                <span key={role} className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${badge.color}`}>
                  <badge.icon className="w-3 h-3" />
                  {badge.label}
                </span>
              );
            })}
             {project.price && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border bg-green-100 text-green-700 border-green-200">
                  ${project.price.toFixed(2)}
                </span>
             )}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-serif mb-2 group-hover:text-accent-premium transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* 🛒 Botón de Compra (CTA) */}
          {(project.buyUrl || project.price) && (
            <button
              onClick={handleBuyClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-premium text-white font-bold rounded-lg shadow-md hover:bg-violet-600 transition-all duration-300 transform active:scale-95 group/btn w-full justify-center md:w-auto"
            >
              <ShoppingCartIcon className="w-5 h-5 transition-transform duration-300 group-hover/btn:scale-110" />
              <span>{t_buy_label}</span>
            </button>
          )}

        </div>

        <div className="mt-auto pt-4 border-t border-light-tertiary/50 dark:border-dark-primary/50">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
            {t_tech_label}
          </p>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map(tech => {
              const Icon = technologyIcons[tech];
              return Icon ? (
                <button 
                  key={tech} 
                  onClick={(e) => {
                    e.stopPropagation(); // Evitamos eventos no deseados
                    onNavigateToSkill(tech);
                  }}
                  className="group/icon relative focus:outline-none"
                  aria-label={`View skill details for ${tech}`}
                >
                  <div className="p-2 rounded-lg bg-light-primary dark:bg-dark-tertiary text-gray-500 dark:text-gray-400 ring-1 ring-inset ring-gray-200 dark:ring-gray-800 transition-all group-hover/icon:scale-110 group-hover/icon:text-accent-premium group-hover/icon:ring-accent-premium/50 cursor-pointer">
                     <Icon className="w-5 h-5" />
                  </div>
                  {/* Tooltip simple */}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-dark-primary text-white text-[10px] rounded opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                    {tech}
                  </span>
                </button>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};