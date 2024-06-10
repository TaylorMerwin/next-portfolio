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
    <div className="card card-side">
      <figure className='ml-4'>
        <Image
          src={imageUrl}
          alt={title}
          width={100}
          height={100}
          className="object-cover rounded-lg"
        />
      </figure>

      <div className="card-body"> {/* Content Container (2/3 width) */}
        <div>
          <a href={codeUrl} target="_blank" rel="noopener noreferrer">
            <h3 className="card-title hover:text-secondary">{title}</h3>
          </a>
          <p className="text-gray-700 mt-2 mb-4">{description}</p>
        </div>

        <div className="card-actions">
          {tags.map((tag) => (
            <div key={tag} className="badge badge-lg badge-neutral">
              {tag}
            </div>
          ))}
        </div>

        {liveUrl && <a href={liveUrl}><p className='text-primary'>View Live</p></a>}
      </div>
    </div>
  );
}
