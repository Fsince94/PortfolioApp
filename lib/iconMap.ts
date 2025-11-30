import React from 'react';
import {
  ViteIcon, TypeScriptIcon, JavaScriptIcon, Html5Icon, Css3Icon, SassIcon,
  ReactIcon, NextjsIcon, VuejsIcon, NodejsIcon, ExpressIcon, TailwindCssIcon,
  StyledComponentsIcon, FramerMotionIcon, GitIcon, WebpackIcon, FirebaseIcon, VercelIcon,
  CodeIcon, FrameworkIcon, DesignIcon, SettingsIcon, BrainCircuitIcon,
  FrontendIcon, BackendIcon, ApiIcon, GitBrandIcon,
  UsersIcon, EarIcon, MessageSquareTextIcon, PuzzleIcon, LightbulbIcon, 
  RefreshCwIcon, GraduationCapIcon, TargetIcon, HeartIcon
} from '../components/icons';

// 💡 Centralizamos el mapeo de string -> Componente.
// Esto facilita el mantenimiento: si cambias un ícono, cambia en toda la app.

export const technologyIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
  'Vite': ViteIcon,
  'TypeScript': TypeScriptIcon,
  'JavaScript (ES6+)': JavaScriptIcon,
  'HTML5': Html5Icon,
  'CSS3': Css3Icon,
  'Sass': SassIcon,
  'React': ReactIcon,
  'Next.js': NextjsIcon,
  'Vue.js': VuejsIcon,
  'Node.js': NodejsIcon,
  'Express': ExpressIcon,
  'Tailwind CSS': TailwindCssIcon,
  'Styled Components': StyledComponentsIcon,
  'Framer Motion': FramerMotionIcon,
  'Git & GitHub': GitBrandIcon, // 💡 Usamos el nuevo icono colorido
  'Webpack': WebpackIcon,
  'Firebase': FirebaseIcon,
  'Vercel': VercelIcon,

  // 💡 Soft Skills (Inglés)
  'Team Collaboration': UsersIcon,
  'Active Listening': EarIcon,
  'Clear Communication': MessageSquareTextIcon,
  'Critical Thinking': PuzzleIcon,
  'Creativity': LightbulbIcon,
  'Adaptability': RefreshCwIcon,
  'Mentoring': GraduationCapIcon,
  'Decision Making': TargetIcon,
  'Empathy': HeartIcon,

  // 💡 Soft Skills (Español)
  'Colaboración en Equipo': UsersIcon,
  'Escucha Activa': EarIcon,
  'Comunicación Clara': MessageSquareTextIcon,
  'Pensamiento Crítico': PuzzleIcon,
  'Creatividad': LightbulbIcon,
  'Adaptabilidad': RefreshCwIcon,
  'Mentoría': GraduationCapIcon,
  'Toma de Decisiones': TargetIcon,
  'Empatía': HeartIcon,
};

export const categoryIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
  'Languages': CodeIcon,
  'Lenguajes': CodeIcon,
  'Frameworks & Libraries': FrameworkIcon,
  'Frameworks & Librerías': FrameworkIcon,
  'Styling': DesignIcon,
  'Estilos': DesignIcon,
  'Tools & Platforms': SettingsIcon,
  'Herramientas & Plataformas': SettingsIcon,
  'Design': DesignIcon,
  'Diseño': DesignIcon,
  'Communication': MessageSquareTextIcon,
  'Comunicación': MessageSquareTextIcon,
  'Problem Solving': PuzzleIcon,
  'Resolución de Problemas': PuzzleIcon,
  'Leadership': UsersIcon,
  'Liderazgo': UsersIcon,
};

export const roleBadges: { [key: string]: { icon: React.ComponentType<{ className?: string }>, color: string, label: string } } = {
  'Frontend': { icon: FrontendIcon, color: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-500/30', label: 'Frontend' },
  'Backend': { icon: BackendIcon, color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30', label: 'Backend' },
  'API': { icon: ApiIcon, color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/30', label: 'API' },
};
