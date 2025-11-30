import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { SidebarItem } from './ui/SidebarItem';
import { ArrowLeftIcon, Sun, Moon, LanguageIcon } from './icons';
import type { NavItem } from '../types';
import type { Translation } from '../lib/i18n';

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  activeView: string;
  onViewChange: (viewId: string) => void;
  navItems: NavItem[];
  t: Translation;
  isDarkMode: boolean;
  toggleTheme: () => void;
  language: 'en' | 'es';
  toggleLanguage: () => void;
}

// 🧩 Variants para la animación del texto, garantizando una transición suave.
const textVariants: Variants = {
  visible: { opacity: 1, width: 'auto', transition: { duration: 0.2, ease: 'easeInOut' }, marginLeft: '0.75rem' },
  hidden: { opacity: 0, width: 0, transition: { duration: 0.2, ease: 'easeInOut' }, marginLeft: 0 },
};

// 💡 El componente Sidebar ahora es parte del layout y recibe todo por props.
//    Esto lo hace más reutilizable y sigue el principio de Inversión de Dependencias (DIP).
export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar, activeView, onViewChange, navItems, t, isDarkMode, toggleTheme, language, toggleLanguage }) => {
  const themeButtonLabel = isDarkMode ? t.light_mode : t.dark_mode;
  
  return (
    <motion.aside
      animate={{ width: isCollapsed ? '80px' : '220px' }} // 💡 Ancho ajustado para un balance entre espacio y contenido.
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`hidden md:flex flex-col h-full bg-light-primary dark:bg-dark-secondary text-gray-500 dark:text-gray-400 border-light-tertiary dark:border-dark-tertiary ${isCollapsed ? 'border-r-2' : 'border-r'}`}
    >
      {/* --- Encabezado del Sidebar --- */}
      <div className="flex items-center justify-end p-4 h-20 border-b border-light-tertiary dark:border-dark-tertiary flex-shrink-0">
        <button
          onClick={toggleSidebar}
          className="p-1.5 rounded-full bg-light-secondary dark:bg-dark-tertiary hover:bg-light-tertiary dark:hover:bg-dark-primary transition-transform duration-300"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <motion.div animate={{ rotate: isCollapsed ? 180 : 0 }}>
            <ArrowLeftIcon className="w-5 h-5" />
          </motion.div>
        </button>
      </div>
      
      {/* --- Navegación Principal --- */}
      <nav className="flex-1 p-4 overflow-y-auto overflow-x-hidden">
        <ul className="space-y-2">
          {navItems.map(item => (
            <SidebarItem
              key={item.id}
              item={item}
              isCollapsed={isCollapsed}
              isActive={activeView === item.id}
              onItemClick={onViewChange}
            />
          ))}
        </ul>
      </nav>

      {/* --- Pie de página del Sidebar --- */}
      <div className="mt-auto flex-shrink-0">
        {/* Botón de Tema */}
        <div className="p-4">
          <div className="relative group">
            <button
              onClick={toggleTheme}
              className={`flex items-center p-3 rounded-lg w-full text-left transition-colors duration-200 text-sm font-medium hover:bg-light-secondary dark:hover:bg-dark-tertiary ${isCollapsed ? 'justify-center' : ''}`}
              aria-label={t.toggle_theme_label}
            >
              {isDarkMode ? <Sun className="w-6 h-6 flex-shrink-0" /> : <Moon className="w-6 h-6 flex-shrink-0" />}
              <AnimatePresence>
                {!isCollapsed && (
                  <motion.span initial="hidden" animate="visible" exit="hidden" variants={textVariants} className="whitespace-nowrap">
                    {themeButtonLabel}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            {isCollapsed && (
              <div className="absolute left-full bottom-2 ml-4 px-3 py-1.5 bg-dark-tertiary text-white text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                {themeButtonLabel}
              </div>
            )}
          </div>
        </div>

        {/* Botón de Idioma */}
        <div className="p-4 border-t border-light-tertiary dark:border-dark-tertiary">
          <div className="relative group">
            <button
              onClick={toggleLanguage}
              className={`flex items-center p-3 rounded-lg w-full text-left transition-colors duration-200 text-sm font-medium hover:bg-light-secondary dark:hover:bg-dark-tertiary ${isCollapsed ? 'justify-center' : ''}`}
              aria-label={t.toggle_language_label}
            >
              <LanguageIcon className="w-6 h-6 flex-shrink-0" />
              <AnimatePresence>
                {!isCollapsed && (
                  <motion.span initial="hidden" animate="visible" exit="hidden" variants={textVariants} className="whitespace-nowrap font-bold">
                    {language.toUpperCase()}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            {isCollapsed && (
              <div className="absolute left-full bottom-2 ml-4 px-3 py-1.5 bg-dark-tertiary text-white text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                {t.toggle_language_label}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.aside>
  );
};