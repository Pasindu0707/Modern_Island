import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import fullimage from '../assets/fullimageband.jpg';
import fullimage1 from '../assets/fullimage2.jpg';
import fullimage3 from '../assets/fullimage3.jpg';

function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: fullimage, alt: "Band performing live on stage" },
    { src: fullimage1, alt: "Band members group shot" },
    { src: fullimage3, alt: "Concert atmosphere" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background Images (Rotating) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"
            aria-hidden="true"
          />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
<h1 className="gradient-text text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight max-w-4xl text-center">
          Welcome to
          <br />
          <span className="block mt-2">Modern Island</span>
        </h1>
        <p className="mt-6 text-xl sm:text-xl md:text-2xl max-w-2xl text-gray-200 text-center leading-relaxed">
          Experience music like never before. Live the rhythm, feel the vibe.
        </p>
        <motion.a
          href="#events"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#events').scrollIntoView({ behavior: 'smooth' });
          }}
          className="modern-button mt-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Events
        </motion.a>
      </motion.div>
    </header>
  );
}

export default HeroSection;
