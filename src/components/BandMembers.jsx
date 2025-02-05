import React from 'react';
import { Link } from 'react-router-dom';
import members from './data/memebrs'; // Ensure correct path for members
import { motion } from 'framer-motion';

function BandMembers() {
  return (
    <section id="band" className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Band Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <motion.div
              key={member.id}
              className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:shadow-xl transition flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
            >
              {/* Link to member's detail page */}
              <Link to={`/member/${member.id}`} className="flex flex-col items-center">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-52 h-52 object-cover rounded-full border-4 border-gray-700"
                />
                <h3 className="text-2xl font-semibold mt-4">{member.name}</h3>
                <p className="text-md text-gray-400">{member.role}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BandMembers;
