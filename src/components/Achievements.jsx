import React from "react";
import Section from "./Section";

// Images ko import karo
import Acadmic from "../assets/Acadmic.jpeg";
import Culture from "../assets/culture.jpeg";
import Overflow from "../assets/overlow.jpeg";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Academic Excellence Certificate",
      description:
        "Awarded this certificate for my consistent academic performance and dedication to learning. It highlights my strong foundation in theoretical knowledge and commitment to achieving excellence in studies.",
      link: Acadmic,
    },
    {
      title: "Cultural Activities Certificate",
      description:
        "Recognized for my active participation and contributions in cultural activities, demonstrating creativity, confidence, and the ability to balance academics with extracurricular involvement.",
      link: Culture,
    },
    {
      title: "Overflow Certificate",
      description:
        "Honored with a certificate on NavGurukul's Overflow platform for excelling in both academics and cultural activities. This recognition highlights my problem-solving skills, teamwork, and ability to perform consistently across multiple domains.",
      link: Overflow,
    },
  ];

  return (
    <Section id="achievements" className="bg-gray-800 text-white">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400">
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl shadow-2xl p-6 text-center"
            >
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-gray-400 text-sm mb-4">
                {achievement.description}
              </p>
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cyan-400 hover:bg-cyan-500 transition-colors text-white py-2 px-6 rounded-full font-semibold text-sm transform hover:scale-105"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AchievementsSection;
