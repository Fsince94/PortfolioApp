import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { Translation } from '../../lib/i18n';
import { TrashIcon, ShoppingCartIcon, XCircleIcon, BankIcon, BinanceIcon, WalletIcon, CheckCircleIcon } from '../icons';
import { useDatabase } from '../../hooks/useDatabase';
import { Order } from '../../types';

interface CartDrawerProps {
  t: Translation;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const drawerVariants = {
  hidden: { x: '100%' },
  visible: { x: 0 },
};

export const CartDrawer: React.FC<CartDrawerProps> = ({ t }) => {
  const { cartItems, removeFromCart, isDrawerOpen, toggleDrawer, totalAmount, clearCart } = useCart();
  const { createOrder } = useDatabase();
  const [view, setView] = useState<'cart' | 'checkout' | 'success'>('cart');
  
  // Checkout Form State
  const [formData, setFormData] = useState({ name: '', email: '', reference: '' });
  const [paymentMethod, setPaymentMethod] = useState<'pago_movil' | 'binance' | 'kontigo'>('pago_movil');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const order: Order = {
      customerName: formData.name,
      customerEmail: formData.email,
      totalAmount,
      status: 'pending',
      paymentMethod,
      paymentReference: formData.reference,
      items: cartItems,
      date: new Date().toISOString()
    };

    try {
      await createOrder(order);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate loading
      clearCart();
      setView('success');
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetFlow = () => {
    setView('cart');
    toggleDrawer();
    setFormData({ name: '', email: '', reference: '' });
  };

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={toggleDrawer}
      />

      {/* Drawer */}
      <motion.div
        className="relative w-full max-w-md bg-white dark:bg-dark-secondary h-full shadow-2xl flex flex-col"
        variants={drawerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
        {/* Header */}
        <div className="p-5 border-b border-light-tertiary dark:border-dark-tertiary flex items-center justify-between bg-white/50 dark:bg-dark-secondary/50 backdrop-blur-md sticky top-0 z-10">
          <h2 className="text-xl font-bold font-serif dark:text-white flex items-center gap-2">
            <ShoppingCartIcon className="w-5 h-5 text-accent-premium" />
            {view === 'cart' ? t.cart_title : t.checkout_title}
          </h2>
          <button onClick={toggleDrawer} className="text-gray-500 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-dark-tertiary">
            <XCircleIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 scroll-smooth">
          {view === 'cart' && (
            <>
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <ShoppingCartIcon className="w-16 h-16 mb-4 opacity-20" />
                  <p>{t.cart_empty}</p>
                </div>
              ) : (
                <ul className="space-y-4">
                  {cartItems.map(item => (
                    <li key={item.id} className="flex gap-4 items-center bg-gray-50 dark:bg-dark-tertiary/30 p-3 rounded-2xl border border-gray-100 dark:border-gray-800">
                      <div className="w-16 h-16 bg-accent-premium/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                         {/* Simple visual placeholder */}
                         🛒
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm dark:text-white line-clamp-1">{item.title}</h4>
                        <p className="text-accent-premium font-bold text-sm">${item.price?.toFixed(2)}</p>
                      </div>
                      <button 
                        onClick={() => item.id && removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-600 p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}

          {view === 'checkout' && (
            <form id="checkout-form" onSubmit={handleCheckout} className="space-y-6">
              {/* Payment Method Selector */}
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t.checkout_method_label}</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'pago_movil', icon: BankIcon, label: 'Pago Móvil' },
                    { id: 'binance', icon: BinanceIcon, label: 'Binance' },
                    { id: 'kontigo', icon: WalletIcon, label: 'Kontigo' }
                  ].map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setPaymentMethod(method.id as any)}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${
                        paymentMethod === method.id 
                          ? 'border-accent-premium bg-accent-premium/10 text-accent-premium shadow-sm' 
                          : 'border-gray-200 dark:border-gray-700 text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-dark-primary'
                      }`}
                    >
                      <method.icon className="w-6 h-6 mb-1" />
                      <span className="text-[10px] font-bold uppercase">{method.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Details Box */}
              <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-700/30 rounded-xl p-4 shadow-sm">
                <h4 className="text-xs font-bold uppercase text-yellow-600 dark:text-yellow-400 mb-2 tracking-wide">{t.payment_details_title}</h4>
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1 font-mono">
                  {paymentMethod === 'pago_movil' && (
                    <>
                      <p>Banco: <span className="font-bold">Banesco (0134)</span></p>
                      <p>Tel: <span className="font-bold">0412-4828842</span></p>
                      <p>CI: <span className="font-bold">V-26.XXX.XXX</span></p>
                    </>
                  )}
                  {paymentMethod === 'binance' && (
                    <>
                      <p>Binance ID: <span className="font-bold">234857XXX</span></p>
                      <p>Email: <span className="font-bold">joaquin@example.com</span></p>
                    </>
                  )}
                  {paymentMethod === 'kontigo' && (
                    <>
                      <p>Wallet: <span className="font-bold">@joaquin.dev</span></p>
                    </>
                  )}
                </div>
              </div>

              {/* User Data Inputs */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1 font-medium">{t.checkout_name_label}</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full p-3 rounded-xl bg-gray-50 dark:bg-dark-tertiary border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-accent-premium focus:border-transparent focus:outline-none dark:text-white transition-all"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1 font-medium">{t.checkout_email_label}</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full p-3 rounded-xl bg-gray-50 dark:bg-dark-tertiary border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-accent-premium focus:border-transparent focus:outline-none dark:text-white transition-all"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1 font-medium">{t.checkout_reference_label}</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="ej: 123456"
                    className="w-full p-3 rounded-xl bg-gray-50 dark:bg-dark-tertiary border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-accent-premium focus:border-transparent focus:outline-none dark:text-white font-mono transition-all"
                    value={formData.reference}
                    onChange={e => setFormData({...formData, reference: e.target.value})}
                  />
                </div>
              </div>
            </form>
          )}

          {view === 'success' && (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
              <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center"
              >
                <CheckCircleIcon className="w-10 h-10" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold dark:text-white font-serif">{t.checkout_success_title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-xs mx-auto">{t.checkout_success_message}</p>
              </div>
              <button onClick={resetFlow} className="text-accent-premium font-bold hover:underline">
                Cerrar
              </button>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {view !== 'success' && (
          <div className="p-5 border-t border-light-tertiary dark:border-dark-tertiary bg-gray-50/80 dark:bg-dark-tertiary/20 backdrop-blur-sm">
            <div className="flex justify-between items-end mb-4">
              <span className="text-gray-500 dark:text-gray-400 font-medium">{t.cart_total}</span>
              <span className="text-3xl font-bold dark:text-white tracking-tight">${totalAmount.toFixed(2)}</span>
            </div>
            
            {view === 'cart' ? (
              <button 
                onClick={() => setView('checkout')}
                disabled={cartItems.length === 0}
                className="w-full py-3.5 bg-accent-premium text-white font-bold rounded-xl shadow-lg hover:shadow-accent-premium/30 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {t.cart_checkout_button}
              </button>
            ) : (
              <button 
                form="checkout-form"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-green-500 text-white font-bold rounded-xl shadow-lg hover:shadow-green-500/30 hover:scale-[1.02] disabled:opacity-70 transition-all flex justify-center items-center"
              >
                {isSubmitting ? 'Procesando...' : t.checkout_submit_button}
              </button>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};