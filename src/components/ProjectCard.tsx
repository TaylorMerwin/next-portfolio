import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  codeUrl?: string;
  tags: string[];
}

export default function ProjectCard({ title, subtitle, description, imageUrl, liveUrl, codeUrl, tags }: ProjectCardProps) {
  return (
    <div className="card md:card-side shadow-md">
      <figure className="">
        <Image
          src={imageUrl}
          alt={title}
          width={200}
          height={200}
          className="h-auto rounded-md"
        />
      </figure>

      <div className="card-body"> {/* Content Container (2/3 width) */}
        <div>
          <a href={codeUrl} target="_blank" rel="noopener noreferrer">
            <h3 className="card-title hover:text-primary">{title}</h3>
          </a>
          <p className="text-sm text-info">{subtitle}</p>
          <p className="">{description}</p>
          {liveUrl && <a href={liveUrl}><p className='text-primary'>View Live</p></a>}

        </div>

        <div className="card-actions justify-end">

          {tags.map((tag) => (
            <div key={tag} className="badge badge-md badge-outline">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
