import React, { useState } from 'react'
import Image from 'next/image'
interface ProjectCardProps {
  title: string
  description: string
  screenshotText: string
  screenshotUrl?: string
  technologies: string[]
  videoUrl?: string
  liveUrl?: string
  codeUrl?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  screenshotText,
  screenshotUrl,
  technologies,
  videoUrl,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
      <div className="bg-neutral-600 h-[300px] rounded-lg flex items-center justify-center text-white">
        {videoUrl ? (
          <video
            src={videoUrl}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          />
        ) : (
          <Image
            src={screenshotUrl || '/default-image.png'}
            alt={screenshotText}
            height={100}
            width={700}
          />
        )}
      </div>
      <h3 className="text-2xl font-bold mt-6 mb-3">{title}</h3>
      <p className="text-neutral-600 mb-4">{description}</p>
      <div className="flex gap-3 mb-6">
        {technologies.map((tech, index) => (
          <i
            key={index}
            className={`fa-brands fa-${tech} text-2xl text-neutral-700`}
          />
        ))}
      </div>
      <div className="flex gap-4">
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition"
          >
            View Large
          </button>
        </div>
        {/* {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border-2 border-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            View Code
          </a>
        )} */}
      </div>
      {/* Modal for Larger Video */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
          <div className="relative bg-gray-900 p-6 rounded-lg w-full max-w-4xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              ✕
            </button>
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectCard
