import React from "react";

const Navbar = ({ activeSection }) => {
  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Achievements", id: "achievements" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-70 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo + Name */}
        <a
          href="#about"
          className="flex items-center space-x-2 text-white text-2xl font-bold shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-cyan-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span>Soni Kumari</span>
        </a>

        {/* Navbar Items */}
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide text-white font-medium">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex-shrink-0 hover:text-cyan-400 transition-colors ${
                activeSection === item.id
                  ? "text-cyan-400 font-semibold border-b-2 border-cyan-400"
                  : ""
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
