'use client';


import { projectKu } from "@/lib/data";
import { motion } from "motion/react";

interface Project {
  projectName: string;
  projectimage?: string;
  description?: string;
}

const projects: Project[] = [
  {
    projectName: "LMS School dashboard",
    projectimage: projectKu.find(
      (project) => project.projectName === "LMS School dashboard"
    )?.projectimage,
    description: projectKu.find(
      (project) => project.projectName === "LMS School dashboard"
    )?.description,
  },
  {
    projectName: "Rebuilding school Website",
    projectimage: projectKu.find(
      (project) => project.projectName === "LMS School dashboard"
    )?.projectimage,
    description: projectKu.find(
      (project) => project.projectName === "LMS School dashboard"
    )?.description,
  },
  {
    projectName: "Portfolio Website",
    projectimage: projectKu.find(
      (project) => project.projectName === "LMS School dashboard"
    )?.projectimage,
    description: projectKu.find(
      (project) => project.projectName === "LMS School dashboard"
    )?.description,
  }
];

export default function Garapan() {
  return (
    <div className="pt-24 pb-32">
      {/* Hero */}
      <section className="py-12 md:py-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            My Projects
          </h1>
          <p className="text-zinc-300 text-base md:text-xl">
            Explore my portfolio of innovative digital design solutions
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.projectName}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:scale-105 transition-transform duration-300">
                  
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img
                      src={project.projectimage}
                      alt={project.projectName}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {project.projectName}
                    </h3>
                    <p className="text-zinc-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.description || "No description available"}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}