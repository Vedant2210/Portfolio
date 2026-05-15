"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Briefcase, ChevronRight } from "lucide-react";

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="experience" className="py-32 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Experience" 
          subtitle="My professional journey and industry exposure."
        />

        <div className="mt-16 max-w-5xl mx-auto">
          <motion.div 
            style={{ y }}
            className="relative p-1 rounded-3xl bg-gradient-to-br from-neon-blue via-transparent to-neon-purple shadow-[0_0_50px_rgba(0,243,255,0.15)]"
          >
            <div className="glass rounded-[22px] p-8 md:p-12 h-full w-full relative overflow-hidden group">
              {/* Animated Background Overlay */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-6 mb-4 md:mb-0">
                  <div className="p-4 rounded-2xl bg-[#030305] border border-gray-700 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <Briefcase className="w-10 h-10 text-neon-blue" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">Amazon ML Summer School</h3>
                    <p className="text-lg md:text-xl text-neon-cyan font-medium">Selected Candidate</p>
                  </div>
                </div>
                <div className="px-6 py-2 rounded-full glass border border-neon-blue/30 text-white font-bold whitespace-nowrap">
                  2025
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Selected as a participant in the prestigious Amazon ML Summer School, an intensive program designed to provide hands-on experience and deep insights into cutting-edge Machine Learning technologies used at Amazon.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Top 5% selection globally",
                      "Chosen from 60,000+ applicants",
                      "Hands-on Machine Learning learning",
                      "Mentorship from Amazon Scientists"
                    ].map((item, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (idx * 0.1) }}
                        className="flex items-center gap-3 text-gray-200 font-medium"
                      >
                        <ChevronRight className="w-5 h-5 text-neon-purple flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-center">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-800 group-hover:border-neon-cyan/50 transition-colors duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#030305] to-[#1a1a24] z-0" />
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                       <span className="text-neon-cyan/50 font-mono text-xl tracking-widest font-bold">AWS // AI_ML</span>
                    </div>
                    {/* Simulated scanning line */}
                    <motion.div 
                      className="absolute top-0 left-0 w-full h-1 bg-neon-cyan/50 shadow-[0_0_10px_#00f3ff] z-20"
                      animate={{ top: ["0%", "100%", "0%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
