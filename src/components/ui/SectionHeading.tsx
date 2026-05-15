"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-16 text-center md:text-left">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-bold tracking-tight mb-4 inline-block text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-gray-400 text-lg max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mt-6 rounded-full mx-auto md:mx-0"
      />
    </div>
  );
};
