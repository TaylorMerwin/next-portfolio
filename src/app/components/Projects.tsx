import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  codeUrl?: string;
  tags: string[];
}

interface ProjectsProps {
  projects: Project[];
}


export default function Projects({ projects }: ProjectsProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:items-center md:mt-8">
      <h2 className="text-2xl font-bold ml-8 ">projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <div key={project.title} className="mb-2">
          <ProjectCard {...project} />
        </div>
      ))}
      </div>
    </div>
    </div>
  );
}