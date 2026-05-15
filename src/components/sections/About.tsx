"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GraduationCap, Award, BrainCircuit, Code2 } from "lucide-react";

const stats = [
  { label: "LeetCode Problems", value: 750, suffix: "+", icon: <Code2 className="w-6 h-6 text-neon-blue" /> },
  { label: "Codeforces Problems", value: 100, suffix: "+", icon: <BrainCircuit className="w-6 h-6 text-neon-purple" /> },
  { label: "Contests", value: 25, suffix: "+", icon: <Award className="w-6 h-6 text-neon-cyan" /> },
  { label: "Dean's List Honors", value: 3, suffix: "", icon: <GraduationCap className="w-6 h-6 text-yellow-400" /> },
];

const timeline = [
  {
    year: "2025",
    title: "Amazon ML Summer School",
    subtitle: "Selected Candidate",
    description: "Selected among the top 5% of 60,000+ applicants for hands-on Machine Learning training.",
    color: "from-neon-blue to-neon-cyan"
  },
  {
    year: "2022 - 2026",
    title: "BTech CSE",
    subtitle: "Bennett University",
    description: "Maintained a stellar CGPA of 9.64 while specializing in AI and software engineering.",
    color: "from-neon-purple to-neon-blue"
  },
  {
    year: "2024",
    title: "IEEE Research Publication",
    subtitle: "Published Author",
    description: "Authored and published research in IEEE, contributing to the field of AI and scalable systems.",
    color: "from-neon-cyan to-green-400"
  }
];

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing function (easeOutExpo)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeProgress * value));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export const About = () => {
  return (
    <section id="about" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="My journey through academia, competitive programming, and professional experience."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-[rgba(255,255,255,0.08)] transition-colors relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,243,255,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="mb-4 p-3 rounded-full bg-[#030305] border border-gray-800 shadow-[0_0_10px_rgba(0,243,255,0.2)]">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold mb-2 text-white">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-gray-400 text-sm tracking-wide uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative pl-8 md:pl-0">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-transparent transform -translate-x-1/2" />
            <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-36px] md:left-1/2 w-4 h-4 rounded-full bg-[#030305] border-2 border-neon-cyan transform md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(0,243,255,0.8)]" />

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="glass p-6 rounded-2xl relative glow-border interactive hover:-translate-y-1 transition-transform duration-300">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-gradient-to-r ${item.color} text-[#030305]`}>
                        {item.year}
                      </span>
                      <h4 className="text-2xl font-bold text-white mb-1">{item.title}</h4>
                      <h5 className="text-neon-cyan mb-3 font-medium">{item.subtitle}</h5>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
