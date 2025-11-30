import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { NavItem } from '../../types';

interface BottomNavbarItemProps {
  item: NavItem;
  isActive: boolean;
  onItemClick: (id: string) => void;
}

// 💡 Componente de UI que utiliza `framer-motion` para animaciones fluidas.
//    La prop `layout` se encarga de las transiciones de tamaño y posición automáticamente.
export const BottomNavbarItem: React.FC<BottomNavbarItemProps> = ({ item, isActive, onItemClick }) => {
  return (
    <li>
      <motion.button
        layout
        onClick={() => onItemClick(item.id)}
        className={`relative flex items-center justify-center h-12 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-premium focus:ring-offset-2 dark:focus:ring-offset-dark-secondary overflow-hidden
          ${isActive 
            ? 'w-32 bg-accent-premium text-dark-primary font-bold shadow-lg' 
            : 'w-12 text-gray-500 dark:text-gray-400 hover:bg-light-secondary dark:hover:bg-dark-tertiary'
          }`}
        aria-current={isActive ? 'page' : undefined}
      >
        <item.icon className="w-6 h-6 flex-shrink-0" />
        
        <AnimatePresence>
          {isActive && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.2 } }}
              exit={{ opacity: 0, x: -10, transition: { duration: 0.2 } }}
              className="ml-2 text-sm font-medium whitespace-nowrap"
            >
              {item.label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </li>
  );
};
