import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import { events } from '../data/events';

const Events = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);

  const filteredEvents = events.filter((event) => event.type === activeTab);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-violet-900/20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Our Events
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join us for exciting workshops, hackathons, and networking events throughout the year.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('upcoming')}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all ${
                activeTab === 'upcoming'
                  ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white'
                  : 'glass-purple text-gray-300 hover:text-white'
              }`}
            >
              Upcoming Events
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('past')}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all ${
                activeTab === 'past'
                  ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white'
                  : 'glass-purple text-gray-300 hover:text-white'
              }`}
            >
              Past Events
            </motion.button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedEvent(event)}
                  className="glass-purple rounded-2xl overflow-hidden cursor-pointer border-2 border-purple-500/20 hover:border-purple-500/40 transition-all group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-400">
                        <FaCalendar className="mr-2 text-purple-400" />
                        <span>{new Date(event.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <FaMapMarkerAlt className="mr-2 text-purple-400" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4 line-clamp-2">{event.description}</p>

                    {activeTab === 'upcoming' && (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full btn-glow px-6 py-3 rounded-lg text-white font-semibold"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.href = event.registrationLink;
                        }}
                      >
                        Register Now
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-gray-400">No events found</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Events Section */}
      {activeTab === 'upcoming' && filteredEvents.length > 0 && (
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 gradient-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Don't Miss Out!
            </motion.h2>

            <div className="grid gap-8">
              {filteredEvents.slice(0, 2).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-purple rounded-2xl p-8 md:p-12"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                        {event.title}
                      </h3>
                      <p className="text-gray-300 mb-6 text-lg">{event.description}</p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-gray-400">
                          <FaCalendar className="mr-3 text-purple-400" size={20} />
                          <span className="text-lg">{new Date(event.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <FaMapMarkerAlt className="mr-3 text-purple-400" size={20} />
                          <span className="text-lg">{event.location}</span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-glow px-8 py-4 rounded-full text-white font-semibold text-lg"
                      >
                        Register Now
                      </motion.button>
                    </div>
                    <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-purple rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <h2 className="text-3xl font-bold gradient-text mb-4">
                {selectedEvent.title}
              </h2>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
                  <FaCalendar className="mr-3 text-purple-400" size={20} />
                  <span>{new Date(selectedEvent.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <FaMapMarkerAlt className="mr-3 text-purple-400" size={20} />
                  <span>{selectedEvent.location}</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 text-lg">{selectedEvent.description}</p>
              
              <div className="flex gap-4">
                {activeTab === 'upcoming' && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-glow px-8 py-3 rounded-full text-white font-semibold flex-1"
                  >
                    Register Now
                  </motion.button>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedEvent(null)}
                  className="glass-purple px-8 py-3 rounded-full text-white font-semibold"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;
