
import React from 'react';
import { BottomNavbarItem } from '../ui/BottomNavbarItem';
import type { NavItem } from '../../types';
import type { Translation } from '../../lib/i18n';

interface BottomNavbarProps {
  activeView: string;
  onViewChange: (viewId: string) => void;
  navItems: NavItem[];
  t: Translation;
}

// 💡 Componente de layout para la barra de navegación inferior en móviles.
//    Ajustado para ocupar el ancho de manera fluida y evitar desbordamientos.
export const BottomNavbar: React.FC<BottomNavbarProps> = ({ activeView, onViewChange, navItems }) => {
  return (
    <nav className="fixed bottom-4 left-0 right-0 z-40 md:hidden flex justify-center pointer-events-none">
      <div className="pointer-events-auto bg-light-primary/90 dark:bg-dark-secondary/90 backdrop-blur-lg rounded-full shadow-2xl border border-light-tertiary/50 dark:border-dark-tertiary/50 ring-1 ring-black/5 mx-4 max-w-md w-full">
        <ul className="flex items-center justify-between p-1.5 w-full">
          {navItems.map(item => (
            <BottomNavbarItem
              key={item.id}
              item={item}
              isActive={activeView === item.id}
              onItemClick={onViewChange}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};
