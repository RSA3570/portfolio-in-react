import React from 'react';

const Projects = () => {
  const projectList = [
    {
      name: 'Project 1',
      description: 'A brief description of Project 1.',
      link: 'https://github.com/yourusername/project1'
    },
    {
      name: 'Project 2',
      description: 'A brief description of Project 2.',
      link: 'https://github.com/yourusername/project2'
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="p-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-4">
          {projectList.map((project, index) => (
            <li key={index} className="border-b pb-4">
              <h3 className="text-xl font-medium">{project.name}</h3>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
