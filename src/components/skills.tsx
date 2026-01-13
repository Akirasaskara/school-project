"use client";
import { image } from "motion/react-client";
import Image from "next/image";
import { useState } from "react";
import { techStack } from "@/lib/data";

interface skill {
  category: string;
  items: { name: string; image?: string }[];
}
const skills: skill[] = [
  {
    category: "Frontend",
    items: [
      {
        name: "Next.js",
        image: techStack.find((skill) => skill.skillName === "Next.js")
          ?.iconUrl,
      },
      {
        name: "TypeScript",
        image: techStack.find((skill) => skill.skillName === "TypeScript")
          ?.iconUrl,
      },
      {
        name: "HTML5",
        image: techStack.find((skill) => skill.skillName === "HTML5")?.iconUrl,
      },
      {
        name: "CSS3",
        image: techStack.find((skill) => skill.skillName === "CSS3")?.iconUrl,
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Nestjs",
        image: techStack.find((skill) => skill.skillName === "NestJS")?.iconUrl,
      },
      {
        name: "MySQL",
        image: techStack.find((skill) => skill.skillName === "MySQL")?.iconUrl,
      },
      {
        name: "JavaScript",
        image: techStack.find((skill) => skill.skillName === "JavaScript")?.iconUrl,
      },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      {
        name: "Git & Github",
        image: techStack.find((skill) => skill.skillName === "Git")?.iconUrl,
      },
      {
        name: "VS Code",
        image: techStack.find((skill) => skill.skillName === "VS Code")
          ?.iconUrl,
      },
      {
        name: "Postman",
        image: techStack.find((skill) => skill.skillName === "Postman")
          ?.iconUrl,
      },
    ],
  },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="relative min-h-screen items-center justify-center font-poppins px-4 sm:px-6 lg:px-8 flex">
      <div className="max-w-7xl mx-auto">
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
        <div className="flex justify-center mb-8 flex-wrap ">
          {skills.map((skillCategory, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`mx-2 my-1 px-8 py-4 text-xl rounded-xl font-bold transition-colors transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                activeCategory === index
                  ? "bg-linear-to-r from-white-500 to-orange-900 text-white"
                  : "bg-linear-to-r from-white-500 to-orange-900 text-white"
              }`}
            >
              {skillCategory.category}
            </button>
          ))}
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {skills[activeCategory].items.map((skill, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 text-center bg-white text-zinc-900 hover:bg-zinc-100 hover:scale-105 transition-transform duration-300 h-56 flex flex-col items-center justify-center overflow-hidden shadow-lg "
            >
              {skill.image ? (
                <Image
                  className="mx-auto mb-4 rounded-md"
                  src={skill.image}
                  alt={skill.name}
                    width={100}
                    height={100}
                />
              ) : (
                <div className="mx-auto mb-4 rounded-md w-20 h-20"></div>
              )}
              <h3 className="font-semibold text-lg md:text-xl whitespace-nowrap">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
