import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12 mt-20 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-20 space-y-6 md:space-y-0">
        
        {/* Branding */}
        <div className="flex items-center space-x-3">
          <span className="bg-indigo-600 text-white px-4 py-2 rounded-full font-bold text-lg tracking-wider select-none">
            J
          </span>
          <span className="font-semibold text-indigo-400">Portfolio</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-6 text-indigo-300 font-medium text-sm">
          <a
            href="#about"
            className="hover:text-indigo-500 transition-colors"
          >
            About Me
          </a>
          <a
            href="#skills"
            className="hover:text-indigo-500 transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-indigo-500 transition-colors"
          >
            Projects
          </a>
          <a
            href="#testimonials"
            className="hover:text-indigo-500 transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="hover:text-indigo-500 transition-colors"
          >
            Contact Me
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-6 text-indigo-400">
          <a href="#" aria-label="Facebook" className="hover:text-indigo-600 transition-colors">
            <FaFacebookF size={22} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-indigo-600 transition-colors">
            <FaLinkedinIn size={22} />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-indigo-600 transition-colors">
            <FaGithub size={22} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-indigo-600 transition-colors">
            <FaInstagram size={22} />
          </a>
        </div>
      </div>

      {/* Footer copyright */}
      <p className="mt-10 text-center text-indigo-400 text-sm select-none">
        &copy; 2025 Janindu Maleesha. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
