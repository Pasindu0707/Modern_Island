import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import members from './data/memebrs';

function BandMembers() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section 
      id="band" 
      className="py-20 animated-bg text-white px-4 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="gradient-text text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Meet The Band
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {members.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="modern-card group"
              whileHover={{ y: -10 }}
            >
              <Link 
                to={`/member/${member.id}`}
                className="block p-5 h-full focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-inset rounded-xl"
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-pink-400 transition-colors duration-300 ">
                    {member.name}
                  </h3>
                  <p className="text-sm text-pink-400 mt-1">{member.role}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default BandMembers;