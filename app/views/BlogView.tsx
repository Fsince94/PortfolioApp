import React from 'react';
import { motion } from 'framer-motion';
import type { Translation } from '../../lib/i18n';
import type { BlogPost } from '../../types';
import { BlogCard } from '../../components/ui/BlogCard';

interface BlogViewProps {
  t: Translation;
  posts?: BlogPost[]; // 💡 Prop opcional para recibir datos de BD
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const BlogView: React.FC<BlogViewProps> = ({ t, posts }) => {
  // Fallback si no hay posts externos
  const displayPosts = posts || t.blog_posts;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="max-w-7xl mx-auto py-20 px-6 md:px-10 min-h-screen flex flex-col justify-center"
    >
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-serif tracking-tight">
          {t.blog_title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg mb-4">
           {t.blog_subtitle}
        </p>
        <div className="h-1 w-20 bg-accent-premium rounded-full mx-auto md:mx-0"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayPosts.map((post, index) => (
          <BlogCard 
            key={post.id || index} // Usar ID de DB si existe
            post={post} 
            readMoreLabel={t.blog_read_more}
          />
        ))}
      </div>
    </motion.div>
  );
};