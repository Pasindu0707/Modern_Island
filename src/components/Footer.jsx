import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 animated-bg text-gray-400 pt-12 pb-6 border-t border-pink-500/20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.h5 
              className="gradient-text text-2xl font-extrabold"
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Modern Island
            </motion.h5>
            <p className="text-base leading-relaxed text-gray-400">
              Modern Island is a dynamic band bringing live music to life.
              Experience the rhythm, feel the vibe, and join us on this musical journey.
            </p>
          </div>

          {/* Social Links Section */}
          <div className="space-y-4">
            <motion.h5 
              className="gradient-text text-2xl font-extrabold"
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Follow Us
            </motion.h5>
            <p className="text-base text-gray-400">
              Stay connected for the latest updates & events.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-8">
              {[
                { icon: faFacebookF, url: "https://www.facebook.com/modernislandfb" },
                { icon: faInstagram, url: "https://www.instagram.com/modernislandofficial/" },
                { icon: faYoutube, url: "https://www.youtube.com/@ModernIslandofficial" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="modern-card p-3 rounded-full">
                    <FontAwesomeIcon 
                      icon={social.icon}
                      size="lg"
                      className="text-gray-400 group-hover:text-pink-400 transition-colors duration-300"
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div 
          className="relative z-10 border-t border-gray-800 mt-12 pt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm text-gray-500">
            © {currentYear} Modern Island. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;