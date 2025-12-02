import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaLinkedin size={24} />, href: 'https://www.linkedin.com/in/cryptic-coder-77a856349', label: 'LinkedIn' },
    { icon: <FaInstagram size={24} />, href: 'https://www.instagram.com/crypticcoders?utm_source=qr&igsh=OTBidHM0c2tva24z', label: 'Instagram' },
    { icon: <FaEnvelope size={24} />, href: 'mailto:crypticcoder2025@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section with Logo */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/5 flex items-center justify-center border border-purple-500/20">
                <img 
                  src="/src/assets/logos/club-logo.png" 
                  alt="Cryptic Coders" 
                  className="w-full h-full object-cover scale-125"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span class="text-xl font-bold gradient-text">&lt;/&gt;</span>';
                  }}
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold gradient-text">Cryptic Coders</h3>
            </div>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Empowering students through code, collaboration, and innovation at F.E.T. Agra College.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Team', 'Events', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start space-x-2 justify-center md:justify-start">
                <FaEnvelope className="text-purple-400 mt-1 flex-shrink-0" />
                <a href="mailto:crypticcoder2025@gmail.com" className="hover:text-purple-400 transition-colors break-all">
                  crypticcoder2025@gmail.com
                </a>
              </li>
              <li className="leading-relaxed">
                52P3+HMV, Moti Katra Road, opposite TB Hospital, Raja ki Mandi, Mantola, Agra, Uttar Pradesh 282002
              </li>
              <li>
                Phone: <a href="tel:+919536556661" className="hover:text-purple-400 transition-colors">095365 56661</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-purple-500/20 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Cryptic Coders. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">Let's collaborate, learn, and innovate together! 🚀</p>
          
          {/* Contributors Section */}
          <div className="mt-6 pt-6 border-t border-purple-500/10">
            <p className="text-sm text-gray-500 mb-3">Website Developed & Designed by</p>
            <div className="flex flex-col items-center space-y-2">
              <p className="text-purple-400 font-medium">Madhav Chaturvedi</p>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://github.com/madhavxchaturvedi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/madhavxchaturvedi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;
