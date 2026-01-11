"use client";
import { useState } from "react";

const skills = [
  {
    category: "frontend",
    items: [
      { name: "Next.js", color: "#000000" },
      { name: "TypeScript", color: "#3178C6" },
    ],
  },
  {
    category: "backend",
    items: [
      { name: "Nestjs", color: "#000000" },
      { name: "MySQL", color: "#000000" },
      { name: "Prisma", color: "#000000" },
      { name: "Go", color: "#000000" },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & Github", color: "#F05032" },
      { name: "Git", color: "#F05032" },
      { name: "VS Code", color: "#007ACC" },
      { name: "Figma", color: "#F24E1E" },
    ],
  },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="relative min-h-screen items-center justify-center font-poppins px-4 sm:px-6 lg:px-8 flex">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-13">
          <h2 className="text-4xl font-bold text-white dark:text-zinc-100">
            Skills
          </h2>
          <div className="w-24 h-1 bg-transparent from-white-500 to-orange-900 mx-auto mb-6"></div>
          <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I
            use to bring ideas to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8 flex-wrap">
          {skills.map((skillCategory, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`mx-2 my-1 px-4 py-2 rounded-md font-medium transition-colors duration-300 ${
                activeCategory === index
                ? " bg-linear-to-r from-white-500 to-orange-900 text-white"
                : " bg-linear-to-r from-white-500 to-orange-900 text-white"
              }`}
            >
              {skillCategory.category}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
