import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-white font-sans">

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-20 py-16 md:py-32">
        {/* Left */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-gray-600">Hello,</p>
          <h2 className="text-xl font-semibold">I'm Janindu Maleesha</h2>
          <h1 className="text-3xl font-bold text-blue-600">
            Software <br />
            <span className="text-blue-400">Engineer</span>
          </h1>
          <p className="text-gray-600 text-sm max-w-md">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
          </p>
          <button className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition duration-200">
            Download CV
          </button>
        </div>

        {/* Right */}
        <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center items-center">
          {/* Diamond shapes */}
          <div className="w-48 h-48 border-4 border-blue-400 transform rotate-45 absolute"></div>
          <div className="w-48 h-48 bg-blue-500 transform rotate-45 absolute top-4 left-4 rounded-md shadow-md"></div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 py-8 text-xl text-black">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
      </div>
    </div>
  );
};

export default Hero;
