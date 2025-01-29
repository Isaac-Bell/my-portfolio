import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHammer, faHardHat, faProjectDiagram, 
  faUsers, faCode, faGraduationCap, 
  faBuilding, faChalkboardTeacher, faLaptopCode 
} from "@fortawesome/free-solid-svg-icons";

const timelineData = [
  {
    date: "2013 - 2015",
    title: "Building & Construction Apprenticeship",
    description: "Completed a National Certificate in Carpentry (Level 4), becoming a Qualified New Zealand builder. Specialized in residential construction.",
    icon: faHammer, 
  },
  {
    date: "2016",
    title: "Building Foreman",
    description: "Supervised residential construction teams across multiple sites, ensuring quality workmanship and project efficiency.",
    icon: faHardHat, 
  },
  {
    date: "2017",
    title: "Project Manager",
    description: "Managed the construction of residential dwellings from design to completion, overseeing budgeting, scheduling, and client communication.",
    icon: faProjectDiagram, 
  },
  {
    date: "2018 - 2021",
    title: "Building Contractor",
    description: "Founded and led my own construction company, building residential homes while mentoring and training a team of apprentices.",
    icon: faBuilding, 
  },
  {
    date: "2020",
    title: "Full Stack Developer",
    description: "Graduated from Dev Academy Aotearoa's full-stack bootcamp. A 900+ hour intensive, hands-on program focused on JavaScript, Node.js, React, and web development.",
    icon: faGraduationCap, 
  },
  {
    date: "2022",
    title: "Project Manager",
    description: "Led teams across multiple government-funded development sites, coordinating contractors, timelines, and project execution.",
    icon: faUsers, 
  },
  {
    date: "2023",
    title: "Client-Side Project Manager",
    description: "Represented clients’ interests in the construction of residential dwellings, ensuring projects met quality, cost, and time expectations.",
    icon: faChalkboardTeacher, 
  },
  {
    date: "2024",
    title: "Full Stack Developer",
    description: "Returned to Dev Academy Aotearoa for further specialization in full-stack development, refining skills in React, Node.js, and API integrations.",
    icon: faCode, 
  },
  {
    date: "2024 - Present",
    title: "Software Developer Intern – Aimer Development",
    description: "Collaborating with lead developers to enhance internal admin tools and client-facing web applications, gaining hands-on experience in modern development practices.",
    icon: faLaptopCode, 
  },
];

const CareerJourneyTimeline: React.FC = () => {
  return (
    <div id="timeline-container" className="container mx-auto px-4 py-16 max-w-6xl">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Career Journey</h2>

      <div id="timeline" className="relative">
        {/* Timeline Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

        <div className="timeline-items space-y-24">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-between group ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
            >
              {/* Left / Right Card */}
              <div className="w-5/12 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-600 font-semibold">{item.date}</span>
                  <FontAwesomeIcon icon={item.icon} className="text-2xl text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>

              {/* Empty Space for Layout Alignment */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerJourneyTimeline;
