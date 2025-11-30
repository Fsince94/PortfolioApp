import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDatabase } from '../../hooks/useDatabase';
import { ProjectsManager } from './dashboard/ProjectsManager';
import { BlogManager } from './dashboard/BlogManager';
import { OrdersManager } from './dashboard/OrdersManager';
import { SettingsIcon, LogOutIcon, ProjectIcon, NewspaperIcon, ShoppingCartIcon } from '../../components/icons';

export const AdminView: React.FC = () => {
  const { 
    projects, addProject, deleteProject, 
    blogPosts, addBlogPost, deleteBlogPost,
    orders, updateOrderStatus,
    loading 
  } = useDatabase();
  const [activeTab, setActiveTab] = useState<'projects' | 'blog' | 'orders'>('projects');
  
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('portfolio_admin_auth') === 'true';
    }
    return false;
  });

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.hash = '';
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    sessionStorage.removeItem('portfolio_admin_auth');
    setIsAuthenticated(false);
    window.location.hash = '';
  };

  if (!isAuthenticated) return null;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-primary">
        <div className="text-xl font-serif text-gray-500 dark:text-gray-400 animate-pulse">
          Conectando...
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'projects', label: 'Proyectos', icon: ProjectIcon },
    { id: 'blog', label: 'Blog', icon: NewspaperIcon },
    { id: 'orders', label: 'Órdenes', icon: ShoppingCartIcon, count: orders.filter(o => o.status === 'pending').length },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-primary flex flex-col md:flex-row font-sans">
      
      {/* 📱 Mobile Header SOTA */}
      <header className="md:hidden sticky top-0 z-30 bg-white/80 dark:bg-dark-secondary/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 pb-2">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-accent-premium rounded-lg text-white">
               <SettingsIcon className="w-5 h-5" />
            </div>
            <span className="font-bold text-gray-900 dark:text-white font-serif">Admin</span>
          </div>
          <button onClick={handleLogout} className="p-2 text-red-500 bg-red-50 dark:bg-red-900/20 rounded-full">
            <LogOutIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Segmented Control */}
        <div className="px-4">
          <div className="flex bg-gray-100 dark:bg-dark-tertiary p-1 rounded-xl relative">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`relative flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-lg transition-colors z-10 ${activeTab === tab.id ? 'text-gray-900 dark:text-white font-bold' : 'text-gray-500 dark:text-gray-400'}`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-white dark:bg-dark-secondary shadow-sm rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  {tab.count !== undefined && tab.count > 0 && (
                     <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* 🖥️ Desktop Sidebar (Classic) */}
      <aside className="hidden md:flex w-64 bg-white dark:bg-dark-secondary border-r border-gray-200 dark:border-gray-700 flex-col flex-shrink-0 h-screen sticky top-0">
        <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3">
           <div className="p-2 bg-accent-premium rounded-xl shadow-lg shadow-accent-premium/20 text-white">
              <SettingsIcon className="w-6 h-6" />
            </div>
            <span className="font-bold text-gray-900 dark:text-white font-serif text-lg">Admin Panel</span>
        </div>
        
        <nav className="p-4 space-y-2 flex-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm
                ${activeTab === tab.id 
                  ? 'bg-accent-premium text-white shadow-md' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-tertiary'}`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
              {tab.count !== undefined && tab.count > 0 && (
                <span className="ml-auto bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 mt-auto border-t border-gray-100 dark:border-gray-800">
           <button 
            onClick={handleLogout}
            className="w-full px-4 py-3 bg-red-50 dark:bg-red-900/10 hover:bg-red-100 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl font-bold flex items-center gap-3 transition-colors text-sm"
          >
            <LogOutIcon className="w-5 h-5" />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* 🚀 Contenido Principal */}
      <main className="flex-1 p-4 md:p-12 overflow-y-auto min-h-screen md:h-screen">
        <div className="max-w-5xl mx-auto pb-20 md:pb-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'projects' && (
                <ProjectsManager 
                  projects={projects}
                  onAdd={addProject}
                  onDelete={deleteProject}
                />
              )}

              {activeTab === 'blog' && (
                <BlogManager 
                  posts={blogPosts}
                  onAdd={addBlogPost}
                  onDelete={deleteBlogPost}
                />
              )}

              {activeTab === 'orders' && (
                <OrdersManager 
                  orders={orders}
                  onUpdateStatus={updateOrderStatus}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};