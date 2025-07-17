const AboutMe = () => {

  const skills = [
    { name: "Lorem Ipsum", value: 85 },
    { name: "Lorem Ipsum", value: 40 },
    { name: "Lorem Ipsum", value: 55 },
    { name: "Lorem Ipsum", value: 70 },
    { name: "Lorem Ipsum", value: 85 },
    { name: "Lorem Ipsum", value: 65 },
  ];

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] px-6 md:px-20 py-12 bg-white">
      {/* Left: Diamond shapes */}
      <div className="relative w-64 h-64 mb-12 md:mb-0">
        {/* Border diamond */}
        <div className="w-full h-full border-4 border-blue-400 transform rotate-45 absolute"></div>
        {/* Filled diamond */}
        <div className="w-full h-full bg-blue-500 transform rotate-45 absolute top-4 left-4 rounded-md"></div>
      </div>

      {/* Right: About Me Content */}
      <div className="md:ml-12 text-center md:text-left max-w-lg">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">About me</h2>
        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 text-sm">
          Read More
        </button>
      </div>
    </section>
  );
};

export default AboutMe;