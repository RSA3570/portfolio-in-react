import React from 'react';
import twitterTrendsImage from '../assets/images/twittertrends.jpg';
import homeopathyImage from '../assets/images/homeopathyupchar.jpg';
import afinancewapImage from '../assets/images/afinancewap.jpg';

const projects = [
  {
    title: 'Twitter Trends World',
    description: 'A platform to visualize and analyze trending topics on Twitter using advanced data visualization techniques.',
    link: 'https://github.com/yourusername/twitter-trends-world',
    image: twitterTrendsImage,
  },
  {
    title: 'Homeopathy Upchar',
    description: 'A web application offering information on homeopathic treatments, symptoms, and remedies.',
    link: 'https://github.com/yourusername/homeopathy-upchar',
    image: homeopathyImage,
  },
  {
    title: 'aFinancewap',
    description: 'A financial management tool with features like expense tracking, budget planning, and financial insights.',
    link: 'https://github.com/yourusername/afinancewap',
    image: afinancewapImage,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Projects</h2>
          <p className="mt-4 text-lg text-gray-600">
            Here are some of the projects I have worked on. Each project showcases my skills and expertise in various technologies.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={project.image} alt={project.title} />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-yellow-500 hover:text-yellow-600 font-medium"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
