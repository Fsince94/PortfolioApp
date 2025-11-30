import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SendIcon, WhatsAppIcon } from '../../components/icons';
import { ConfirmDialog } from '../../components/ui/ConfirmDialog';
import type { Translation } from '../../lib/i18n';

interface ContactViewProps {
  t: Translation;
}

export const ContactView: React.FC<ContactViewProps> = ({ t }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmitRequest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsConfirmOpen(true);
  };

  const handleConfirmedSubmit = async () => {
    setIsConfirmOpen(false);
    setStatus('submitting');
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('submitted');
  };

  if (status === 'submitted') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg mx-auto flex flex-col items-center justify-center min-h-screen py-20 px-6"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-serif">{t.contact_form_success_title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {t.contact_form_success_message}
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            setFormData({ name: '', email: '', message: '' });
          }}
          className="group py-3 px-6 bg-accent-premium text-white font-semibold rounded-lg shadow-md hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-premium transition-all duration-300"
        >
          {t.contact_form_success_button}
        </button>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-12">
      <ConfirmDialog
        isOpen={isConfirmOpen}
        title="¿Enviar mensaje?"
        description={`Estás a punto de enviar un mensaje como ${formData.name}. ¿Deseas continuar?`}
        confirmLabel="Sí, enviar"
        cancelLabel="Revisar"
        onConfirm={handleConfirmedSubmit}
        onCancel={() => setIsConfirmOpen(false)}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-serif">{t.contact_title}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-lg">
          {t.contact_intro}
        </p>
        
        <form onSubmit={handleFormSubmitRequest} className="space-y-10 max-w-lg">
          
          <div className="relative z-0">
            <input 
              type="text" 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="block py-2.5 px-0 w-full text-base text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-accent-premium peer" 
              placeholder=" " 
              required
            />
            <label 
              htmlFor="name" 
              className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent-premium peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {t.contact_form_name}
            </label>
          </div>

          <div className="relative z-0">
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="block py-2.5 px-0 w-full text-base text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-accent-premium peer" 
              placeholder=" " 
              required
            />
            <label 
              htmlFor="email" 
              className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent-premium peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {t.contact_form_email}
            </label>
          </div>

          <div className="relative z-0">
            <textarea 
              id="message" 
              name="message" 
              rows={3} 
              value={formData.message}
              onChange={handleInputChange}
              className="block py-2.5 px-0 w-full text-base text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-accent-premium peer" 
              placeholder=" "
              required
            ></textarea>
            <label 
              htmlFor="message" 
              className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent-premium peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {t.contact_form_message}
            </label>
          </div>

          <div>
            <button 
              type="submit" 
              className="group w-full py-3 px-4 bg-accent-premium text-white font-semibold rounded-lg shadow-md hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-premium transition-all duration-300 flex items-center justify-center gap-2 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
              disabled={status === 'submitting'}
            >
              <span>{status === 'submitting' ? t.contact_form_button_submitting : t.contact_form_button}</span>
              <SendIcon className={`w-5 h-5 transition-transform duration-300 ${status !== 'submitting' && 'group-hover:translate-x-1'}`} />
            </button>
          </div>
        </form>
      </motion.div>

      <motion.a
        href="https://wa.me/58412482882"
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-24 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-colors hover:bg-green-600 md:bottom-10 md:right-10"
        aria-label={t.contact_whatsapp_tooltip}
        initial={{ scale: 0, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <WhatsAppIcon className="h-8 w-8" />
        <div className="absolute bottom-full mb-2 right-0 px-3 py-1.5 bg-dark-tertiary text-white text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          {t.contact_whatsapp_tooltip}
        </div>
      </motion.a>
    </div>
  );
};