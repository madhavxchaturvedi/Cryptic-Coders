import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaTrophy, FaRocket } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    // Animate gradient background
    const tl = gsap.timeline({ repeat: -1 });
    tl.to('.gradient-bg', {
      backgroundPosition: '200% 50%',
      duration: 20,
      ease: 'none',
    });
  }, []);

  const stats = [
    { icon: <FaUsers />, value: '500+', label: 'Active Members' },
    { icon: <FaCode />, value: '100+', label: 'Projects Built' },
    { icon: <FaTrophy />, value: '50+', label: 'Competitions Won' },
    { icon: <FaRocket />, value: '30+', label: 'Events Hosted' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
        {/* Dark base layer */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-950 to-black" />

        {/* Animated gradient background - more subtle */}
        <div
          className="gradient-bg absolute inset-0 opacity-15"
          style={{
            background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 25%, #8b5cf6 50%, #7c3aed 75%, #6366f1 100%)',
            backgroundSize: '400% 400%',
          }}
        />

        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(at 40% 20%, rgba(124, 58, 237, 0.3) 0px, transparent 50%),
                           radial-gradient(at 80% 0%, rgba(99, 102, 241, 0.2) 0px, transparent 50%),
                           radial-gradient(at 0% 50%, rgba(139, 92, 246, 0.2) 0px, transparent 50%)`,
        }} />

        {/* Grid overlay - more subtle */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }} />

        {/* Large glowing orbs - enhanced with mouse tracking */}
        <motion.div
          className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full opacity-30"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(109, 40, 217, 0.4) 0%, rgba(109, 40, 217, 0.1) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, rgba(124, 58, 237, 0.1) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating particles with enhanced animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => {
            const colors = ['#8b5cf6', '#7c3aed', '#6d28d9', '#a78bfa', '#c4b5fd'];
            const size = Math.random() * 3 + 1.5;
            return (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  background: colors[i % colors.length],
                  boxShadow: `0 0 ${size * 2}px ${colors[i % colors.length]}`,
                }}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 6 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'easeInOut',
                }}
              />
            );
          })}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: 0,
            }}
            transition={{ 
              duration: 0.8,
            }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            >
              <motion.span 
                className="inline-block bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent" 
                style={{
                  textShadow: '0 0 60px rgba(139, 92, 246, 0.5), 0 0 100px rgba(124, 58, 237, 0.3)',
                  backgroundSize: '200% auto',
                  animation: 'gradient 3s ease infinite',
                }}
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                Cryptic Coders
              </motion.span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-3xl lg:text-4xl mb-8 font-light h-14 md:h-16 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent font-medium">
                <TypewriterText
                  texts={[
                    'Code. Collaborate. Create.',
                    'Building Tomorrow\'s Innovators',
                    'Where Ideas Meet Execution',
                    'Transform Ideas Into Reality',
                  ]}
                />
              </span>
            </motion.div>

            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Join our vibrant community of <span className="text-violet-400 font-semibold">passionate coders</span>, 
              <span className="text-purple-400 font-semibold"> problem solvers</span>, and 
              <span className="text-indigo-400 font-semibold"> tech enthusiasts</span>.
              <br />
              <span className="text-gray-400 text-sm md:text-base mt-2 block">Together, we learn, build, and shape the future.</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ 
                    scale: 1.08, 
                    boxShadow: '0 20px 60px rgba(124, 58, 237, 0.5), 0 0 80px rgba(139, 92, 246, 0.4)',
                    y: -5,
                  }}
                  whileTap={{ scale: 0.95, y: 0 }}
                  className="px-8 py-4 rounded-full text-white font-bold text-base w-full sm:w-auto relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                    boxShadow: '0 10px 40px rgba(124, 58, 237, 0.3), 0 0 40px rgba(139, 92, 246, 0.2)',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Join Us Now 
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 opacity-0 group-hover:opacity-100" 
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </a>
              <a href="/events" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ 
                    scale: 1.08, 
                    backgroundColor: 'rgba(139, 92, 246, 0.15)',
                    borderColor: 'rgba(167, 139, 250, 0.8)',
                    y: -5,
                  }}
                  whileTap={{ scale: 0.95, y: 0 }}
                  className="px-8 py-4 rounded-full text-white font-bold text-base border-2 border-violet-500/50 w-full sm:w-auto backdrop-blur-xl bg-violet-500/5 transition-all duration-300"
                  style={{
                    boxShadow: '0 10px 30px rgba(139, 92, 246, 0.2)',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  Explore Events
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Modern scroll indicator - bottom right corner */}
        <motion.div
          className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            className="flex flex-col items-center gap-2 group cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-[10px] text-violet-400/50 uppercase tracking-[0.2em] font-semibold group-hover:text-violet-400 transition-colors duration-300">Scroll</span>
            <div className="relative">
              <motion.div
                className="w-6 h-10 rounded-full border-2 border-violet-400/30 group-hover:border-violet-400/60 transition-colors duration-300 flex items-start justify-center pt-2"
                animate={{ 
                  boxShadow: [
                    '0 0 0px rgba(139, 92, 246, 0)',
                    '0 0 20px rgba(139, 92, 246, 0.3)',
                    '0 0 0px rgba(139, 92, 246, 0)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="w-1 h-1.5 rounded-full bg-violet-400/80"
                  animate={{ 
                    y: [0, 12, 0],
                    opacity: [0.8, 0.2, 0.8],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
            </div>
          </motion.button>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.4) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-gray-400 text-lg">Building a thriving community of innovators</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={statsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  delay: index * 0.15,
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                className="relative group"
              >
                {/* Animated gradient border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-75 blur-sm transition-opacity duration-500" />
                
                <div className="relative bg-gray-900/90 backdrop-blur-xl border border-violet-500/20 group-hover:border-violet-500/40 p-8 rounded-2xl text-center transition-all duration-300">
                  <motion.div 
                    className="text-5xl text-violet-400 mb-4 flex justify-center"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {statsInView && <CountUp end={parseInt(stat.value)} />}
                    {stat.value.includes('+') && '+'}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What We Offer
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Workshops & Bootcamps',
                description: 'Hands-on learning sessions covering latest technologies and frameworks',
                icon: '🎓',
              },
              {
                title: 'Hackathons',
                description: '24-hour coding marathons to build innovative solutions',
                icon: '💻',
              },
              {
                title: 'Networking',
                description: 'Connect with industry professionals and fellow coding enthusiasts',
                icon: '🤝',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass-purple p-8 rounded-2xl card-hover"
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Typewriter component
const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentIndex];

        if (!isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length + 1));

          if (currentText === fullText) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setCurrentText(fullText.substring(0, currentText.length - 1));

          if (currentText === '') {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <span>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// CountUp component
const CountUp = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count}</>;
};

export default Home;
