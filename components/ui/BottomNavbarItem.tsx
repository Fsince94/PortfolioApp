
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { NavItem } from '../../types';

interface BottomNavbarItemProps {
  item: NavItem;
  isActive: boolean;
  onItemClick: (id: string) => void;
}

export const BottomNavbarItem: React.FC<BottomNavbarItemProps> = ({ item, isActive, onItemClick }) => {
  return (
    <li className="flex-shrink-0">
      <motion.button
        layout
        onClick={() => onItemClick(item.id)}
        className={`relative flex items-center justify-center h-10 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-premium focus:ring-offset-2 dark:focus:ring-offset-dark-secondary overflow-hidden
          ${isActive 
            ? 'w-auto px-4 bg-accent-premium text-dark-primary font-bold shadow-lg' 
            : 'w-10 text-gray-500 dark:text-gray-400 hover:bg-light-secondary dark:hover:bg-dark-tertiary'
          }`}
        aria-current={isActive ? 'page' : undefined}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {/* Icono ligeramente más pequeño para balancear */}
        <item.icon className={`${isActive ? 'w-5 h-5' : 'w-5 h-5'} flex-shrink-0`} />
        
        <AnimatePresence>
          {isActive && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto', transition: { delay: 0.1, duration: 0.2 } }}
              exit={{ opacity: 0, width: 0, transition: { duration: 0.1 } }}
              className="ml-2 text-xs font-bold whitespace-nowrap overflow-hidden"
            >
              {item.label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </li>
  );
};
