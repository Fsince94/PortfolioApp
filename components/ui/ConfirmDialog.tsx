
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

// 💡 Interface clara para las props, siguiendo Interface Segregation Principle.
// Solo pedimos lo necesario para que el componente funcione.
interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
  variant?: 'danger' | 'info'; // 🎨 Permite variantes visuales
}

// ⚙️ Backdrop para oscurecer el fondo y capturar el foco visual.
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// ⚙️ Modal con efecto de entrada suave (pop-up).
const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 20 },
};

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  title,
  description,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  onConfirm,
  onCancel,
  variant = 'info'
}) => {
  // 💡 Usamos Portal para renderizar el modal fuera de la jerarquía DOM actual,
  // evitando problemas con z-index o overflow en contenedores padres.
  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" role="dialog" aria-modal="true">
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onCancel} // UX: Cerrar al hacer clic fuera
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-md bg-white dark:bg-dark-secondary rounded-xl shadow-2xl border border-light-tertiary dark:border-dark-tertiary overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white font-serif mb-2">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                {description}
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 p-4 bg-light-secondary/50 dark:bg-dark-tertiary/30 border-t border-light-tertiary dark:border-dark-tertiary">
              <button
                onClick={onCancel}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-tertiary rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                {cancelLabel}
              </button>
              <button
                onClick={onConfirm}
                className={`px-4 py-2 text-sm font-bold text-white rounded-lg shadow-md transition-transform transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  variant === 'danger' 
                    ? 'bg-red-500 hover:bg-red-600 focus:ring-red-500' 
                    : 'bg-accent-premium hover:opacity-90 focus:ring-accent-premium'
                }`}
              >
                {confirmLabel}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};
