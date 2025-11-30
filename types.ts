import type React from 'react';

// FIX: Definimos un tipo específico para los IDs de navegación.
// Esto mejora la seguridad de tipos y el autocompletado en todo el código.
export type NavItemId = 'home' | 'about' | 'projects' | 'skills' | 'blog' | 'contact' | 'admin';

// 💡 Interfaz estandarizada para proyectos (usada en DB y UI)
export interface Project {
  id?: number; // Opcional porque al crear no tiene ID
  title: string;
  description: string;
  roles: ('Frontend' | 'Backend' | 'API')[];
  technologies: string[];
  buyUrl?: string;
  price?: number; // 💡 Nuevo campo para e-commerce
}

// 💡 Interfaz para Blog Posts (usada en DB y UI)
export interface BlogPost {
  id?: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  url: string; 
}

// 💡 Simplificamos la estructura. Un item de navegación para el portafolio ahora solo necesita lo esencial.
export interface NavItem {
  id: NavItemId; // FIX: Usamos el tipo específico en lugar de un string genérico.
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  notificationCount?: number;
}

// 🛒 E-commerce Types
export interface CartItem extends Project {
  quantity: number;
}

export type OrderStatus = 'pending' | 'approved' | 'rejected';

export interface Order {
  id?: number;
  customerName: string;
  customerEmail: string;
  totalAmount: number;
  status: OrderStatus;
  paymentMethod: 'pago_movil' | 'binance' | 'kontigo';
  paymentReference: string;
  items: CartItem[]; // Stored as JSON string in DB
  date: string;
}