import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { SidebarItem } from '../ui/SidebarItem';
import { ConfirmDialog } from '../ui/ConfirmDialog';
import { AuthModal } from '../ui/AuthModal';
import { ArrowLeftIcon, Sun, Moon, LanguageIcon, LogInIcon, UserPlusIcon, LogOutIcon, ShoppingCartIcon } from '../icons';
import type { NavItem } from '../../types';
import type { Translation } from '../../lib/i18n';
import { useCart } from '../../context/CartContext';
import { useShellActions } from '../../hooks/useShellActions'; // 💡 Nuevo hook importado

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  activeView: string;
  onViewChange: (viewId: string) => void;
  navItems: NavItem[];
  t: Translation;
  isDarkMode: boolean;
  toggleTheme: () => void;
  language: 'en' | 'es';
  toggleLanguage: () => void;
}

const textVariants: Variants = {
  visible: { opacity: 1, width: 'auto', transition: { duration: 0.2, ease: 'easeInOut' }, marginLeft: '0.75rem' },
  hidden: { opacity: 0, width: 0, transition: { duration: 0.2, ease: 'easeInOut' }, marginLeft: 0 },
};

export const Sidebar: React.FC<SidebarProps> = ({ 
  isCollapsed, toggleSidebar, activeView, onViewChange, navItems, t, isDarkMode, toggleTheme, language, toggleLanguage 
}) => {
  const themeButtonLabel = isDarkMode ? t.light_mode : t.dark_mode;
  const { cartItems, toggleDrawer } = useCart();
  
  // 💡 Lógica extraída al hook useShellActions. DRY aplicado.
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

      <motion.aside
        animate={{ width: isCollapsed ? '80px' : 'fit-content' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`hidden md:flex flex-col h-full bg-light-primary dark:bg-dark-secondary text-gray-500 dark:text-gray-400 border-light-tertiary dark:border-dark-tertiary flex-shrink-0 ${isCollapsed ? 'border-r-2' : 'border-r'}`}
      >
        {/* --- Encabezado del Sidebar --- */}
        <div className={`flex items-center p-4 h-20 border-b border-light-tertiary dark:border-dark-tertiary flex-shrink-0 ${isCollapsed ? 'justify-center' : 'justify-between gap-4'}`}>
          
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10, width: 0 }}
                className="flex items-center gap-2"
              >
                {!ui.isAuthenticated ? (
                  <>
                    <button
                      onClick={actions.openLogin}
                      className="p-1.5 rounded-lg text-gray-500 hover:text-accent-premium hover:bg-light-secondary dark:hover:bg-dark-tertiary transition-colors"
                      title={t.auth_login_button}
                    >
                      <LogInIcon className="w-5 h-5" />
                    </button>
                    <button
                      onClick={actions.openRegister}
                      className="p-1.5 rounded-lg text-gray-500 hover:text-accent-premium hover:bg-light-secondary dark:hover:bg-dark-tertiary transition-colors"
                      title={t.auth_register_button}
                    >
                      <UserPlusIcon className="w-5 h-5" />
                    </button>
                  </>
                ) : (
                  <button
                    onClick={actions.handleLogout}
                    className="p-1.5 rounded-lg text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    title={t.auth_logout_button}
                  >
                    <LogOutIcon className="w-5 h-5" />
                  </button>
                )}
                <div className="h-4 w-px bg-gray-300 dark:bg-gray-600 mx-1" />
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={toggleSidebar}
            className="p-1.5 rounded-full bg-light-secondary dark:bg-dark-tertiary hover:bg-light-tertiary dark:hover:bg-dark-primary transition-transform duration-300"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <motion.div animate={{ rotate: isCollapsed ? 180 : 0 }}>
              <ArrowLeftIcon className="w-5 h-5" />
            </motion.div>
          </button>
        </div>
        
        {/* --- Navegación Principal --- */}
        <nav className="flex-1 p-4 overflow-y-auto overflow-x-hidden">
          <ul className="space-y-2">
            {navItems.map(item => (
              <SidebarItem
                key={item.id}
                item={item}
                isCollapsed={isCollapsed}
                isActive={activeView === item.id}
                onItemClick={onViewChange}
              />
            ))}
          </ul>

          <div className="mt-4 pt-4 border-t border-light-tertiary dark:border-dark-tertiary">
            <button
               onClick={toggleDrawer}
               className={`flex items-center p-3 rounded-lg w-full text-left transition-colors duration-200 text-sm font-medium hover:bg-light-secondary dark:hover:bg-dark-tertiary ${isCollapsed ? 'justify-center' : ''}`}
            >
               <div className="relative">
                  <ShoppingCartIcon className="w-6 h-6 flex-shrink-0" />
                  {cartItems.length > 0 && (
                     <span className="absolute -top-2 -right-2 bg-accent-premium text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                        {cartItems.length}
                     </span>
                  )}
               </div>
               <AnimatePresence>
                  {!isCollapsed && (
                    <motion.span initial="hidden" animate="visible" exit="hidden" variants={textVariants} className="whitespace-nowrap font-bold">
                      {t.cart_title}
                    </motion.span>
                  )}
                </AnimatePresence>
            </button>
          </div>

        </nav>

        {/* --- Pie de página --- */}
        <div className="mt-auto flex-shrink-0">
          <div className="p-4">
            <div className="relative group">
              <button
                onClick={toggleTheme}
                className={`flex items-center p-3 rounded-lg w-full text-left transition-colors duration-200 text-sm font-medium hover:bg-light-secondary dark:hover:bg-dark-tertiary ${isCollapsed ? 'justify-center' : ''}`}
                aria-label={t.toggle_theme_label}
              >
                {isDarkMode ? <Sun className="w-6 h-6 flex-shrink-0" /> : <Moon className="w-6 h-6 flex-shrink-0" />}
                <AnimatePresence>
                  {!isCollapsed && (
                    <motion.span initial="hidden" animate="visible" exit="hidden" variants={textVariants} className="whitespace-nowrap">
                      {themeButtonLabel}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
              {isCollapsed && (
                <div className="absolute left-full bottom-2 ml-4 px-3 py-1.5 bg-dark-tertiary text-white text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                  {themeButtonLabel}
                </div>
              )}
            </div>
          </div>

          <div className="p-4 border-t border-light-tertiary dark:border-dark-tertiary">
            <div className="relative group">
              <button
                onClick={actions.handleLanguageClick}
                className={`flex items-center p-3 rounded-lg w-full text-left transition-colors duration-200 text-sm font-medium hover:bg-light-secondary dark:hover:bg-dark-tertiary ${isCollapsed ? 'justify-center' : ''}`}
                aria-label={t.toggle_language_label}
              >
                <LanguageIcon className="w-6 h-6 flex-shrink-0" />
                <AnimatePresence>
                  {!isCollapsed && (
                    <motion.span initial="hidden" animate="visible" exit="hidden" variants={textVariants} className="whitespace-nowrap font-bold">
                      {language.toUpperCase()}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
              {isCollapsed && (
                <div className="absolute left-full bottom-2 ml-4 px-3 py-1.5 bg-dark-tertiary text-white text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                  {t.toggle_language_label}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};