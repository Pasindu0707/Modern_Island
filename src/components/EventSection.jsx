import React from 'react';
import { motion } from 'framer-motion';

function EventSection() {
  const events = [
    {
      id: 1,
      name: 'Live Concert at City Square',
      date: 'December 20, 2024',
      time: '7:00 PM',
      location: 'City Square Arena, NY',
    },
    {
      id: 2,
      name: 'Music Fest 2024',
      date: 'January 15, 2025',
      time: '6:00 PM',
      location: 'Rockwood Festival Grounds, LA',
    },
    {
      id: 3,
      name: 'Acoustic Night',
      date: 'February 10, 2025',
      time: '8:00 PM',
      location: 'Downtown Cafe, SF',
    },
  ];

  return (
    <section 
      id="events" 
      className="min-h-screen py-20 px-4 animated-bg text-white scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16 section-title-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="gradient-text text-4xl md:text-5xl font-bold mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-300 text-lg">
            Catch us live at our next shows!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="modern-card p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold gradient-text">
                  {event.name}
                </h3>
                
                <div className="space-y-2 text-gray-300">
                  <p className="flex items-center gap-2">
                    <span className="text-pink-400">📅</span>
                    <span>{event.date}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-pink-400">⏰</span>
                    <span>{event.time}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-pink-400">📍</span>
                    <span>{event.location}</span>
                  </p>
                </div>

                <button 
                  className="modern-button w-full"
                >
                  Get Tickets
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventSection;

