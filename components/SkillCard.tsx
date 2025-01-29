import React from "react";

interface Skill {
  name: string;
  level: number; // Skill proficiency percentage (e.g., 90 for 90%)
}

interface SkillCardProps {
  title: string;
  icon: string; // FontAwesome icon class (e.g., "fa-code")
  skills: Skill[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, skills }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
      <div className="flex items-center mb-6">
        <i className={`fa-solid ${icon} text-2xl mr-3`}></i>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm">{skill.level}%</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div
                className="bg-neutral-800 h-2 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
