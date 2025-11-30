import type { NavItem } from './types';
import {
  HomeIcon,
  UserIcon,
  ProjectIcon,
  CodeIcon,
  MessageIcon,
  NewspaperIcon,
} from './components/icons';

// 💡 Refactorizamos la estructura de navegación.
// Ahora solo contiene la información estructural (ID e ícono) que no cambia.
// Las etiquetas de texto (`label`) se generarán dinámicamente en `App.tsx` a partir del archivo de traducciones.
// This refactoring allows for dynamic, internationalized labels.
export const PORTFOLIO_NAV_ITEMS_STRUCTURE: Omit<NavItem, 'label'>[] = [
  { id: 'home', icon: HomeIcon },
  { id: 'about', icon: UserIcon },
  { id: 'projects', icon: ProjectIcon },
  { id: 'skills', icon: CodeIcon },
  { id: 'blog', icon: NewspaperIcon }, // 💡 Added Blog section
  { id: 'contact', icon: MessageIcon },
];