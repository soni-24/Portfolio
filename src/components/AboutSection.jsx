import React from "react";
import SoniImage from "../assets/soni.jpeg";
import CodeChefLogo from "../assets/codechef.png";

const AboutSection = () => (
  <section
    id="about"
    className="relative min-h-screen flex flex-col md:flex-row items-center justify-center text-white overflow-hidden pt-32 md:pt-28 px-4"
  >
    {/* Background */}
    <div className="absolute inset-0 z-0 opacity-10"></div>

    <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between text-center md:text-left md:space-x-12 w-full max-w-6xl">
      {/* Left side - Text */}
      <div className="flex-1 mb-10 md:mb-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-cyan-400">Soni Kumari</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light mb-4">I am a Web Developer</p>
        <p className="text-base sm:text-lg md:text-lg max-w-md md:max-w-3xl text-left leading-relaxed mx-auto md:mx-0">
          I’m a web developer skilled in HTML, CSS, JavaScript, React.js, Node.js. I specialize in creating responsive, user-friendly, and interactive web applications with clean and efficient code. Passionate about problem-solving and modern technologies, I focus on turning ideas into impactful digital solutions while collaborating effectively through Git and GitHub.
        </p>

        <a
          href="https://drive.google.com/file/d/1v2Idih-psDoD7zDtENYKjpCUgtpOnztc/view?usp=drive_link"
          download="Soni_Kumari_CV.pdf"
          className="inline-block bg-cyan-400 hover:bg-cyan-500 transition-colors text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg mt-6"
        >
          Resume
        </a>

        {/* Social icons */}
        <div className="flex justify-center md:justify-start space-x-6 mt-6">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/soni-kumari-b3771133a/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.768s.784-1.768 1.75-1.768 1.75.79 1.75 1.768-.784 1.768-1.75 1.768zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* GitHub */}
          <a href="https://github.com/soni-24?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.801 8.207 11.389.6.11.793-.262.793-.578v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.547-1.388-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.071 1.834 2.809 1.309 3.491.997.107-.775.418-1.309.762-1.606-2.666-.304-5.468-1.334-5.468-5.931 0-1.312.465-2.382 1.236-3.221-.124-.304-.536-1.525.117-3.176 0 0 1.008-.322 3.301 1.23a11.53 11.53 0 0 1 6.007 0c2.291-1.552 3.297-1.23 3.297-1.23.653 1.651.242 2.872.118 3.176.771.839 1.236 1.909 1.236 3.221 0 4.609-2.807 5.625-5.479 5.921.43.372.824 1.102.824 2.222v3.293c0 .316.192.688.801.577C20.563 21.801 24 17.304 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          {/* CodeChef */}
          <a href="https://www.codechef.com/users/soniku07" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <img src={CodeChefLogo} alt="CodeChef" className="h-8 w-8" />
          </a>
        </div>
      </div>

      {/* Right side - Profile Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-xl">
          <img
            src={SoniImage}
            alt="Soni Kumari"
            className="w-full h-full object-cover object-[center_30%]"
          />

        </div>
      </div>

    </div>
  </section>

);

export default AboutSection;
