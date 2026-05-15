"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Send, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 relative z-10 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#00f3ff]/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Initiate Connection" 
          subtitle="Ready to build something extraordinary? Let's discuss your next big idea."
        />

        <div className="flex flex-col lg:flex-row gap-16 mt-16">
          {/* Form */}
          <div className="w-full lg:w-3/5">
            <motion.form 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              suppressHydrationWarning
              className="glass p-8 md:p-10 rounded-3xl relative glow-border"
            >
              <div className="space-y-6">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning
                    className="w-full bg-[rgba(0,0,0,0.3)] border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-transparent focus:outline-none focus:border-neon-cyan transition-colors peer"
                    placeholder="Name"
                  />
                  <label htmlFor="name" className="absolute left-5 top-4 text-gray-500 transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-neon-cyan peer-focus:bg-[#030305] peer-focus:px-2 peer-valid:-top-3 peer-valid:text-xs peer-valid:text-neon-cyan peer-valid:bg-[#030305] peer-valid:px-2 cursor-text">
                    System ID (Name)
                  </label>
                </div>

                <div className="relative group">
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning
                    className="w-full bg-[rgba(0,0,0,0.3)] border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-transparent focus:outline-none focus:border-neon-purple transition-colors peer"
                    placeholder="Email"
                  />
                  <label htmlFor="email" className="absolute left-5 top-4 text-gray-500 transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-neon-purple peer-focus:bg-[#030305] peer-focus:px-2 peer-valid:-top-3 peer-valid:text-xs peer-valid:text-neon-purple peer-valid:bg-[#030305] peer-valid:px-2 cursor-text">
                    Comms Uplink (Email)
                  </label>
                </div>

                <div className="relative group">
                  <textarea 
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-[rgba(0,0,0,0.3)] border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-transparent focus:outline-none focus:border-neon-blue transition-colors peer resize-none"
                    placeholder="Message"
                  />
                  <label htmlFor="message" className="absolute left-5 top-4 text-gray-500 transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-neon-blue peer-focus:bg-[#030305] peer-focus:px-2 peer-valid:-top-3 peer-valid:text-xs peer-valid:text-neon-blue peer-valid:bg-[#030305] peer-valid:px-2 cursor-text">
                    Encrypted Payload (Message)
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  suppressHydrationWarning
                  className="interactive w-full py-4 rounded-xl font-bold text-white relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan" />
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <span className="animate-pulse">Transmitting...</span>
                    ) : isSubmitted ? (
                      "Payload Delivered"
                    ) : (
                      <>
                        Transmit Data <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </span>
                </button>
              </div>
            </motion.form>
          </div>

          {/* Social Dock */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Direct Connect</h3>
                <div className="space-y-4">
                  <ContactItem icon={<Mail className="w-6 h-6 text-neon-blue" />} text="nigamvedant101@gmail.com" href="mailto:nigamvedant101@gmail.com" />
                  <ContactItem icon={<Phone className="w-6 h-6 text-neon-purple" />} text="+91 7991741374" href="tel:+917991741374" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-300 mb-6 uppercase tracking-wider">Social Networks</h3>
                <div className="flex gap-4">
                  <SocialDockItem icon={<FaGithub className="w-6 h-6" />} href="https://github.com/Vedant2210" delay={0} />
                  <SocialDockItem icon={<FaLinkedin className="w-6 h-6" />} href="https://www.linkedin.com/in/vedant-nigam22/" delay={0.1} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, text, href }: { icon: React.ReactNode, text: string, href: string }) => (
  <a href={href} className="interactive flex items-center gap-4 group">
    <div className="p-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-gray-800 group-hover:border-neon-cyan transition-colors duration-300">
      {icon}
    </div>
    <span className="text-gray-400 font-medium group-hover:text-white transition-colors duration-300">
      {text}
    </span>
  </a>
);

const SocialDockItem = ({ icon, href, delay }: { icon: React.ReactNode, href: string, delay: number }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ y: 0 }}
    whileHover={{ y: -10 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="interactive p-4 rounded-2xl glass text-gray-400 hover:text-white hover:border-neon-purple hover:shadow-[0_0_20px_rgba(181,0,255,0.4)] transition-all duration-300"
  >
    {icon}
  </motion.a>
);
