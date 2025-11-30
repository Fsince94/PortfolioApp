import type React from 'react';

// 💡 Definimos un tipo específico para los IDs de navegación para mayor seguridad.
export type NavItemId = 'home' | 'about' | 'projects' | 'skills' | 'blog' | 'contact';

// 💡 Tipo principal para un item de navegación.
export interface NavItem {
  id: NavItemId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  notificationCount?: number;
}