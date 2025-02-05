import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faMusic,
  faPhotoVideo,
  faCalendarAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-screen px-4 py-3 z-50 transition-all ${
          scrolling
            ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-opacity-90 shadow-lg'
            : 'bg-transparent'
        }`}
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between w-10/12 mx-auto">
          <div className="flex items-center space-x-2">
            <img
              src="./ModernIsland.jpg"
              alt="Modern Island Logo"
              className="h-10 w-10 rounded-full"
            />
            <span className="text-lg font-bold text-white">Modern Island</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="flex items-center text-white hover:text-yellow-400 transition">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              About
            </a>
            <a href="#band" className="flex items-center text-white hover:text-yellow-400 transition">
              <FontAwesomeIcon icon={faMusic} className="mr-2" />
              Band Members
            </a>
            <a href="#media" className="flex items-center text-white hover:text-yellow-400 transition">
              <FontAwesomeIcon icon={faPhotoVideo} className="mr-2" />
              Media
            </a>
            <a href="#events" className="flex items-center text-white hover:text-yellow-400 transition">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              Events
            </a>
            <a href="#contact" className="flex items-center text-white hover:text-yellow-400 transition">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Contact
            </a>
          </div>
          <button
            className="block md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <motion.div
          className={`overflow-hidden bg-gray-800`}
          initial={{ height: 0 }}
          animate={{ height: menuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col mt-3 space-y-2 px-4">
            <a
              href="#about"
              className="flex items-center text-white hover:text-yellow-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              About
            </a>
            <a
              href="#band"
              className="flex items-center text-white hover:text-yellow-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faMusic} className="mr-2" />
              Band Members
            </a>
            <a
              href="#media"
              className="flex items-center text-white hover:text-yellow-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faPhotoVideo} className="mr-2" />
              Media
            </a>
            <a
              href="#events"
              className="flex items-center text-white hover:text-yellow-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              Events
            </a>
            <a
              href="#contact"
              className="flex items-center text-white hover:text-yellow-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Contact
            </a>
          </div>
        </motion.div>
      </motion.nav>

      {/* Spacer Div */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}

export default Navbar;
