// src/components/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Desktop Layout */}
          <div className="hidden sm:flex sm:items-center sm:justify-between w-full">
            {/* Logo (Visible only on desktop) */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-yellow-400">MyPortfolio</a>
            </div>
            {/* Navigation Links */}
            <div className="flex space-x-4">
              <a href="#home" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#projects" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
              <a href="#skills" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Skills</a>
              <a href="#contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
            {/* Call-to-Action Button */}
            <div>
              <a href="#contact" className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-600">Contact Me</a>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex items-center sm:hidden w-full justify-between">
            {/* Logo (Visible only on mobile) */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-yellow-400">MyPortfolio</a>
            </div>
            <div className="flex items-center space-x-2">
              {/* Call-to-Action Button */}
              <a href="#contact" className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-600">Contact Me</a>
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#home" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#projects" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
          <a href="#skills" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Skills</a>
          <a href="#contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
