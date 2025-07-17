import React from 'react'

const projects = [
  { id: 1, description: "Project One Description" },
  { id: 2, description: "Project Two Description" },
  { id: 3, description: "Project Three Description" },
];

function Projects() {
  return (
    <div>
        <section className="mt-10 text-center">
        <h2 className="text-blue-500 font-semibold mb-2">My Projects</h2>
        <p className="max-w-2xl mx-auto text-sm text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {projects.map((project) => (
            <div key={project.id} className="space-y-2">
              <div className="bg-gray-300 h-48 rounded-lg"></div>
              <p className="text-sm text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Projects