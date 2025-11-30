import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../../types';
import { roleBadges, technologyIcons } from '../../../lib/iconMap';
import { ProjectIcon, ShoppingCartIcon, XCircleIcon, TrashIcon } from '../../../components/icons';

interface ProjectsManagerProps {
  projects: Project[];
  onAdd: (p: Project) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
}

export const ProjectsManager: React.FC<ProjectsManagerProps> = ({ projects, onAdd, onDelete }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newProject, setNewProject] = useState<Partial<Project>>({
    title: '',
    description: '',
    roles: [],
    technologies: [],
    buyUrl: '',
    price: 0
  });

  const availableRoles = Object.keys(roleBadges) as ('Frontend' | 'Backend' | 'API')[];
  const availableTechs = Object.keys(technologyIcons);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title || !newProject.description) return;
    
    await onAdd(newProject as Project);
    setIsAdding(false);
    setNewProject({ title: '', description: '', roles: [], technologies: [], buyUrl: '', price: 0 });
  };

  const toggleRole = (role: 'Frontend' | 'Backend' | 'API') => {
    const roles = newProject.roles || [];
    if (roles.includes(role)) {
      setNewProject({ ...newProject, roles: roles.filter(r => r !== role) });
    } else {
      setNewProject({ ...newProject, roles: [...roles, role] });
    }
  };

  const toggleTech = (tech: string) => {
    const techs = newProject.technologies || [];
    if (techs.includes(tech)) {
      setNewProject({ ...newProject, technologies: techs.filter(t => t !== tech) });
    } else {
      setNewProject({ ...newProject, technologies: [...techs, tech] });
    }
  };

  return (
    <div className="relative pb-24 md:pb-0">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold dark:text-white font-serif">Proyectos</h2>
        <button
          onClick={() => setIsAdding(true)}
          className="hidden md:block bg-accent-premium text-white px-5 py-2.5 rounded-xl shadow-lg hover:bg-violet-600 hover:shadow-accent-premium/30 transition-all text-sm font-bold"
        >
          Nuevo Proyecto
        </button>
      </div>

       {/* Mobile FAB */}
       <button
        onClick={() => setIsAdding(true)}
        className="md:hidden fixed bottom-6 right-6 z-40 w-14 h-14 bg-accent-premium text-white rounded-full shadow-2xl shadow-accent-premium/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
        aria-label="Create new project"
      >
        <span className="text-3xl font-light leading-none mb-1">+</span>
      </button>

      {/* Modal Overlay */}
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
              className="bg-white dark:bg-dark-secondary w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
               <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50/50 dark:bg-dark-tertiary/20">
                <h3 className="font-bold text-lg dark:text-white">Crear Proyecto</h3>
                <button onClick={() => setIsAdding(false)} className="text-gray-400 hover:text-red-500 transition-colors">
                  <XCircleIcon className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto">
                <form id="project-form" onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                         <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Título</label>
                         <input
                          type="text"
                          className="w-full p-3 rounded-xl bg-gray-50 dark:bg-dark-tertiary border-transparent focus:border-accent-premium dark:text-white transition-all"
                          value={newProject.title}
                          onChange={e => setNewProject({...newProject, title: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                         <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Precio ($)</label>
                         <input
                          type="number"
                          step="0.01"
                          className="w-full p-3 rounded-xl bg-gray-50 dark:bg-dark-tertiary border-transparent focus:border-accent-premium dark:text-white transition-all"
                          value={newProject.price || ''}
                          onChange={e => setNewProject({...newProject, price: parseFloat(e.target.value)})}
                        />
                      </div>
                    </div>
                    
                    <div>
                         <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Descripción</label>
                         <textarea
                          className="w-full p-3 rounded-xl bg-gray-50 dark:bg-dark-tertiary border-transparent focus:border-accent-premium dark:text-white transition-all"
                          rows={3}
                          value={newProject.description}
                          onChange={e => setNewProject({...newProject, description: e.target.value})}
                          required
                        />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase mb-2">Roles</p>
                      <div className="flex gap-2 flex-wrap">
                        {availableRoles.map(role => (
                          <button
                            key={role}
                            type="button"
                            onClick={() => toggleRole(role)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                              newProject.roles?.includes(role) 
                                ? 'bg-accent-premium text-white border-accent-premium shadow-md' 
                                : 'bg-gray-50 dark:bg-dark-tertiary text-gray-500 border-transparent hover:bg-gray-100 dark:hover:bg-dark-primary'
                            }`}
                          >
                            {role}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                       <p className="text-xs font-bold text-gray-500 uppercase mb-2">Tech Stack</p>
                       <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto p-2 bg-gray-50 dark:bg-dark-tertiary rounded-xl border border-gray-100 dark:border-gray-700 custom-scrollbar">
                          {availableTechs.map(tech => (
                            <button
                              key={tech}
                              type="button"
                              onClick={() => toggleTech(tech)}
                              className={`px-2 py-1 rounded text-xs transition-all ${
                                newProject.technologies?.includes(tech)
                                  ? 'bg-green-500 text-white shadow-sm'
                                  : 'bg-white dark:bg-dark-primary text-gray-500 border border-gray-200 dark:border-gray-600 hover:border-green-400'
                              }`}
                            >
                              {tech}
                            </button>
                          ))}
                       </div>
                    </div>
                     <div>
                         <label className="block text-xs font-bold text-gray-500 uppercase mb-1">URL Compra</label>
                         <input
                          type="text"
                          className="w-full p-3 rounded-xl bg-gray-50 dark:bg-dark-tertiary border-transparent focus:border-accent-premium dark:text-white transition-all"
                          value={newProject.buyUrl}
                          onChange={e => setNewProject({...newProject, buyUrl: e.target.value})}
                        />
                      </div>
                </form>
              </div>

               <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-dark-tertiary/30">
                <button 
                  form="project-form"
                  type="submit" 
                  className="w-full bg-accent-premium text-white py-3 rounded-xl font-bold shadow-lg shadow-accent-premium/20 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Guardar Proyecto
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map(project => (
          <motion.div 
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="group bg-white dark:bg-dark-secondary rounded-2xl border border-light-tertiary dark:border-dark-tertiary shadow-sm hover:shadow-md p-5 relative overflow-hidden transition-all duration-300"
          >
             {/* Header */}
             <div className="flex justify-between items-start mb-3 relative z-10">
                <div className="p-2.5 rounded-xl bg-light-primary dark:bg-dark-tertiary text-accent-premium">
                   <ProjectIcon className="w-6 h-6" />
                </div>
                {project.price && (
                   <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-3 py-1 rounded-lg text-xs font-bold">
                      ${project.price.toFixed(2)}
                   </span>
                )}
             </div>

            <h3 className="font-bold text-lg dark:text-white mb-2 relative z-10">{project.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4 relative z-10 leading-relaxed">{project.description}</p>
            
            <div className="flex gap-2 mb-4 relative z-10 flex-wrap">
                {project.roles.slice(0, 3).map(r => (
                   <span key={r} className="text-[10px] px-2 py-1 bg-gray-100 dark:bg-dark-tertiary rounded-md text-gray-600 dark:text-gray-300 font-bold uppercase tracking-wide border border-gray-200 dark:border-gray-700">{r}</span>
                ))}
            </div>

            <div className="border-t border-gray-100 dark:border-gray-800 pt-3 flex justify-between items-center relative z-10">
               {project.buyUrl ? (
                  <div className="flex items-center gap-1 text-green-600 dark:text-green-500 text-xs font-bold">
                     <ShoppingCartIcon className="w-4 h-4" /> Venta Activa
                  </div>
               ) : <div />}
               
               <button 
                onClick={() => project.id && onDelete(project.id)}
                className="text-red-500 hover:text-white hover:bg-red-500 px-3 py-1.5 rounded-lg transition-colors text-xs font-bold flex items-center gap-1.5"
              >
                <TrashIcon className="w-4 h-4" /> Eliminar
              </button>
            </div>
            
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-premium/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-500" />
          </motion.div>
        ))}
         {projects.length === 0 && (
          <div className="col-span-full py-20 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-3xl">
            <ProjectIcon className="w-12 h-12 mb-3 opacity-20" />
            <p className="font-medium">No hay proyectos creados.</p>
          </div>
        )}
      </div>
    </div>
  );
};