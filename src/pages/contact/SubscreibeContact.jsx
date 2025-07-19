import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

const SubscribeContact = () => {
  const [activeTheme] = useThemeSwitcher();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_7b92lcx',
        'template_k6p49ij',
        e.target,
        'wqQwMjjepKRfJ6ah-'
      )
      .then(
        () => {
          setStatus('Thank you for contacting us. We will respond shortly.');
          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          setStatus('Something went wrong. Please try again later.');
        }
      );
  };

  return (
    <div className="container mx-auto py-16 px-4 max-w-6xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
          Let’s Connect
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          At <strong>F L M SUPER TRADING AND CONTRACTING</strong>, we deliver excellence in aluminium, gypsum, steel, printing, and furnishing services. Whether it's a residential or commercial project — we’re here to bring your vision to life.
        </p>
      </motion.div>

      <section className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="p-8 bg-emerald-50 dark:bg-gray-900 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-emerald-800 mb-6">Reach Us</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            <p>
              <strong>Company Name:</strong> F L M SUPER TRADING AND CONTRACTING
            </p>
            <p>
              <strong>Location:</strong> Mansoura, Doha
            </p>
            <p>
              <strong>Address:</strong> Mansoura, Doha, Qatar
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:info.flmtrading@gmail.com"
                className="text-emerald-700 hover:text-emerald-900"
              >
                info.flmtrading@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a
                href="tel:+97431602956"
                className="text-emerald-700 hover:text-emerald-900"
              >
                +974 3160 2956
              </a>
            </p>
            <div>
              <strong>Working Hours:</strong><br />
              Sat–Thu: 8:00 AM – 1:00 PM & 3:30 PM – 10:00 PM<br />
              Friday: 3:30 PM – 10:00 PM
            </div>
            <p>
              <strong>We specialize in:</strong><br />
              Aluminium Fabrication • Glass & Mirror Works • Gypsum Ceiling • Printing • Parking Shade • UPVC Windows & Doors • MS Welding • Furniture & Upholstery
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-6 text-2xl">
            <a href="tel:+97431602956" className="text-emerald-700 hover:text-emerald-900">
              <FaPhoneAlt />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61563249227531&mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noreferrer" className="text-emerald-700 hover:text-emerald-900">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/saadbinghanimfurniture?igsh=MWFrZGp2b21jeXpldA==" target="_blank" rel="noreferrer" className="text-emerald-700 hover:text-emerald-900">
              <FaInstagram />
            </a>
            <a href="https://wa.me/97431602956" target="_blank" rel="noreferrer" className="text-emerald-700 hover:text-emerald-900">
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-emerald-800 mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-800 text-white py-3 rounded-lg font-semibold hover:bg-emerald-900 transition duration-300"
            >
              Send Message
            </button>
          </form>

          {status && (
            <div className="text-center text-sm text-green-700 dark:text-green-400 mt-4">
              {status}
            </div>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default SubscribeContact;
