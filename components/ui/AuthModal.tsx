import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { Translation } from '../../lib/i18n';
import { LogInIcon, UserPlusIcon } from '../icons';
import { useDatabase } from '../../hooks/useDatabase';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register';
  t: Translation;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 20 },
};

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'login', t }) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // 💡 State for form inputs
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: ''
  });

  const { login } = useDatabase();

  // Reiniciar estado al abrir si cambia initialMode
  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setSuccess(null);
      setError(null);
      setFormData({ username: '', password: '', name: '' });
    }
  }, [isOpen, initialMode]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === 'auth-email') setFormData(prev => ({ ...prev, username: value }));
    if (id === 'auth-password') setFormData(prev => ({ ...prev, password: value }));
    if (id === 'auth-name') setFormData(prev => ({ ...prev, name: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (mode === 'login') {
      try {
        const isValid = await login(formData.username, formData.password);
        
        if (isValid) {
          setSuccess(t.auth_success_login);
          // 💡 Persist session
          sessionStorage.setItem('portfolio_admin_auth', 'true');
          
          setTimeout(() => {
            // 💡 Redirect to Admin Panel
            window.location.hash = '#admin';
            onClose();
          }, 1000);
        } else {
          setError("Credenciales inválidas");
          setIsLoading(false);
        }
      } catch (err) {
        setError("Error de conexión");
        setIsLoading(false);
      }
    } else {
      // Simulation for Register (Admin creation usually manually handled or disabled in public view)
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsLoading(false);
      setSuccess(t.auth_success_register);
      setTimeout(() => {
        onClose();
        setSuccess(null);
      }, 1500);
    }
  };

  const toggleMode = () => {
    setMode(prev => prev === 'login' ? 'register' : 'login');
    setSuccess(null);
    setError(null);
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="relative w-full max-w-sm bg-white dark:bg-dark-secondary rounded-2xl shadow-2xl border border-light-tertiary dark:border-dark-tertiary overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header Decorativo */}
            <div className="h-2 w-full bg-gradient-to-r from-accent-premium to-violet-500" />

            <div className="p-8">
              <div className="text-center mb-8">
                <div className="mx-auto w-12 h-12 rounded-full bg-accent-premium/10 flex items-center justify-center text-accent-premium mb-4">
                  {mode === 'login' ? <LogInIcon className="w-6 h-6" /> : <UserPlusIcon className="w-6 h-6" />}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-serif">
                  {mode === 'login' ? t.auth_login_title : t.auth_register_title}
                </h2>
              </div>

              {success ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 text-green-500 font-bold"
                >
                  {success}
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <AnimatePresence mode="popLayout">
                    {mode === 'register' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{ overflow: 'hidden' }}
                      >
                         <div className="relative z-0">
                            <input 
                              type="text" 
                              id="auth-name"
                              value={formData.name}
                              onChange={handleInputChange}
                              className="block py-2.5 px-0 w-full text-base text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-accent-premium peer" 
                              placeholder=" " 
                              required={mode === 'register'}
                            />
                            <label 
                              htmlFor="auth-name" 
                              className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent-premium peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                              {t.auth_name_label}
                            </label>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="relative z-0">
                    <input 
                      type="text" 
                      id="auth-email"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="block py-2.5 px-0 w-full text-base text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-accent-premium peer" 
                      placeholder=" " 
                      required
                    />
                    <label 
                      htmlFor="auth-email" 
                      className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent-premium peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      {t.auth_email_label}
                    </label>
                  </div>

                  <div className="relative z-0">
                    <input 
                      type="password" 
                      id="auth-password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="block py-2.5 px-0 w-full text-base text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-accent-premium peer" 
                      placeholder=" " 
                      required
                    />
                    <label 
                      htmlFor="auth-password" 
                      className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent-premium peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      {t.auth_password_label}
                    </label>
                  </div>

                  {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-4 bg-accent-premium text-white font-bold rounded-lg shadow-lg hover:shadow-accent-premium/30 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? '...' : (mode === 'login' ? t.auth_login_button : t.auth_register_button)}
                  </button>
                </form>
              )}

              <div className="mt-6 text-center">
                <button
                  onClick={toggleMode}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent-premium dark:hover:text-accent-premium transition-colors underline decoration-transparent hover:decoration-current"
                >
                  {mode === 'login' ? t.auth_toggle_to_register : t.auth_toggle_to_login}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};