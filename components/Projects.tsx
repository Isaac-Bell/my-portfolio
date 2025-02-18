import React from "react";
import ProjectCard from "./ProjectCard";


const projects = [
  {
    title: "Aimer Farming App",
    description: "A full-stack pasture management solution with real-time inventory management and AI grazing plan generation.",
    screenshotText: "Project Screenshot",
    screenshotUrl: "/AimerAppLogin.png",
    technologies: ["react", "node-js", "type-script", "docker"  ],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics and management platform for social media accounts with real-time data visualization.",
    screenshotText: "Project Screenshot",
    technologies: ["vuejs", "python", "docker"],
    screenshotUrl: "/AimerAppLogin.png",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Weather App",
    description: "Real-time weather forecasting with location-based services.",
    screenshotText: "Project Screenshot",
    technologies: ["js", "html5", "css3-alt"],
    screenshotUrl: "/AimerAppLogin.png",
    liveUrl: "#",
    codeUrl: "#",
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <div id="projects" className="min-h-screen bg-neutral-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-neutral-900 mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <h3 className="text-2xl font-bold text-neutral-900 mb-8">More Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(2).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
