import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import ProfilePicture from '../assets/Profile.png';

const socialLinks = [
  { icon: FaFacebookF, href: '#' },
  { icon: FaGithub, href: '#' },
  { icon: FaInstagram, href: '#' },
  { icon: FaLinkedinIn, href: '#' },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center justify-center px-6 md:px-20 py-16 md:py-20 text-gray-300 overflow-y-hidden"
      style={{ scrollbarWidth: 'none' /* Firefox */, msOverflowStyle: 'none' /* IE 10+ */ }}
    >
      {/* Also hide scrollbar for Webkit browsers via CSS in your globals or styles: 
          ::-webkit-scrollbar { display: none; }  */}

      {/* Decorative Circles */}
      <div className="absolute -top-28 -left-28 w-72 h-72 rounded-full bg-indigo-700 opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-36 -right-28 w-96 h-96 rounded-full bg-indigo-900 opacity-40 blur-3xl"></div>

      <div className="relative max-w-7xl w-full flex flex-col md:flex-row items-center md:space-x-24 z-10">
        {/* Left Text */}
        <div className="md:w-1/2 space-y-8 md:space-y-10">
          <p className="text-indigo-400 text-base md:text-lg font-semibold tracking-wide animate-pulse">Hello,</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-300 leading-snug">
            I'm <span className="text-indigo-500">Janindu Maleesha</span>
          </h2>
          <h1 className="text-5xl md:text-6xl font-black text-indigo-600 leading-tight drop-shadow-lg">
            Software Engineer
          </h1>
          <p className="max-w-lg text-indigo-400 text-base md:text-lg leading-relaxed">
            Passionate about building scalable software, creating effective solutions, and learning every day.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold px-8 md:px-10 py-3 md:py-4 rounded-xl shadow-2xl transition duration-300 transform hover:scale-105">
            Download CV
          </button>

          {/* Social Icons */}
          <div className="flex space-x-8 mt-10 md:mt-12 text-indigo-400">
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 transition-colors duration-200"
                aria-label="Social link"
              >
                <Icon size={28} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center relative">
          <div className="rounded-full border-8 border-indigo-700 shadow-2xl p-3 bg-gray-900">
            <img
              src={ProfilePicture}
              alt="Janindu Maleesha"
              className="rounded-full w-72 h-72 md:w-[320px] md:h-[320px] object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
