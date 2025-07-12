import React from "react";

export default function TimelineSection() {
  const academicItems = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ];

  const jobItems = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ];

  const Timeline = ({ title, items }) => (
    <div className="flex-1">
      <h2 className="text-blue-500 font-semibold mb-6">{title}</h2>
      <div className="relative pl-8">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
        {items.map((item, index) => (
          <div key={index} className="mb-8 flex items-start relative">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 flex items-center justify-center z-10"></div>
            <div className="ml-4">
              <p className="text-sm font-medium">{item}</p>
              <p className="text-xs text-gray-500">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex justify-center items-start gap-16 p-8">
      <Timeline title="Academic Qualification" items={academicItems} />
      <Timeline title="Job Experiences" items={jobItems} />
    </div>
  );
}
