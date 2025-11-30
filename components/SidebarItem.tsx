import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import type { NavItem } from '../../types';

interface SidebarItemProps {
  item: NavItem;
  isCollapsed: boolean;
  isActive: boolean;
  onItemClick: (id: string) => void;
}

// 🧩 Variants para la animación del texto, mejorando la UX.
const labelVariants: Variants = {
  visible: { opacity: 1, width: 'auto', marginLeft: '0.75rem', transition: { duration: 0.2, ease: 'easeInOut' } },
  hidden: { opacity: 0, width: 0, marginLeft: 0, transition: { duration: 0.2, ease: 'easeInOut' } },
};

// 💡 SidebarItem es un componente de UI puro.
//    Aplica el principio de Responsabilidad Única (SRP) al encargarse solo de renderizar un item.
export const SidebarItem: React.FC<SidebarItemProps> = ({ item, isCollapsed, isActive, onItemClick }) => {
  const itemClasses = `flex items-center p-3 rounded-lg w-full text-left transition-colors duration-200 text-sm font-medium
    ${isActive ? 'bg-accent-premium text-dark-primary font-bold shadow-lg' : 'hover:bg-light-secondary dark:hover:bg-dark-tertiary'} ${isCollapsed ? 'justify-center' : ''}`;

  return (
    <li className="relative group">
      <button
        onClick={() => onItemClick(item.id)}
        className={itemClasses}
        aria-current={isActive ? 'page' : undefined}
      >
        <item.icon className="w-6 h-6 flex-shrink-0" />
        
        <AnimatePresence>
          {!isCollapsed && (
            <motion.span
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={labelVariants}
              className="whitespace-nowrap flex-1"
            >
              {item.label}
            </motion.span>
          )}
        </AnimatePresence>

        {/* Indicador de notificaciones */}
        {item.notificationCount && !isCollapsed && (
          <span className="text-xs font-bold text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center ml-auto">
            {item.notificationCount}
          </span>
        )}
        
        {item.notificationCount && isCollapsed && (
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        )}
      </button>

      {/* Tooltip para la vista colapsada */}
      {isCollapsed && (
        <div className="absolute left-full ml-4 px-3 py-1.5 bg-dark-tertiary text-white text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
          {item.label}
        </div>
      )}
    </li>
  );
};
