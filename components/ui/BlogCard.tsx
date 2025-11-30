import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '../icons';

interface BlogCardProps {
  post: {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    readTime: string;
    url: string;
  };
  readMoreLabel: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const BlogCard: React.FC<BlogCardProps> = ({ post, readMoreLabel }) => {
  return (
    <motion.article 
      variants={itemVariants}
      className="group relative flex flex-col justify-between p-6 bg-white dark:bg-dark-secondary rounded-2xl border border-light-tertiary dark:border-dark-tertiary shadow-sm hover:shadow-xl hover:shadow-accent-premium/5 transition-all duration-300 hover:-translate-y-1"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 text-xs font-bold tracking-wide uppercase rounded-full bg-accent-premium/10 text-accent-premium">
            {post.category}
          </span>
          <span className="text-xs text-gray-400 font-medium">
            {post.readTime}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white font-serif mb-3 leading-tight group-hover:text-accent-premium transition-colors">
          <a href={post.url} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {post.title}
          </a>
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
          {post.excerpt}
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-light-tertiary/50 dark:border-dark-tertiary/50 pt-4 mt-auto">
        <span className="text-xs font-semibold text-gray-400">
          {post.date}
        </span>
        <div className="flex items-center gap-1 text-sm font-bold text-accent-premium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
          {readMoreLabel}
          <ArrowRightIcon className="w-4 h-4" />
        </div>
      </div>
    </motion.article>
  );
};