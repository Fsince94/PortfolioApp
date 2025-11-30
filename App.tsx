import React, { useState, useEffect } from 'react';
import { MainLayout } from './components/layout/MainLayout';
import { HomeView, AboutView, ProjectsView, SkillsView, ContactView, BlogView, AdminView } from './app/views';
import { PORTFOLIO_NAV_ITEMS_STRUCTURE } from './constants';
import { translations, Translation } from './lib/i18n';
import type { NavItem } from './types';
import { useDatabase } from './hooks/useDatabase';
import { CartProvider } from './context/CartContext';
import { CartDrawer } from './components/ui/CartDrawer';
import { useAdminRoute } from './hooks/useAdminRoute'; // 💡 Nuevo hook importado

function App() {
  // --- Estados Globales de Preferencias ---
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true; 
  });

  const [language, setLanguage] = useState<'en' | 'es'>(() => {
    const savedLang = localStorage.getItem('language');
    return (savedLang === 'en' || savedLang === 'es') ? savedLang : 'en';
  });

  // 💡 Hook de Base de Datos WASM (Capa de datos)
  const { projects: dbProjects, blogPosts: dbBlogPosts, isInitialized } = useDatabase();
  
  // 💡 Hook de Enrutamiento Admin (SRP: App no gestiona la lógica del hash)
  const isAdminRoute = useAdminRoute();
  
  // Estado para coordinar navegación manual
  const [targetSection, setTargetSection] = useState<string>('home');
  const [highlightedSkill, setHighlightedSkill] = useState<string | null>(null);
  
  // --- Efectos de Sincronización ---
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // --- Manejadores ---
  const toggleTheme = () => setIsDarkMode(prev => !prev);
  
  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'es' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };
  
  const handleNavigateToSkill = (skillName: string) => {
    setHighlightedSkill(skillName);
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const t: Translation = translations[language];

  // Construcción dinámica del menú basada en traducciones
  const navItems: NavItem[] = PORTFOLIO_NAV_ITEMS_STRUCTURE.map(item => ({
    ...item,
    label: t[`nav_${item.id}`],
  }));

  // 🔒 Enrutamiento condicional (Admin vs Public)
  if (isAdminRoute) {
    return (
      <div className={isDarkMode ? 'dark' : ''}>
         <AdminView />
      </div>
    );
  }

  // 🎨 Layout Público
  return (
    <CartProvider>
      <CartDrawer t={t} /> 
      
      <MainLayout
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        language={language}
        toggleLanguage={toggleLanguage}
        navItems={navItems}
        t={t}
        currentActiveSection={targetSection}
        onSectionChange={setTargetSection}
      >
        <section id="home" className="min-h-screen w-full snap-start">
          <HomeView t={t} />
        </section>

        <section id="about" className="min-h-screen w-full bg-white dark:bg-dark-secondary/50 snap-start">
          <AboutView t={t} />
        </section>

        <section id="projects" className="min-h-screen w-full snap-start">
          <ProjectsView 
            t={t} 
            onNavigateToSkill={handleNavigateToSkill} 
            projects={isInitialized ? dbProjects : t.projects_data}
          />
        </section>

        <section id="skills" className="min-h-screen w-full bg-white dark:bg-dark-secondary/50 snap-start">
          <SkillsView t={t} highlightedSkill={highlightedSkill} />
        </section>

        <section id="blog" className="min-h-screen w-full snap-start">
          <BlogView 
            t={t} 
            posts={isInitialized ? dbBlogPosts : t.blog_posts}
          />
        </section>

        <section id="contact" className="min-h-screen w-full bg-white dark:bg-dark-secondary/50 snap-start">
          <ContactView t={t} />
        </section>

      </MainLayout>
    </CartProvider>
  );
}

export default App;