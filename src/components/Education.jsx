import React, { useState } from "react";
import Section from "./Section";

const EducationSection = () => (
    <Section id="education" className="bg-black text-white">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-cyan-400">Education</h2>
        <div className="max-w-4xl mx-auto space-y-8 text-left">
          <div className="bg-gray-900 p-8 rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-[1.02]">
            <h3 className="text-2xl font-semibold mb-2">Bachelor of Computer Applications (BCA)</h3>
            <p className="text-lg text-gray-300">Salesian College, Siliguri</p>
            <p className="text-md mt-4 leading-relaxed">
              Currently pursuing my BCA, with coursework focused on programming, computer applications, and problem-solving, building a strong foundation for my career in technology.
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-[1.02]">
            <h3 className="text-2xl font-semibold mb-2">Web Development Training</h3>
            <p className="text-lg text-gray-300">NavGurukul</p>
            <p className="text-md mt-4 leading-relaxed">
              Currently pursuing Software Engineering & Web Development, where I am learning HTML, CSS, JavaScript, React, Node.js, and Python, while working on real projects that strengthen my technical and teamwork skills.
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-[1.02]">
            <h3 className="text-2xl font-semibold mb-2">Schooling</h3>
            <p className="text-lg text-gray-300">Completed 10th and 12th Education</p>
            <p className="text-md mt-4 leading-relaxed">
              Successfully completed my 10th and 12th education, where I developed an interest in computers and logical thinking, laying the foundation for my future career.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
export default EducationSection