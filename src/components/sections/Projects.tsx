"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Tilt } from "react-tilt";
import { ExternalLink, Bot, Building2, HeartPulse } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "AI-Powered PDF Study Assistant",
    description: "A comprehensive MERN stack application allowing users to upload PDFs, extract text, and ask questions using an AI model. Features automated quiz generation and Hugging Face integration.",
    icon: <Bot className="w-8 h-8 text-neon-blue" />,
    tech: ["MERN", "RAG", "Hugging Face", "Tailwind CSS"],
    github: "https://github.com/Vedant2210",
    demo: "#",
    color: "from-neon-blue to-neon-purple"
  },
  {
    title: "Urban Assist",
    description: "A doorstep service booking platform with secure JWT authentication. Integrated Redis + BullMQ for background task processing and Twilio for real-time user notifications.",
    icon: <Building2 className="w-8 h-8 text-neon-purple" />,
    tech: ["Node.js", "Redis", "BullMQ", "Twilio", "JWT"],
    github: "https://github.com/Vedant2210",
    demo: "#",
    color: "from-neon-purple to-neon-cyan"
  },
  {
    title: "FindMyMed",
    description: "A real-time medicine availability finder integrating Google Maps API. Includes inventory management features and real-time notifications for both users and pharmacies.",
    icon: <HeartPulse className="w-8 h-8 text-neon-cyan" />,
    tech: ["React", "Express", "Google Maps API", "Socket.io"],
    github: "https://github.com/Vedant2210",
    demo: "#",
    color: "from-neon-cyan to-neon-blue"
  }
];

const defaultOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1.02,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Real-world applications blending AI, scalable backends, and modern frontend architectures."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="h-full"
            >
              <Tilt options={defaultOptions} className="h-full">
                <div className="glass p-8 rounded-3xl h-full flex flex-col relative group overflow-hidden glow-border interactive">
                  {/* Glowing Background Blob */}
                  <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${project.color} rounded-full blur-[80px] opacity-20 group-hover:opacity-50 transition-opacity duration-700`} />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-4 rounded-2xl bg-[#030305] border border-gray-800 shadow-lg">
                        {project.icon}
                      </div>
                      <div className="flex gap-3">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors text-gray-400 hover:text-white">
                          <FaGithub className="w-5 h-5" />
                        </a>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors text-gray-400 hover:text-white">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-3 py-1 text-xs font-semibold tracking-wider uppercase text-neon-cyan bg-[rgba(0,255,204,0.05)] border border-[rgba(0,255,204,0.2)] rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
