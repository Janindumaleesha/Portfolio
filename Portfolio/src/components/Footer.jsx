import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <div>
        <footer className="mt-10 border-t border-gray-300 pt-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">Janindu</span>
            <span className="text-sm">Maleesha</span>
          </div>
          <nav className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm">About me</a>
            <a href="#" className="text-sm">Skills</a>
            <a href="#" className="text-sm">Projects</a>
            <a href="#" className="text-sm">Testimonial</a>
            <a href="#" className="text-sm">Contact me</a>
          </nav>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaFacebookF size={20} />
            <FaLinkedinIn size={20} />
            <FaGithub size={20} />
            <FaInstagram size={20} />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer