import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

const navItems = [
  { name: 'About Me', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact Me', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('');

  // Initialize dark mode based on user preference or default to light
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle dark mode & persist preference
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  // Close mobile menu when navigating
  const handleNavClick = (href) => {
    setIsOpen(false);
    setActiveNav(href);
  };

  // Highlight nav item on scroll (optional enhancement)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 80; // to offset navbar height
      let current = '';
      navItems.forEach(({ href }) => {
        const section = document.querySelector(href);
        if (section && section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
          current = href;
        }
      });
      setActiveNav(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial run
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 shadow-md transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-4 cursor-pointer select-none">
          <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-extrabold text-2xl shadow-md transition-transform duration-300 hover:scale-110">
            J
          </div>
          <span className="text-2xl font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-300 select-none">
            Portfolio
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              onClick={() => handleNavClick(href)}
              className={`relative font-medium cursor-pointer transition-colors duration-300 ${
                activeNav === href
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              {name}
              {/* Underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 ${
                  activeNav === href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="ml-6 p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center"
            title="Toggle Dark Mode"
          >
            {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Dark Mode Toggle Mobile */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          {/* Hamburger/Close Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none transition-colors duration-300"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 bottom-0 bg-white dark:bg-gray-900 shadow-2xl px-8 pt-24 pb-10 space-y-8 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 100 }}
      >
        {navItems.map(({ name, href }) => (
          <a
            key={name}
            href={href}
            onClick={() => handleNavClick(href)}
            className={`block text-2xl font-semibold cursor-pointer transition-colors duration-300 ${
              activeNav === href
                ? 'text-indigo-600 dark:text-indigo-400'
                : 'text-gray-800 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
            }`}
          >
            {name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
