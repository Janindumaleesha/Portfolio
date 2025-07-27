import React from 'react';

// Replace these images with your project images or import local assets
const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A modern and responsive web application.',
    image: 'https://source.unsplash.com/400x300/?website,technology,1',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'An innovative mobile app with sleek UI.',
    image: 'https://source.unsplash.com/400x300/?mobile,app,2',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Open-source library for React developers.',
    image: 'https://source.unsplash.com/400x300/?code,programming,3',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-20 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-gray-300 max-w-7xl mx-auto"
    >
      <h2 className="text-indigo-400 font-bold text-4xl text-center mb-6">
        My Projects
      </h2>
      <p className="max-w-3xl mx-auto text-center text-indigo-300 mb-12">
        These are some of the projects I have worked on. I am proud of their impact and I’m always eager to take on new challenges.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map(({ id, title, description, image }) => (
          <div
            key={id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-indigo-400 font-semibold text-2xl mb-2">{title}</h3>
              <p className="text-indigo-200">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
