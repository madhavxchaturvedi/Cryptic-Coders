import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaSearch } from 'react-icons/fa';
import { teamMembers, roles } from '../data/team';

const Team = () => {
  const [selectedRole, setSelectedRole] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const filteredMembers = teamMembers.filter((member) => {
    const matchesRole = selectedRole === 'All' || member.role === selectedRole;
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesSearch;
  });

  const toggleFlip = (id: number) => {
    setFlippedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

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
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The passionate individuals driving innovation and fostering a culture of learning.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 glass-purple rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Role Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {roles.map((role) => (
                <motion.button
                  key={role}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedRole(role)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedRole === role
                      ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white'
                      : 'glass-purple text-gray-300 hover:text-white'
                  }`}
                >
                  {role}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedRole + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  style={{ perspective: '1000px' }}
                >
                  <div
                    className="relative h-[400px] cursor-pointer"
                    onClick={() => toggleFlip(member.id)}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Card */}
                    <motion.div
                      className="absolute w-full h-full"
                      animate={{
                        rotateY: flippedCards.includes(member.id) ? 180 : 0,
                      }}
                      transition={{ duration: 0.6 }}
                      style={{
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                      }}
                    >
                      {/* Front */}
                      <div className="glass-purple rounded-2xl overflow-hidden h-full border-2 border-purple-500/20 hover:border-purple-500/40 transition-colors">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                        </div>
                        <div className="p-6">
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {member.name}
                          </h3>
                          <p className="text-purple-400 font-semibold mb-4">
                            {member.role}
                          </p>
                          <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                          <div className="flex flex-wrap gap-2">
                            {member.skills.slice(0, 3).map((skill, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Back */}
                    <motion.div
                      className="absolute w-full h-full"
                      animate={{
                        rotateY: flippedCards.includes(member.id) ? 0 : -180,
                      }}
                      transition={{ duration: 0.6 }}
                      style={{
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      <div className="glass-purple rounded-2xl h-full border-2 border-purple-500/20 p-6 flex flex-col justify-center items-center">
                        <h3 className="text-2xl font-bold gradient-text mb-6">
                          Connect with {member.name.split(' ')[0]}
                        </h3>
                        <div className="flex gap-6 mb-8">
                          {member.social.github && (
                            <motion.a
                              href={member.social.github}
                              whileHover={{ scale: 1.2, y: -5 }}
                              className="text-4xl text-gray-400 hover:text-purple-400 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FaGithub />
                            </motion.a>
                          )}
                          {member.social.linkedin && (
                            <motion.a
                              href={member.social.linkedin}
                              whileHover={{ scale: 1.2, y: -5 }}
                              className="text-4xl text-gray-400 hover:text-purple-400 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FaLinkedin />
                            </motion.a>
                          )}
                          {member.social.twitter && (
                            <motion.a
                              href={member.social.twitter}
                              whileHover={{ scale: 1.2, y: -5 }}
                              className="text-4xl text-gray-400 hover:text-purple-400 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FaTwitter />
                            </motion.a>
                          )}
                        </div>
                        <div className="text-center">
                          <h4 className="text-white font-semibold mb-3">Skills</h4>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {member.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm mt-6 text-center">
                          Click to flip back
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredMembers.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-gray-400">No team members found</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Team;
