import React, { useState } from 'react';
import ProfilePicture from '../assets/Profile.png';

const AboutMe = () => {
  const [expanded, setExpanded] = useState(false);

  const handleReadMore = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center max-w-7xl mx-auto py-20 px-6 md:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300"
    >
      {/* Left Image Circle with glow */}
      <div className="relative w-80 h-80 mb-12 md:mb-0">
        {/* Glow/background ring */}
        <div className="absolute inset-0 rounded-full bg-indigo-700 opacity-40 blur-3xl animate-pulse scale-110"></div>
        <img
          src={ProfilePicture}
          alt="About Me"
          className="relative rounded-full w-80 h-80 object-cover shadow-2xl border-8 border-gray-900"
        />
      </div>

      {/* Right Text Content */}
      <div className="md:ml-16 max-w-xl text-center md:text-left space-y-6">
        <h2 className="text-4xl font-semibold text-indigo-400 mb-4">About Me</h2>

        <p className="text-indigo-200 text-lg leading-relaxed transition-all duration-300 max-w-xl">
          I am a passionate Software Engineer with experience building modern web applications
          using the latest technology stacks. I enjoy creating clean and performant code,
          and I am constantly improving my skills.
          {expanded && (
            <>
              {' '}
              I also love collaborating with teams, solving complex problems, and exploring new
              innovations in technology to deliver quality products that make an impact.
            </>
          )}
        </p>

        <button
          onClick={handleReadMore}
          className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition transform hover:scale-105 inline-block"
          aria-expanded={expanded}
          aria-controls="about-more-text"
        >
          {expanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
