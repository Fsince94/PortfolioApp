import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import type { Translation } from '../../lib/i18n';
import { AnimatedText } from '../../components/AnimatedText';

interface HomeViewProps {
  t: Translation;
}

export const HomeView: React.FC<HomeViewProps> = ({ t }) => {
  const [showText, setShowText] = useState(true);

  const dotLottieRefCallback = (dotLottie: any) => {
    if (dotLottie) {
      dotLottie.addEventListener('complete', () => {
        setShowText(false);
      });
    }
  };

  return (
    // 💡 h-screen asegura que ocupe exactamente una pantalla completa al inicio
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60 dark:opacity-30"
      >
        <DotLottieReact
          src="https://lottie.host/835eb224-2629-4e64-b299-7d1a15790ae8/oWAnXVEJda.lottie"
          loop={false}
          autoplay
          dotLottieRefCallback={dotLottieRefCallback}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <AnimatePresence>
        {showText && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)", transition: { duration: 0.8 } }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 text-center p-8 md:p-12 bg-light-primary/40 dark:bg-dark-primary/40 backdrop-blur-md rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-2xl max-w-2xl mx-4"
          >
            <AnimatedText 
              el="h1" 
              text={t.home_welcome_title} 
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white font-serif mb-4 drop-shadow-sm" 
            />
            <AnimatedText 
              el="p" 
              text={t.home_welcome_subtitle} 
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-sans font-light tracking-wide" 
            />
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ delay: 1, duration: 0.8 }}
              className="h-1 bg-accent-premium rounded-full mx-auto mt-6"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};