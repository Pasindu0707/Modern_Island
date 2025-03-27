import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faMusic,
  faPhotoVideo,
  faCalendarAlt,
  faEnvelope,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#band', label: 'Band', icon: faMusic },
    { href: '#events', label: 'Events', icon: faCalendarAlt },
    { href: '#contact', label: 'Contact', icon: faEnvelope },
  ];

  const handleNavClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(e.currentTarget.getAttribute('href'));
    if (target) {
      target.scrollIntoView();
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 ${
        scrolling ? 'glass-effect shadow-lg' : 'bg-transparent'
      } backdrop-blur-md text-white transition-all duration-300`}
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <motion.a 
  href="/" 
  className="text-base font-bold flex items-center gap-2 gradient-text"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <img src="./ModernIsland.jpg" alt="Logo" className="w-9 h-9 rounded-full" />
  Modern Island
</motion.a>


        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="flex space-x-6 text-sm font-medium">
            {menuItems.map(({ href, label, icon }) => (
              <motion.a
                key={label}
                href={href}
                onClick={handleNavClick}
                className="hover:text-pink-400 transition duration-200 relative group flex items-center gap-2"
                whileHover={{ y: -2 }}
              >
                <FontAwesomeIcon icon={icon} className="w-4 h-4" />
                {label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="block md:hidden">
          <motion.button
            className="text-white modern-button !p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-effect px-6 pb-4 absolute w-full left-0 top-full"
          >
            {menuItems.map(({ href, label, icon }) => (
              <motion.a
                key={label}
                href={href}
                onClick={handleNavClick}
                className="py-2 text-sm text-gray-300 hover:text-pink-400 transition flex items-center gap-2"
                whileHover={{ x: 10 }}
              >
                <FontAwesomeIcon icon={icon} />
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
