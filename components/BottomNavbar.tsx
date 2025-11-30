import React from 'react';
import { BottomNavbarItem } from './ui/BottomNavbarItem';
import type { NavItem } from '../types';

interface BottomNavbarProps {
  activeView: string;
  onViewChange: (viewId: string) => void;
  navItems: NavItem[];
}

// 💡 Componente de layout para la barra de navegación inferior en móviles.
//    Aplica SRP al enfocarse únicamente en la presentación de la navegación móvil.
export const BottomNavbar: React.FC<BottomNavbarProps> = ({ activeView, onViewChange, navItems }) => {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
      <ul className="flex items-center gap-2 p-2 bg-light-primary/70 dark:bg-dark-secondary/70 backdrop-blur-sm rounded-full shadow-lg border border-light-tertiary/50 dark:border-dark-tertiary/50">
        {navItems.map(item => (
          <BottomNavbarItem
            key={item.id}
            item={item}
            isActive={activeView === item.id}
            onItemClick={onViewChange}
          />
        ))}
      </ul>
    </nav>
  );
};
