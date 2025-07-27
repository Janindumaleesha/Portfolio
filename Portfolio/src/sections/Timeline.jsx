import React from 'react';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const academicItems = [
  { year: '2015 - 2019', description: 'Bachelor of Science in Computer Science' },
  { year: '2019 - 2021', description: 'Master of Science in Software Engineering' },
  { year: '2021 - Present', description: 'PhD Candidate in Artificial Intelligence' },
];

const jobItems = [
  { year: '2019 - 2020', description: 'Junior Developer at ABC Corp' },
  { year: '2020 - 2022', description: 'Frontend Engineer at XYZ Ltd' },
  { year: '2022 - Present', description: 'Software Engineer at DevPortfolio' },
];

const Timeline = ({ title, items, IconComponent, iconBgColor }) => {
  return (
    <div className="flex-1 max-w-md">
      <h2 className="text-indigo-400 font-bold text-3xl mb-8 dark:text-indigo-500">{title}</h2>
      <div className="relative pl-10">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-indigo-700 opacity-30 dark:bg-indigo-400 rounded"></div>
        {items.map(({ year, description }, index) => (
          <div key={index} className="mb-12 flex items-start relative group">
            {/* Icon in circle */}
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg transition-transform transform group-hover:scale-110 ${iconBgColor}`}
              title={title}
            >
              <IconComponent size={20} />
            </div>
            <div className="ml-6">
              <p className="font-semibold text-indigo-300 dark:text-indigo-400 text-lg">{year}</p>
              <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm md:text-base">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TimelineSection = () => {
  return (
    <section
      id="testimonials"
      className="py-20 px-6 md:px-20 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-gray-300 flex flex-col md:flex-row justify-center gap-16 max-w-7xl mx-auto"
    >
      <Timeline
        title="Academic Qualification"
        items={academicItems}
        IconComponent={FaGraduationCap}
        iconBgColor="bg-indigo-600"
      />
      <Timeline
        title="Job Experiences"
        items={jobItems}
        IconComponent={FaBriefcase}
        iconBgColor="bg-indigo-500"
      />
    </section>
  );
};

export default TimelineSection;
