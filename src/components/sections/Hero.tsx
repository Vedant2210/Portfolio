"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, FileText, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const roles = [
  "AI Engineer",
  "Full Stack Developer",
  "Competitive Programmer",
  "Research Enthusiast",
  "MERN Stack Developer"
];

export const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-neon-cyan font-mono mb-4 text-lg md:text-xl tracking-wider">
              Hello everyone, I'm
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                Vedant
              </span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan drop-shadow-[0_0_15px_rgba(0,243,255,0.3)]">
                Nigam
              </span>
            </h1>
          </motion.div>

          <div className="h-16 md:h-20 mb-8 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole}
                initial={{ opacity: 0, y: 40, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -40, rotateX: 90 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-xl sm:text-2xl md:text-4xl font-semibold text-gray-300"
              >
                {roles[currentRole]}
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12"
          >
            A final-year BTech CSE student and elite problem solver blending Artificial Intelligence with scalable Full-Stack development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href="#projects" className="interactive relative px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-white glass glow-border overflow-hidden group text-sm sm:text-base">
              <span className="relative z-10 flex items-center gap-2">
                View Projects
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </a>

            <a href="https://drive.google.com/file/d/1CNgQ_NmcHcMt8p9TXiL282nZDhAOXazc/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="interactive px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-white border border-gray-700 hover:border-neon-cyan transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base">
              <FileText className="w-5 h-5 group-hover:text-neon-cyan transition-colors" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 flex items-center justify-center gap-8"
          >
            <SocialLink href="https://github.com/Vedant2210" icon={<FaGithub className="w-6 h-6" />} />
            <SocialLink href="https://www.linkedin.com/in/vedant-nigam22/" icon={<FaLinkedin className="w-6 h-6" />} />
            <SocialLink href="mailto:nigamvedant101@gmail.com" icon={<Mail />} />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-sm tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="text-neon-cyan w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="interactive p-3 rounded-full glass text-gray-400 hover:text-white hover:border-neon-blue transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,243,255,0.4)] group"
    >
      <div className="group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
    </a>
  );
};
