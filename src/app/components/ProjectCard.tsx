import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  codeUrl?: string;
  tags: string[];
}

export default function ProjectCard({ title, description, imageUrl, liveUrl, codeUrl, tags }: ProjectCardProps) {
  return (
    <div className="flex md:flex-row overflow-hidden p-4">
      <div className="p-4">
        <Image
          src={imageUrl}
          alt={title}
          width={100}
          height={100}
        />
      </div>

      <div className="p-4 flex flex-col justify-between"> {/* Content Container (2/3 width) */}
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4"> {/* Tags */}
          {tags.map((tag) => (
            <div key={tag} className="badge badge-lg badge-neutral">
              {tag}
            </div>
          ))}
        </div>

      </div> 
    </div>
  );
}
