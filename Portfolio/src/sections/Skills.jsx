import React from 'react';

const skills = [
  { name: 'JavaScript', value: 90 },
  { name: 'React', value: 85 },
  { name: 'Tailwind CSS', value: 80 },
  { name: 'Node.js', value: 75 },
  { name: 'TypeScript', value: 70 },
  { name: 'GraphQL', value: 60 },
  { name: 'Redux', value: 65 },
  { name: 'Next.js', value: 72 },
  { name: 'Express.js', value: 68 },
  { name: 'MongoDB', value: 62 },
  { name: 'Docker', value: 58 },
  { name: 'Jest', value: 50 },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 py-20 px-6 md:px-20 text-gray-300"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-indigo-400 mb-14 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {skills.map(({ name, value }, index) => (
            <div
              key={index}
              className="space-y-3 group cursor-default"
            >
              <div className="flex justify-between font-semibold text-indigo-300 group-hover:text-indigo-500 transition-colors">
                <span>{name}</span>
                <span>{value}%</span>
              </div>
              <div className="w-full h-4 rounded-full bg-indigo-700 bg-opacity-30 overflow-hidden">
                <div
                  className="h-4 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-400 group-hover:from-indigo-500 group-hover:to-indigo-300 transition-all duration-700 ease-in-out"
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
