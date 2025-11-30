import React from 'react';
import { motion } from 'framer-motion';
import { Order, OrderStatus } from '../../../types';
import { CheckCircleIcon, XCircleIcon, BankIcon, BinanceIcon, WalletIcon } from '../../../components/icons';

interface OrdersManagerProps {
  orders: Order[];
  onUpdateStatus: (id: number, status: OrderStatus) => Promise<void>;
}

const statusStyles = {
  pending: 'bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-700/50',
  approved: 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-700/50',
  rejected: 'bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-700/50'
};

const PaymentIcon = ({ method }: { method: string }) => {
  if (method === 'pago_movil') return <BankIcon className="w-4 h-4" />;
  if (method === 'binance') return <BinanceIcon className="w-4 h-4" />;
  return <WalletIcon className="w-4 h-4" />;
};

export const OrdersManager: React.FC<OrdersManagerProps> = ({ orders, onUpdateStatus }) => {
  return (
    <div className="space-y-6 pb-24 md:pb-0">
      <h2 className="text-xl md:text-2xl font-bold dark:text-white mb-6 font-serif">Gestión de Órdenes</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {orders.map((order) => (
          <motion.div 
            key={order.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-dark-secondary rounded-2xl border border-light-tertiary dark:border-dark-tertiary shadow-sm hover:shadow-md transition-shadow p-5 overflow-hidden flex flex-col h-full"
          >
            {/* Header: ID, Date & Status */}
            <div className="flex justify-between items-start mb-4">
               <div>
                  <h3 className="font-bold text-lg dark:text-white leading-none font-mono">#{order.id?.toString().padStart(4, '0')}</h3>
                  <span className="text-xs text-gray-400 font-medium">{new Date(order.date).toLocaleDateString()}</span>
               </div>
               <span className={`text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border font-bold ${statusStyles[order.status]}`}>
                    {order.status}
               </span>
            </div>

            {/* Content: Customer & Payment */}
            <div className="flex-1 grid grid-cols-2 gap-4 mb-4">
               <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Cliente</p>
                  <p className="font-bold text-sm text-gray-800 dark:text-gray-200 line-clamp-1">{order.customerName}</p>
                  <p className="text-xs text-gray-500 truncate">{order.customerEmail}</p>
               </div>
               <div className="bg-gray-50 dark:bg-dark-tertiary p-2.5 rounded-xl border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mb-1">
                     <PaymentIcon method={order.paymentMethod} />
                     <span className="capitalize font-medium">{order.paymentMethod.replace('_', ' ')}</span>
                  </div>
                  <p className="font-mono text-xs font-bold dark:text-gray-300 truncate" title={order.paymentReference}>
                    Ref: {order.paymentReference}
                  </p>
               </div>
            </div>

            {/* Items Summary */}
            <div className="mb-4 bg-gray-50/50 dark:bg-dark-primary/30 p-3.5 rounded-xl border border-dashed border-gray-200 dark:border-gray-700">
               <ul className="text-sm dark:text-gray-300 space-y-1.5 max-h-24 overflow-y-auto custom-scrollbar">
                 {order.items.map((item, idx) => (
                    <li key={idx} className="flex justify-between text-xs">
                       <span className="truncate pr-2 font-medium">{item.title} <span className="text-gray-400 font-normal">x{item.quantity}</span></span>
                       <span className="font-mono text-gray-600 dark:text-gray-400">${((item.price || 0) * item.quantity).toFixed(2)}</span>
                    </li>
                 ))}
               </ul>
               <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Total</span>
                  <span className="text-xl font-bold text-accent-premium">${order.totalAmount.toFixed(2)}</span>
               </div>
            </div>

            {/* Actions Footer */}
            {order.status === 'pending' ? (
               <div className="grid grid-cols-2 gap-3 mt-auto">
                  <button 
                    onClick={() => order.id && onUpdateStatus(order.id, 'rejected')}
                    className="flex justify-center items-center gap-2 py-2.5 rounded-xl text-red-600 bg-red-50 hover:bg-red-100 dark:bg-red-900/10 dark:hover:bg-red-900/20 font-bold text-sm transition-all active:scale-95"
                  >
                     <XCircleIcon className="w-4 h-4" /> Rechazar
                  </button>
                  <button 
                    onClick={() => order.id && onUpdateStatus(order.id, 'approved')}
                    className="flex justify-center items-center gap-2 py-2.5 rounded-xl text-white bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/20 font-bold text-sm transition-all active:scale-95"
                  >
                     <CheckCircleIcon className="w-4 h-4" /> Aprobar
                  </button>
               </div>
            ) : (
               <div className="mt-auto text-center py-2 bg-gray-50 dark:bg-dark-tertiary/20 rounded-xl border border-gray-100 dark:border-gray-800">
                  <span className="text-xs font-medium text-gray-400 italic">
                    Orden procesada el {new Date().toLocaleDateString()}
                  </span>
               </div>
            )}

          </motion.div>
        ))}
        {orders.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-3xl">
            <WalletIcon className="w-12 h-12 mb-2 opacity-20" />
            <p className="text-sm font-medium">No hay órdenes registradas.</p>
          </div>
        )}
      </div>
    </div>
  );
};