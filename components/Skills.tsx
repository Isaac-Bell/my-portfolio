import React from "react";
import SkillCard from "./SkillCard";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "fa-code",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 85 },
   
        { name: "NextJS", level: 65 },
      ],
    },
    {
      title: "Backend",
      icon: "fa-server",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 75 },
        { name: "SQL", level: 80 },
      ],
    },
    {
      title: "Tools",
      icon: "fa-wrench",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Bootstrap", level: 75 },
      ],
    },
    {
      title: "Soft Skills",
      icon: "fa-users",
      skills: [
        { name: "Communication", level: 95 },
        { name: "Team Work", level: 90 },
        { name: "Problem Solving", level: 85 },
      ],
    },
  ];

  return (
    <div id="skills-section" className="min-h-screen  flex flex-col justify-center bg-neutral-50 pb-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-end mb-8">
          <button
            id="theme-toggle"
            className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-neutral-200 hover:bg-neutral-100"
          >
            <i className="fa-regular fa-sun"></i>
            <span className="text-sm">Toggle Theme</span>
          </button>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional
            capabilities across various domains.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
