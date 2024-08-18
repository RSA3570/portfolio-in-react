// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">About Me</h2>
          <p className="mt-4 text-lg text-gray-600">
            Hello! I’m [Your Name], a passionate React developer with [X] years of experience in creating dynamic and responsive web applications. I have a strong background in modern JavaScript frameworks and a keen eye for detail in both design and functionality.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: About Me Text */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900">Who I Am</h3>
            <p className="mt-4 text-gray-600">
              I specialize in building seamless user experiences with React and other modern technologies. My passion lies in crafting clean, efficient code and delivering top-notch solutions that meet the needs of clients and users alike.
            </p>
            <p className="mt-4 text-gray-600">
              When I’m not coding, you can find me exploring new tech trends, contributing to open-source projects, or enjoying some time outdoors. I believe in continuous learning and strive to stay updated with the latest industry practices and innovations.
            </p>
          </div>
          {/* Right Side: Skills and Technologies */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900">Skills & Technologies</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 0L0 10h20L10 0z"></path></svg>
                <span className="text-gray-600">React</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 0L0 10h20L10 0z"></path></svg>
                <span className="text-gray-600">JavaScript</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 0L0 10h20L10 0z"></path></svg>
                <span className="text-gray-600">Node.js</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 0L0 10h20L10 0z"></path></svg>
                <span className="text-gray-600">Tailwind CSS</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
