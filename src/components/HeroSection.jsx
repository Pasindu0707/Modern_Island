import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import fullimage from '../assets/fullimageband.jpg';
import fullimage1 from '../assets/fullimage2.jpg';
import fullimage3 from '../assets/fullimage3.jpg';

function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [fullimage, fullimage1, fullimage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative text-white h-screen flex items-center justify-center">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 z-2">
        <AnimatePresence>
          <motion.div
            key={currentImage}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[currentImage]})`,
              opacity: 0.6, // Adjusting opacity to reduce brightness
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          ></motion.div>
        </AnimatePresence>
      </div>

      {/* Dark Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-1"></div>

      {/* Text Content with Improved Readability */}
      <motion.div
        className="text-center z-10 px-4 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-6 max-w-2xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4 text-shadow-md"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Welcome to Modern Island
          </motion.h1>
          <motion.p
            className="text-sm sm:text-4xl mb-6 text-gray-300 text-shadow-md"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Experience music like never before. Live the rhythm, feel the vibe.
          </motion.p>
          <motion.a
            href="#events"
            className="px-6 py-3 bg-yellow-400 text-black rounded-full text-sm sm:text-lg font-semibold hover:bg-yellow-500 hover:shadow-lg transition button-hover-effect"
            whileHover={{ scale: 1.1 }}
          >
            Explore Events
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
