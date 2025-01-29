import React from "react";
import Image from "next/image";
interface ProjectCardProps {
  title: string;
  description: string;
  screenshotText: string;
  screenshotUrl: string;
  technologies: string[];
  liveUrl?: string;
  codeUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  screenshotText,
  screenshotUrl,
  technologies,
  liveUrl,
  codeUrl,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
      <div className="bg-neutral-600 h-[300px] rounded-lg flex items-center justify-center text-white">
        <Image src={screenshotUrl} alt={screenshotText} height={100} width={700} />
      </div>
      <h3 className="text-2xl font-bold mt-6 mb-3">{title}</h3>
      <p className="text-neutral-600 mb-4">{description}</p>
      <div className="flex gap-3 mb-6">
        {technologies.map((tech, index) => (
          <i key={index} className={`fa-brands fa-${tech} text-2xl text-neutral-700`} />
        ))}
      </div>
      <div className="flex gap-4">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
          >
            View Live
          </a>
        )}
        {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border-2 border-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            View Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
