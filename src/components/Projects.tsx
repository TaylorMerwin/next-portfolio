import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  subtitle: string;
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
    <>
    <h2 className="text-3xl font-bold text-center mt-12 mb-12">projects</h2>
    <div className="flex flex-col">
      <div className="flex flex-col items-center">
      {projects.map((project) => (
        <div key={project.title} className="mb-8 w-3/4 lg:w-1/2 justify-center">
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
    </div>
    </>
  );
}