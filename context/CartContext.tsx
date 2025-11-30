import React, { createContext, useContext, useState, useEffect } from 'react';
import type { CartItem, Project } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (project: Project) => void;
  removeFromCart: (projectId: number) => void;
  clearCart: () => void;
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  totalAmount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_cart');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('portfolio_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (project: Project) => {
    if (!project.id && project.id !== 0) return; // Need an ID
    
    setCartItems(prev => {
      const existing = prev.find(item => item.id === project.id);
      if (existing) {
        return prev.map(item => 
          item.id === project.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...project, quantity: 1 }];
    });
    setIsDrawerOpen(true);
  };

  const removeFromCart = (projectId: number) => {
    setCartItems(prev => prev.filter(item => item.id !== projectId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleDrawer = () => setIsDrawerOpen(prev => !prev);

  const totalAmount = cartItems.reduce((acc, item) => acc + ((item.price || 0) * item.quantity), 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, isDrawerOpen, toggleDrawer, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};