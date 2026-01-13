import Image from "next/image";
import { projectKu } from "@/lib/data";

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

export default function Projects() {
  return (
    <div className="relative min-h-screen items-center justify-center font-poppins px-4 sm:px-6 lg:px-8 flex">
      <div className="w-full max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800 hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-64 sm:h-72 md:h-80 ">
                {project.projectimage && (
                  <Image
                    src={project.projectimage}
                    alt={project.projectName}
                    fill
                    sizes="(max-width: 640px), (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 ">
                  {project.projectName}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description || "No description available"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}