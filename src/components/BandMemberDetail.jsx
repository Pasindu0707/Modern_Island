import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import members from './data/memebrs';

function BandMemberDetail() {
  const { id } = useParams();
  const member = members.find((m) => m.id === parseInt(id));

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <motion.h2 
          className="text-2xl font-bold gradient-text"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Member not found!
        </motion.h2>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 animated-bg text-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.button
          onClick={() => window.history.back()}
          className="mb-6 modern-button"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="flex items-center gap-2">
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </span>
        </motion.button>

        <motion.div 
          className="modern-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-[16/9] w-full mb-8 rounded-lg overflow-hidden">
            <motion.img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-contain bg-black/40 rounded-lg"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              loading="eager"
            />
          </div>
          
          <motion.h3 
            className="text-3xl font-bold mb-2 gradient-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {member.name}
          </motion.h3>
          <motion.p 
            className="text-pink-400 text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {member.role}
          </motion.p>
          <motion.p 
            className="text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {member.details}
          </motion.p>

          <motion.div 
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/"
              className="modern-button inline-flex items-center"
            >
              ← Back to Band Members
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default BandMemberDetail;