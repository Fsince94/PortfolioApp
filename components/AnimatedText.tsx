import React from 'react';
import { motion, Variants } from 'framer-motion';

// 💡 Este componente reutilizable aplica una animación de aparición escalonada a cada palabra del texto.
// 🧩 Aplica el Principio de Responsabilidad Única (SRP) al encapsular la lógica de animación.
// Es extensible mediante props para usar diferentes elementos HTML (el) y clases.

interface AnimatedTextProps {
  text: string;
  // FIX: Changed type from `keyof JSX.IntrinsicElements` to `React.ElementType` to resolve multiple
  // JSX-related TypeScript errors. This is the idiomatic way to type a renderable element prop.
  el?: React.ElementType; // Permite especificar el tag: 'h1', 'p', etc.
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: i * 0.1 },
  }),
};

const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: { type: 'spring', damping: 12, stiffness: 200 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 12, stiffness: 200 },
  },
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, el: Wrapper = 'p', className }) => {
  const words = text.split(' ');

  return (
    <Wrapper className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ display: 'inline-block' }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            style={{ display: 'inline-block', marginRight: '0.25em' }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};