import React from 'react'

const skills = [
  { name: "Lorem Ipsum", value: 85 },
  { name: "Lorem Ipsum", value: 40 },
  { name: "Lorem Ipsum", value: 55 },
  { name: "Lorem Ipsum", value: 70 },
  { name: "Lorem Ipsum", value: 85 },
  { name: "Lorem Ipsum", value: 65 },
];

function Skills() {
  return (
    <div className="p-4">
      <h2 className="text-blue-500 font-semibold mb-4">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{skill.name}</span>
              <span>{skill.value}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded">
              <div
                className="h-2 bg-blue-500 rounded"
                style={{ width: `${skill.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills