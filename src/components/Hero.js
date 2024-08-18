// src/components/HeroSection.js
import React from 'react';
import heroImage from '../assets/images/react-developer-portfolio-yellow-room-coding.jpeg';

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage} // Replace with your background image URL
          alt="Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Hi, I'm <span className="text-yellow-400">Roushan Kumar</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl">
            A passionate React developer specializing in building interactive and dynamic web applications.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#projects"
              className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-md text-lg font-medium hover:bg-yellow-600"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
