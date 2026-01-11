import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export const Card = ({ children, className = '', hover = true, glass = true }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -10, scale: 1.02 } : {}}
      className={`${glass ? 'glass-effect' : 'bg-primary-darker'} rounded-2xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};
