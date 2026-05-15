"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Trophy, Code2, BrainCircuit, BookOpen, ShieldCheck } from "lucide-react";

const achievements = [
  {
    platform: "LeetCode",
    title: "Knight",
    detail: "Max Rating: 1972",
    icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    color: "from-yellow-400/20 to-transparent",
    borderColor: "border-yellow-400/30"
  },
  {
    platform: "Codeforces",
    title: "Pupil",
    detail: "Active Competitor",
    icon: <Code2 className="w-8 h-8 text-blue-400" />,
    color: "from-blue-400/20 to-transparent",
    borderColor: "border-blue-400/30"
  },
  {
    platform: "CodeChef",
    title: "Global Rank 361",
    detail: "Top Tier Performer",
    icon: <BrainCircuit className="w-8 h-8 text-orange-400" />,
    color: "from-orange-400/20 to-transparent",
    borderColor: "border-orange-400/30"
  },
  {
    platform: "Research",
    title: "IEEE Publication",
    detail: "Published Author",
    icon: <BookOpen className="w-8 h-8 text-neon-purple" />,
    color: "from-neon-purple/20 to-transparent",
    borderColor: "border-neon-purple/30"
  },
  {
    platform: "ServiceNow",
    title: "Certifications",
    detail: "Certified Professional",
    icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
    color: "from-green-400/20 to-transparent",
    borderColor: "border-green-400/30"
  }
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Milestones" 
          subtitle="A dashboard view of my competitive programming ranks and professional certifications."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
              className={`glass rounded-2xl p-6 relative overflow-hidden border ${item.borderColor} group interactive hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-shadow duration-300`}
            >
              <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex items-center justify-between mb-4">
                <div className="p-3 bg-[#030305] rounded-xl border border-gray-800">
                  {item.icon}
                </div>
                <span className="text-gray-500 font-mono text-sm tracking-wider uppercase">
                  {item.platform}
                </span>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-neon-cyan font-medium">
                  {item.detail}
                </p>
              </div>
              
              {/* Decorative Data Lines */}
              <div className="absolute bottom-0 right-0 p-4 opacity-20 flex gap-1 items-end h-16">
                {[1, 2, 3, 4, 5].map((bar) => (
                  <motion.div
                    key={bar}
                    initial={{ height: "20%" }}
                    animate={{ height: ["20%", `${Math.random() * 80 + 20}%`, "20%"] }}
                    transition={{ duration: 2 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                    className="w-1 bg-white rounded-t-sm"
                  />
                ))}
              </div>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 100 }}
            className="glass rounded-2xl p-6 relative overflow-hidden border border-cyan-400/30 group interactive hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-shadow duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex items-center justify-between mb-4">
              <div className="p-3 bg-[#030305] rounded-xl border border-gray-800">
                <Trophy className="w-8 h-8 text-cyan-400" />
              </div>
              <span className="text-gray-500 font-mono text-sm tracking-wider uppercase">
                ICPC 2024
              </span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                Global Rank 902
              </h3>
              <p className="text-neon-cyan font-medium">
                1st Rank in College
              </p>
            </div>
            
            {/* Decorative Data Lines */}
            <div className="absolute bottom-0 right-0 p-4 opacity-20 flex gap-1 items-end h-16">
              {[1, 2, 3, 4, 5].map((bar) => (
                <motion.div
                  key={bar}
                  initial={{ height: "20%" }}
                  animate={{ height: ["20%", `${Math.random() * 80 + 20}%`, "20%"] }}
                  transition={{ duration: 2 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 bg-white rounded-t-sm"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
