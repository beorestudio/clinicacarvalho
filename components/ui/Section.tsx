import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, children, className = '', noPadding = false }) => {
  return (
    <section id={id} className={`relative overflow-hidden ${noPadding ? '' : 'py-20 md:py-32'} ${className}`}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};