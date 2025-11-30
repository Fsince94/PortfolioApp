import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { Translation } from '../../lib/i18n';
import { 
  ShoppingCartIcon, 
  LogInIcon, 
  UserPlusIcon, 
  LogOutIcon, 
  LanguageIcon, 
  Sun, 
  Moon, 
  LogoIcon 
} from '../icons';
import { AuthModal } from '../ui/AuthModal';
import { ConfirmDialog } from '../ui/ConfirmDialog';
import { useShellActions } from '../../hooks/useShellActions'; // 💡 Reutilización de lógica

interface MobileHeaderProps {
  t: Translation;
  isDarkMode: boolean;
  toggleTheme: () => void;
  language: 'en' | 'es';
  toggleLanguage: () => void;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ 
  t, 
  isDarkMode, 
  toggleTheme, 
  language, 
  toggleLanguage 
}) => {
  const { cartItems, toggleDrawer } = useCart();
  
  // 💡 Lógica compartida: No reescribimos auth/modales.
  const { ui, actions } = useShellActions(toggleLanguage);

  return (
    <>
      <ConfirmDialog
        isOpen={ui.showLangConfirm}
        title={t.toggle_language_label}
        description={language === 'en' ? "¿Deseas cambiar el idioma a Español?" : "Do you want to switch language to English?"}
        confirmLabel={language === 'en' ? "Cambiar" : "Switch"}
        cancelLabel={language === 'en' ? "Cancelar" : "Cancel"}
        onConfirm={actions.confirmLanguageChange}
        onCancel={actions.cancelLanguageChange}
      />

      <AuthModal 
        isOpen={ui.isAuthModalOpen}
        onClose={actions.closeAuthModal}
        initialMode={ui.authMode}
        t={t}
      />

      <header className="fixed top-0 left-0 right-0 z-40 h-16 px-4 bg-light-primary/80 dark:bg-dark-secondary/80 backdrop-blur-md border-b border-light-tertiary dark:border-dark-tertiary flex items-center justify-between md:hidden transition-all duration-300">
        
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent-premium rounded-lg flex items-center justify-center text-white">
                <LogoIcon className="w-5 h-5" />
            </div>
            <span className="font-serif font-bold text-lg dark:text-white tracking-tight">Portfolio</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          
          {/* Language */}
          <button 
            onClick={actions.handleLanguageClick}
            className="p-2 text-gray-500 dark:text-gray-400 hover:bg-light-secondary dark:hover:bg-dark-tertiary rounded-full transition-colors"
          >
            <LanguageIcon className="w-5 h-5" />
          </button>

          {/* Theme */}
          <button 
            onClick={toggleTheme}
            className="p-2 text-gray-500 dark:text-gray-400 hover:bg-light-secondary dark:hover:bg-dark-tertiary rounded-full transition-colors"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Divider */}
          <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-1"></div>

          {/* Auth */}
          {!ui.isAuthenticated ? (
             <button 
                onClick={actions.openLogin}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-accent-premium hover:bg-light-secondary dark:hover:bg-dark-tertiary rounded-full transition-colors"
              >
                <LogInIcon className="w-5 h-5" />
              </button>
          ) : (
             <button 
                onClick={actions.handleLogout}
                className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
              >
                <LogOutIcon className="w-5 h-5" />
              </button>
          )}

          {/* Cart */}
          <button 
            onClick={toggleDrawer}
            className="relative p-2 text-gray-500 dark:text-gray-400 hover:text-accent-premium hover:bg-light-secondary dark:hover:bg-dark-tertiary rounded-full transition-colors"
          >
            <ShoppingCartIcon className="w-5 h-5" />
            <AnimatePresence>
                {cartItems.length > 0 && (
                    <motion.span 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute top-1 right-1 bg-accent-premium text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white dark:border-dark-secondary"
                    >
                        {cartItems.length}
                    </motion.span>
                )}
            </AnimatePresence>
          </button>

        </div>
      </header>
    </>
  );
};