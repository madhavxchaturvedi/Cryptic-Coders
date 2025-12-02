import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast, { Toaster } from 'react-hot-toast';
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log('Form data:', data);
    toast.success('Message sent successfully! We\'ll get back to you soon.', {
      duration: 4000,
      position: 'top-center',
      style: {
        background: '#7e22ce',
        color: '#fff',
      },
      iconTheme: {
        primary: '#a855f7',
        secondary: '#fff',
      },
    });
    
    reset();
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: <FaLinkedin size={28} />, href: 'https://www.linkedin.com/in/cryptic-coder-77a856349', label: 'LinkedIn', color: '#0077b5' },
    { icon: <FaInstagram size={28} />, href: 'https://www.instagram.com/crypticcoders?utm_source=qr&igsh=OTBidHM0c2tva24z', label: 'Instagram', color: '#e4405f' },
    { icon: <FaEnvelope size={28} />, href: 'mailto:crypticcoder2025@gmail.com', label: 'Email', color: '#a855f7' },
  ];

  return (
    <div className="min-h-screen pt-20">
      <Toaster />
      
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
              Get in Touch
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Have questions? Want to join us? We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-purple p-8 rounded-2xl">
                <h2 className="text-3xl font-bold gradient-text mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-semibold">Name</label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      {...register('name')}
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800/50 border-2 border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-all"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-semibold">Email</label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      {...register('email')}
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800/50 border-2 border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-all"
                      placeholder="your.email@gmail.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-semibold">Subject</label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      {...register('subject')}
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800/50 border-2 border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-all"
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-semibold">Message</label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      {...register('message')}
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800/50 border-2 border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-all resize-none"
                      placeholder="Tell us what you're thinking..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-glow px-8 py-4 rounded-lg text-white font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="glass-purple p-8 rounded-2xl">
                <h2 className="text-3xl font-bold gradient-text mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 bg-purple-500/20 rounded-lg">
                      <FaEnvelope className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <a href="mailto:crypticcoder2025@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                        crypticcoder2025@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 bg-purple-500/20 rounded-lg">
                      <FaPhone className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <a href="tel:+919536556661" className="text-gray-400 hover:text-purple-400 transition-colors">
                        095365 56661
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 bg-purple-500/20 rounded-lg">
                      <FaMapMarkerAlt className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Location</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        52P3+HMV, Moti Katra Road, opposite TB Hospital,<br />
                        Raja ki Mandi, Mantola, Agra,<br />
                        Uttar Pradesh 282002
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-purple p-8 rounded-2xl">
                <h2 className="text-2xl font-bold gradient-text mb-6">Connect With Us</h2>
                
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 bg-purple-500/20 rounded-xl text-gray-400 hover:text-purple-400 transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
