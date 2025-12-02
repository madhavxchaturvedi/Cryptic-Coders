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

        <div className="mt-8 pt-8 border-t border-purple-500/20 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Cryptic Coders. All rights reserved.</p>
          <p className="mt-2 text-sm">Let's collaborate, learn, and innovate together! 🚀</p>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;
