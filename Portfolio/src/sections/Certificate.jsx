import React from "react";

export default function Certifications() {
  const certificates = [1, 2, 3, 4];

  return (
    <div className="p-8">
      <h2 className="text-sm text-blue-500 font-semibold mb-4">Certifications</h2>
      <div className="flex flex-wrap gap-4">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="w-40 h-28 bg-gray-300 rounded-md"
          ></div>
        ))}
      </div>
    </div>
  );
}
