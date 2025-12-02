import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLaptopCode, FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa';
import { SiReact, SiPython, SiJavascript, SiTypescript, SiNodedotjs, SiDocker } from 'react-icons/si';

const About = () => {
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [techRef, techInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const values = [
    {
      icon: <FaLaptopCode className="text-5xl" />,
      title: 'Learn by Doing',
      description: 'Hands-on projects and real-world applications to solidify your skills',
    },
    {
      icon: <FaUsers className="text-5xl" />,
      title: 'Community First',
      description: 'Build lasting connections with fellow coders and industry professionals',
    },
    {
      icon: <FaLightbulb className="text-5xl" />,
      title: 'Innovation',
      description: 'Encourage creative thinking and cutting-edge solutions to complex problems',
    },
    {
      icon: <FaRocket className="text-5xl" />,
      title: 'Growth Mindset',
      description: 'Continuous learning and improvement in an ever-evolving tech landscape',
    },
  ];

  const techStack = [
    { icon: <SiReact />, name: 'React', color: '#61DAFB' },
    { icon: <SiPython />, name: 'Python', color: '#3776AB' },
    { icon: <SiJavascript />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
    { icon: <SiNodedotjs />, name: 'Node.js', color: '#339933' },
    { icon: <SiDocker />, name: 'Docker', color: '#2496ED' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-violet-900/20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              About Cryptic Coders
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We are a community of passionate developers, innovators, and problem-solvers
              dedicated to fostering a culture of learning and collaboration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="glass-purple p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold gradient-text mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To empower students with the technical skills, creative mindset, and collaborative
                spirit needed to thrive in the ever-evolving world of technology. We believe in
                learning by doing, sharing knowledge, and building a supportive community where
                everyone can grow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="glass-purple p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold gradient-text mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To become the leading coding club that shapes the next generation of tech leaders
                and innovators. We envision a future where our members not only excel in their
                technical abilities but also contribute meaningfully to solving real-world problems
                through technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-purple p-6 rounded-2xl text-center"
              >
                <div className="text-purple-400 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section ref={techRef} className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Technologies We Work With
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={techInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="glass-purple p-6 rounded-2xl flex flex-col items-center justify-center group"
              >
                <div
                  className="text-6xl mb-3 transition-all duration-300"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </div>
                <p className="text-gray-300 font-semibold">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-purple p-12 rounded-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              Ready to Join Us?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Become part of our growing community and start your journey towards becoming a better developer.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-glow px-10 py-4 rounded-full text-white font-semibold text-lg"
            >
              Join Cryptic Coders
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
