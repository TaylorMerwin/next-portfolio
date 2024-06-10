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
      <h2 className="text-2xl font-bold">Projects</h2>
      {projects.map((project) => (
        <div key={project.title} className="mb-2">
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
}