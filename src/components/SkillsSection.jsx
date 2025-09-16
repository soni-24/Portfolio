import React from 'react';
import Section from "./Section";

import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/js.png";
import reactIcon from "../assets/react.svg";

import gitGithubIcon from "../assets/git&gitub.png";
import netlifyIcon from "../assets/netlify.png";
import vscodeIcon from "../assets/VScode.png";
import tailwindIcon from "../assets/Tailwind.jpg";


const SkillsSection = () => {
  // Skills data with inline SVG icons for each skill
 const technicalSkills = [
  { name: "HTML", icon: <img src={htmlIcon} alt="HTML" className="h-8 w-8" /> },
  { name: "CSS", icon: <img src={cssIcon} alt="CSS" className="h-8 w-8" /> },
  { name: "JavaScript", icon: <img src={jsIcon} alt="JavaScript" className="h-8 w-8" /> },
  { name: "React.js", icon: <img src={reactIcon} alt="React.js" className="h-8 w-8" /> },
];

const tools = [
  { name: "Git & GitHub", icon: <img src={gitGithubIcon} alt="GitHub" className="h-8 w-8" /> },
  { name: "Netlify", icon: <img src={netlifyIcon} alt="Netlify" className="h-8 w-8" /> },
  { name: "VS Code", icon: <img src={vscodeIcon} alt="VS Code" className="h-8 w-8" /> },
  { name: "Tailwind CSS", icon: <img src={tailwindIcon} alt="Tailwind CSS" className="h-8 w-8" /> },
];



  return (
    <Section id="skills" className="bg-black text-white py-24">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-xl shadow-2xl">
            <h3 className="text-3xl font-semibold mb-6 text-white">Technical Skills</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-2 gap-4 text-lg">
              {technicalSkills.map((skill, index) => (
                <li key={index} className="bg-gray-800 py-3 px-4 rounded-lg shadow-lg hover:bg-cyan-400 transition-colors transform hover:scale-105 flex items-center justify-center space-x-2">
                  {skill.icon}
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900 p-8 rounded-xl shadow-2xl">
            <h3 className="text-3xl font-semibold mb-6 text-white">Tools</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-2 gap-4 text-lg">
              {tools.map((skill, index) => (
                <li key={index} className="bg-gray-800 py-3 px-4 rounded-lg shadow-lg hover:bg-cyan-400 transition-colors transform hover:scale-105 flex items-center justify-center space-x-2">
                  {skill.icon}
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};


export default SkillsSection;
