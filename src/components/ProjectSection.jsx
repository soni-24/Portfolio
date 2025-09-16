import React from "react";
import Section from "./Section";

// Images import
import JewelleryImg from "../assets/Screenshot in jewellery website.png";
import NgoImg from "../assets/Screenshot of NGO website.png";
import BiharImg from "../assets/bihar.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Jewellery Website Project",
      description:
        "Designed and developed a responsive jewellery website with modern UI/UX Showcased elegant collections through clean navigation and visually appealing layouts.",
      link: "https://splendorous-syrniki-0b1b8b.netlify.app/",
      image: JewelleryImg,
      github: "https://github.com/soni-24/Beauty-parla-website"
    },
    {
      title: "NGO Website",
      description:
        "Designed and developed an NGO website to spread awareness and showcase social initiatives in an impactful way.",
      link: "https://ephemeral-crumble-071498.netlify.app/",
      image: NgoImg,
      github: "https://github.com/soni-24/NGO_WEBSITE"
    },
    {
      title: "Bihar Website",
      description: `A responsive website showcasing Bihar's beauty, history, and culture. 
Features user-friendly navigation and an engaging browsing experience.`,
      link: "https://genuine-cascaron-3fd22c.netlify.app/",
      image: BiharImg,
      github: "https://github.com/soni-24/Bihar2.0"
    },
  ];

  return (
    <Section id="projects" className="bg-gray-900 text-white">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-cyan-400 hover:bg-cyan-500 transition-colors text-white py-2 px-6 rounded-full font-semibold"
                  >
                    View Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-600 hover:bg-gray-700 transition-colors text-white py-2 px-6 rounded-full font-semibold"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProjectsSection;
