"use client";

import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formState);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

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
      <motion.div
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Contact Info Section */}
        <div className="flex flex-col justify-center space-y-8">
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-6xl font-bold font-poppins text-white mb-4">
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

        {/* Contact Form Section */}
        <motion.div variants={itemVariants}>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#e77213]/50 focus:ring-1 focus:ring-[#e77213]/50 transition-all duration-300"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#e77213]/50 focus:ring-1 focus:ring-[#e77213]/50 transition-all duration-300"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#e77213]/50 focus:ring-1 focus:ring-[#e77213]/50 transition-all duration-300"
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#e77213]/50 focus:ring-1 focus:ring-[#e77213]/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-[#e77213] to-[#f59e0b] text-white font-semibold py-4 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
