"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Code, Database, Globe, Brain, Terminal, Layout } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Terminal className="w-6 h-6 text-neon-blue" />,
    skills: ["C++", "Java", "JavaScript", "Python", "TypeScript"],
    color: "from-neon-blue to-[rgba(0,243,255,0.2)]"
  },
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6 text-neon-purple" />,
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
    color: "from-neon-purple to-[rgba(181,0,255,0.2)]"
  },
  {
    title: "Backend",
    icon: <Globe className="w-6 h-6 text-neon-cyan" />,
    skills: ["Node.js", "Express.js", "REST APIs"],
    color: "from-neon-cyan to-[rgba(0,255,204,0.2)]"
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6 text-yellow-400" />,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
    color: "from-yellow-400 to-[rgba(250,204,21,0.2)]"
  },
  {
    title: "AI / ML",
    icon: <Brain className="w-6 h-6 text-pink-400" />,
    skills: ["Machine Learning", "NLP", "RAG Systems", "PyTorch"],
    color: "from-pink-400 to-[rgba(244,114,182,0.2)]"
  },
  {
    title: "Core Concepts",
    icon: <Code className="w-6 h-6 text-green-400" />,
    skills: ["DSA", "OOP", "OS", "DBMS", "Computer Networks"],
    color: "from-green-400 to-[rgba(74,222,128,0.2)]"
  }
];

export const Skills = () => {
  const containerRef = useRef(null);

  return (
    <section id="skills" className="py-32 relative z-10 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="Technologies and tools I use to build scalable software and AI systems. (Drag the cards!)"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              drag
              dragConstraints={containerRef}
              dragElastic={0.2}
              whileDrag={{ scale: 1.05, zIndex: 50, cursor: "grabbing" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl relative glow-border interactive cursor-grab h-full flex flex-col group"
            >
              {/* Animated Background Blob */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${category.color} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-[#030305] border border-gray-800 shadow-inner">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-wide">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1 text-sm font-medium text-gray-300 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full group-hover:border-[rgba(255,255,255,0.3)] transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
