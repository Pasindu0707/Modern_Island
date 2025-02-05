import React from 'react';
import { motion } from 'framer-motion';

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

function EventSection() {
  return (
    <section id="events" className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Events List */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-2">{event.name}</h3>
                <p className="text-gray-400 mb-1">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="text-gray-400 mb-1">
                  <strong>Time:</strong> {event.time}
                </p>
                <p className="text-gray-400">
                  <strong>Location:</strong> {event.location}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Google Calendar Embed */}
          <motion.div
            className="rounded-lg overflow-hidden shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <iframe
              src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=YOUR_TIMEZONE"
              style={{
                border: 0,
                width: '100%',
                height: '500px',
              }}
              frameBorder="0"
              scrolling="no"
              title="Google Calendar"
            ></iframe>
          </motion.div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-10">
          <a
            href="#contact"
            className="px-6 py-3 bg-yellow-400 text-black rounded-full text-lg font-semibold hover:bg-yellow-500 transition"
          >
            Contact Us for Bookings
          </a>
        </div>
      </div>
    </section>
  );
}

export default EventSection;
