import { useState, useEffect } from 'react';

/**
 * 💡 Hook para gestionar las acciones comunes del "Shell" de la aplicación (Sidebar y Header Móvil).
 * 
 * Principio SOLID: Don't Repeat Yourself (DRY) y Dependency Inversion.
 * En lugar de que Sidebar y MobileHeader implementen la misma lógica de autenticación
 * y modales dos veces, ambos consumen este hook.
 */
export const useShellActions = (toggleLanguage: () => void) => {
  // --- Estados de UI ---
  const [showLangConfirm, setShowLangConfirm] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  
  // --- Estado de Sesión ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 🔄 Sincronización de sesión al montar
  useEffect(() => {
    const checkAuth = () => {
      // 🛡️ Verificamos sessionStorage de forma segura
      if (typeof window !== 'undefined') {
        const isAuth = sessionStorage.getItem('portfolio_admin_auth') === 'true';
        setIsAuthenticated(isAuth);
      }
    };
    
    checkAuth();
    
    // 👂 Escuchamos eventos de storage para sincronizar pestañas o cambios externos
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  // --- Manejadores de Lógica (Actions) ---

  const handleLanguageClick = () => {
    setShowLangConfirm(true);
  };

  const confirmLanguageChange = () => {
    toggleLanguage();
    setShowLangConfirm(false);
  };

  const cancelLanguageChange = () => {
    setShowLangConfirm(false);
  };

  const openLogin = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  const openRegister = () => {
    setAuthMode('register');
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
    // 🔄 Refrescamos el estado de auth por si el login fue exitoso
    const isAuth = sessionStorage.getItem('portfolio_admin_auth') === 'true';
    setIsAuthenticated(isAuth);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('portfolio_admin_auth');
    setIsAuthenticated(false);
    // 🛡️ Redirigimos al home por seguridad
    window.location.hash = '';
  };

  // 📦 Retornamos todo lo necesario para la vista
  return {
    ui: {
      showLangConfirm,
      isAuthModalOpen,
      authMode,
      isAuthenticated,
    },
    actions: {
      handleLanguageClick,
      confirmLanguageChange,
      cancelLanguageChange,
      openLogin,
      openRegister,
      closeAuthModal,
      handleLogout
    }
  };
};