"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Instagram } from "lucide-react";

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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
    <div className="min-h-screen w-full flex items-center justify-center p-4 pt-24 md:pt-32 pb-20">
      <div className="w-full max-w-3xl flex flex-col items-center justify-center space-y-8 md:space-y-12 text-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-6 md:space-y-8"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="space-y-3 md:space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold font-poppins text-white tracking-tight">
              Let's <span className="text-[#e77213]">Connect</span>
            </h1>
            <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
              Have a project in mind or just want to chat? I'm always open to
              discussing new opportunities and creative ideas.
            </p>
          </motion.div>

          {/* Contact Details */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="flex items-center gap-3 text-gray-200 group hover:text-[#e77213] transition-colors duration-300">
              <div className="p-3 bg-white/5 rounded-full backdrop-blur-sm group-hover:bg-[#e77213]/10 transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-lg font-medium font-poppins">akirahartono2@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-gray-200 group hover:text-[#e77213] transition-colors duration-300">
              <div className="p-3 bg-white/5 rounded-full backdrop-blur-sm group-hover:bg-[#e77213]/10 transition-colors duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-lg font-medium font-poppins~`">Malang, Indonesia</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="pt-8">
            <div className="flex items-center gap-6">
              <SocialLink 
                href="https://github.com/Akirasaskara" 
                icon={Github} 
              />
              <SocialLink 
                href="https://www.linkedin.com/in/akira-hartono28/" 
                icon={Linkedin} 
              />
              <SocialLink 
                href="#" 
                icon={Instagram} 
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="p-4 bg-white/5 rounded-full backdrop-blur-sm text-gray-400 hover:bg-[#e77213] hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-white/5 hover:border-[#e77213]"
    >
      <Icon className="w-6 h-6" />
    </a>
  );
}
