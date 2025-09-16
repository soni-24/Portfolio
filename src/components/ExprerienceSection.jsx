import React from "react";
import Section from "./Section"; 
 const ExperienceSection = () => {
    const experiences = [
      {
        role: "Academic Coordinator",
        company: "NavGurukul",
        period: "May 2025 – Aug 2025",
        description: [
          "Maintained daily attendance records for 75+ students, designed and facilitated engaging learning activities to address academic challenges, ensured classroom discipline, and collaborated with mentors to enhance overall academic outcomes."
        ],
      },
    ];
    return (
    <section id="experience" className="text-white">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-cyan-400">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-700 p-8 rounded-xl shadow-2xl text-left transform transition-transform duration-300 hover:scale-[1.02]">
              <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3>
              <p className="text-lg text-gray-300">{exp.company} <span className="text-sm font-light text-gray-400">({exp.period})</span></p>
              <ul className="list-disc list-inside space-y-2 text-md mt-4">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  };

export default ExperienceSection;
