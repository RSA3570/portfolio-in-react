// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Thought Section */}
          <div>
            <h3 className="text-lg font-bold">Thought</h3>
            <p className="mt-4 text-gray-400 text-sm">
              Embarking on a journey as a full-stack developer means diving into both the frontend and backend realms. It's a quest to master diverse technologies and craft seamless, user-centric web experiences. From transforming raw data into dynamic interfaces to optimizing server-side logic, every line of code contributes to a larger vision. Embrace the challenge and let your passion drive you forward.
            </p>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-400">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3a7 7 0 100 14A7 7 0 0010 3zm0 12a5 5 0 110-10 5 5 0 010 10z"></path></svg>
                <span>Road No. 23, Rajeev Nagar, Patna, BH 800024, India</span>
              </li>
              <li className="flex items-center text-gray-400">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M4 8a4 4 0 118 0 4 4 0 01-8 0zm0 4a6 6 0 0012 0H4z"></path></svg>
                <span>kr.roushan.info@gmail.com</span>
              </li>
              <li className="flex items-center text-gray-400">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M4 8a4 4 0 118 0 4 4 0 01-8 0zm0 4a6 6 0 0012 0H4z"></path></svg>
                <span>+91 (910) 231-8033</span>
              </li>
            </ul>
          </div>
          {/* Social Media Links */}
          <div className="text-center">
            <h3 className="text-lg font-bold">Follow Me</h3>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M5.026 15.568c6.104 0 9.423-5.055 9.423-9.423 0-.143 0-.285-.01-.426A6.736 6.736 0 0016 4.292a6.547 6.547 0 01-1.889.518 3.31 3.31 0 001.446-1.827 6.563 6.563 0 01-2.079.797 3.27 3.27 0 00-5.553 2.986A9.26 9.26 0 011.15 3.15a3.27 3.27 0 001.015 4.363 3.262 3.262 0 01-1.485-.41v.042a3.273 3.273 0 002.62 3.206 3.277 3.277 0 01-1.48.056 3.274 3.274 0 003.057 2.271 6.552 6.552 0 01-4.066 1.4A6.606 6.606 0 010 14.844a9.278 9.278 0 005.026 1.725"></path></svg>
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3a7 7 0 100 14A7 7 0 0010 3zm0 12a5 5 0 110-10 5 5 0 010 10z"></path></svg>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M5.26 16.263V8.65H3.526v7.613h1.734zm-.867-8.698h.03a.867.867 0 100-1.734.867.867 0 00-.03 1.734zM6.963 8.65h1.733v.969h.025c.242-.459.836-1.164 1.722-1.164 1.836 0 2.173 1.207 2.173 2.776v3.997h-1.734v-3.52c0-.841-.015-1.925-1.17-1.925-1.17 0-1.35.912-1.35 1.855v3.589H6.963V8.65z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Roushan Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
