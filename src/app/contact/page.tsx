"use client";

import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 pt-24 pb-12">
      
        {/* Contact Info Section */}
        <div className="flex flex-col justify-center space-y-8">
          <motion.div variants={itemVariants}>
            <h1 className="text-8xl md:text-6xl font-bold font-poppins text-white mb-4">
              Let's <span className="text-[#e77213]">Connect</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-md">
              Have a project in mind or just want to chat? I'm always open to
              discussing new opportunities and creative ideas.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-4 text-gray-200 group hover:text-[#e77213] transition-colors duration-300">
              <div className="p-3 bg-white/5 rounded-full backdrop-blur-sm group-hover:bg-[#e77213]/20 transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-lg">akirahartono2@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-200 group hover:text-[#e77213] transition-colors duration-300">
              <div className="p-3 bg-white/5 rounded-full backdrop-blur-sm group-hover:bg-[#e77213]/20 transition-colors duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-lg">Malang, Indonesia</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex space-x-4 pt-4">
            {[
              { icon: Github, href: "https://github.com/Akirasaskara" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/akira-hartono28/" },
              { icon: Instagram, href: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-3 bg-white/5 rounded-full backdrop-blur-sm text-gray-300 hover:bg-[#e77213] hover:text-white transition-all duration-300 transform hover:scale-110 border border-white/10 hover:border-[#e77213]"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>
        </div>
      
      </div>
  )
}
