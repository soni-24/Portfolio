import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExprerienceSection";
import EducationSection from "./components/Education";
import AchievementsSection from "./components/Achievements";
import ProjectsSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      // ✅ Education & Achievements added
      const sections = [
        "about",
        "skills",
        "experience",
        "education",
        "achievements",
        "projects",
        "contact",
      ];

      let currentSection = "about";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans bg-black">
      <Navbar activeSection={activeSection} />
      <main>
        <section id="about">
          <AboutSection />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="experience">
          <ExperienceSection />
        </section>

        <section id="education">
          <EducationSection />
        </section>

        <section id="achievements">
          <AchievementsSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />

      {/* Extra CSS for animations */}
      <style>
        {`
          html { scroll-behavior: smooth; }
          .animate-pulse-slow {
            animation: pulse-slow 10s infinite ease-in-out;
          }
          .animate-pulse-slow-reverse {
            animation: pulse-slow-reverse 10s infinite ease-in-out;
          }
          @keyframes pulse-slow {
            0%, 100% { transform: scale(0.8); opacity: 0.1; }
            50% { transform: scale(1.2); opacity: 0.3; }
          }
          @keyframes pulse-slow-reverse {
            0%, 100% { transform: scale(1.2); opacity: 0.3; }
            50% { transform: scale(0.8); opacity: 0.1; }
          }
        `}
      </style>
    </div>
  );
};

export default App;
