import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlogPost } from '../../../types';
import { NewspaperIcon, TrashIcon, XCircleIcon } from '../../../components/icons';

interface BlogManagerProps {
  posts: BlogPost[];
  onAdd: (p: BlogPost) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
}

export const BlogManager: React.FC<BlogManagerProps> = ({ posts, onAdd, onDelete }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newPost, setNewPost] = useState<Partial<BlogPost>>({
    title: '',
    excerpt: '',
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    category: 'Development',
    readTime: '5 min read',
    url: '#'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title || !newPost.excerpt) return;
    
    await onAdd(newPost as BlogPost);
    setIsAdding(false);
    // Reset
    setNewPost({
      title: '',
      excerpt: '',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      category: 'Development',
      readTime: '5 min read',
      url: '#'
    });
  };

  return (
    <div className="relative pb-24 md:pb-0">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold dark:text-white font-serif">Blog & Noticias</h2>
        {/* Desktop Button */}
        <button
          onClick={() => setIsAdding(true)}
          className="hidden md:block bg-accent-premium text-white px-5 py-2.5 rounded-xl shadow-lg hover:bg-violet-600 hover:shadow-accent-premium/30 transition-all text-sm font-bold"
        >
          Nuevo Artículo
        </button>
      </div>

      {/* Mobile FAB */}
      <button
        onClick={() => setIsAdding(true)}
        className="md:hidden fixed bottom-6 right-6 z-40 w-14 h-14 bg-accent-premium text-white rounded-full shadow-2xl shadow-accent-premium/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
        aria-label="Create new article"
      >
        <span className="text-3xl font-light leading-none mb-1">+</span>
      </button>

      {/* Modal Form Overlay */}
      <AnimatePresence>
        {isAdding && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-dark-secondary w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50/50 dark:bg-dark-tertiary/20">
                <h3 className="font-bold text-lg dark:text-white">Nuevo Artículo</h3>
                <button onClick={() => setIsAdding(false)} className="text-gray-400 hover:text-red-500 transition-colors">
                  <XCircleIcon className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto">
                <form id="blog-form" onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Título</label>
                    <input
                      type="text"
                      className="w-full p-3 rounded-xl bg-gray-50 dark:bg-dark-tertiary border-transparent focus:border-accent-premium focus:bg-white dark:focus:bg-dark-primary focus:ring-0 transition-all dark:text-white"
                      value={newPost.title}
                      onChange={e => setNewPost({...newPost, title: e.target.value})}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Categoría</label>
                        <input
                          type="text"
                          className="w-full p-3 rounded-xl bg-gray-50 dark:bg-dark-tertiary border-transparent focus:border-accent-premium dark:text-white transition-all"
                          value={newPost.category}
                          onChange={e => setNewPost({...newPost, category: e.target.value})}
                          required
                        />
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Lectura</label>
                        <input
                          type="text"
                          className="w-full p-3 rounded-xl bg-gray-50 dark:bg-dark-tertiary border-transparent focus:border-accent-premium dark:text-white transition-all"
                          value={newPost.readTime}
                          onChange={e => setNewPost({...newPost, readTime: e.target.value})}
                        />
                     </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Extracto</label>
                    <textarea
                      className="w-full p-3 rounded-xl bg-gray-50 dark:bg-dark-tertiary border-transparent focus:border-accent-premium dark:text-white transition-all"
                      rows={3}
                      value={newPost.excerpt}
                      onChange={e => setNewPost({...newPost, excerpt: e.target.value})}
                      required
                    />
                  </div>
                </form>
              </div>

              <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-dark-tertiary/30">
                <button 
                  form="blog-form"
                  type="submit" 
                  className="w-full bg-accent-premium text-white py-3 rounded-xl font-bold shadow-lg shadow-accent-premium/20 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Publicar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid Layout (Replaces Table on Mobile) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {posts.map(post => (
          <motion.div 
            key={post.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-dark-secondary p-5 rounded-2xl shadow-sm hover:shadow-md border border-light-tertiary dark:border-dark-tertiary flex flex-col relative group transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-2">
               <span className="px-2.5 py-1 text-xs rounded-lg bg-accent-premium/10 text-accent-premium font-bold tracking-wide">
                  {post.category}
               </span>
               <button 
                  onClick={() => post.id && onDelete(post.id)}
                  className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
            </div>

            <h3 className="font-bold text-lg dark:text-white mb-1 leading-tight group-hover:text-accent-premium transition-colors">{post.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4 leading-relaxed">{post.excerpt}</p>

            <div className="mt-auto flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-3 font-medium">
               <span className="flex items-center gap-1.5">
                 <NewspaperIcon className="w-3.5 h-3.5" /> {post.date}
               </span>
               <span>{post.readTime}</span>
            </div>
          </motion.div>
        ))}
        {posts.length === 0 && (
          <div className="col-span-full py-20 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-3xl">
            <NewspaperIcon className="w-12 h-12 mb-3 opacity-20" />
            <p className="font-medium">No hay artículos publicados.</p>
          </div>
        )}
      </div>
    </div>
  );
};