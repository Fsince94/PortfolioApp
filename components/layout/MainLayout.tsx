import React, { useState, useRef, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { BottomNavbar } from './BottomNavbar';
import { MobileHeader } from './MobileHeader'; // 💡 Import Mobile Header
import { useScrollSpy } from '../../hooks/useScrollSpy';
import type { NavItem } from '../../types';
import type { Translation } from '../../lib/i18n';

interface MainLayoutProps {
  children: React.ReactNode;
  isDarkMode: boolean;
  toggleTheme: () => void;
  language: 'en' | 'es';
  toggleLanguage: () => void;
  navItems: NavItem[];
  t: Translation;
  currentActiveSection: string;
  onSectionChange: (id: string) => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  isDarkMode, 
  toggleTheme, 
  language, 
  toggleLanguage, 
  navItems, 
  t,
  currentActiveSection,
  onSectionChange
}) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleViewChange = (viewId: string) => {
    const element = document.getElementById(viewId);
    if (element && scrollContainerRef.current) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      onSectionChange(viewId);
    }
  };

  const toggleSidebar = () => setIsSidebarCollapsed(prev => !prev);

  const sectionIds = navItems.map(n => n.id);
  const activeIdFromSpy = useScrollSpy(sectionIds, scrollContainerRef);

  useEffect(() => {
    if (currentActiveSection && currentActiveSection !== activeIdFromSpy) {
       // Logic for deep linking external control if needed
    }
  }, [currentActiveSection, activeIdFromSpy]);

  return (
    <main className="min-h-screen h-screen bg-light-secondary dark:bg-dark-primary flex p-0 font-sans transition-colors duration-300">
      
      {/* 💡 Mobile Header: Visible only on mobile */}
      <MobileHeader 
        t={t}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        language={language}
        toggleLanguage={toggleLanguage}
      />

      <div className="flex w-full h-full overflow-hidden bg-light-primary dark:bg-dark-secondary pt-16 md:pt-0 transition-[padding] duration-300">
        {/* Sidebar para escritorio */}
        <Sidebar 
          isCollapsed={isSidebarCollapsed} 
          toggleSidebar={toggleSidebar}
          activeView={activeIdFromSpy}
          onViewChange={handleViewChange}
          navItems={navItems}
          t={t}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          language={language}
          toggleLanguage={toggleLanguage}
        />
        
        {/* Contenedor del contenido principal con Scroll */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 p-0 md:p-0 overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory relative"
        >
          <div className="flex flex-col">
            {children}
          </div>
        </div>
      </div>
      
      {/* Barra de navegación inferior para móviles */}
      <BottomNavbar 
        activeView={activeIdFromSpy}
        onViewChange={handleViewChange}
        navItems={navItems}
        t={t}
      />
    </main>
  );
};