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
        <h1 className="text-4xl md:text-5xl font-bold text-[#6B4226] mb-4">
          Let’s Connect
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          At <strong>Curtains Furniture</strong>, we turn interiors into elegant, functional spaces. Whether it's a custom furniture project or a full interior consultation — we’re here to assist you.
        </p>
      </motion.div>

      <section className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="p-8 bg-[#F5F5DC] dark:bg-gray-900 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-[#6B4226] mb-6">Reach Us</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            <p>
              <strong>Address:</strong> Zone 26, Street 850, Building 34, Unit 17, Al Mansoura, Doha – Qatar
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:qatarwintrading@gmail.com"
                className="text-[#8B5A2B] hover:text-[#6B4226]"
              >
                qatarwintrading@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a
                href="tel:+97455760872"
                className="text-[#8B5A2B] hover:text-[#6B4226]"
              >
                +974 55 760 872
              </a>
            </p>
            <div>
              <strong>Working Hours:</strong><br />
              Sat–Thu: 8:00 AM – 1:00 PM & 3:30 PM – 10:00 PM<br />
              Friday: 3:30 PM – 10:00 PM
            </div>
            <p>
              <strong>We’re available for project consultations, showroom visits, and furniture design inquiries.</strong>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-6 text-2xl">
            <a href="tel:+97455760872" className="text-[#8B5A2B] hover:text-[#6B4226]">
              <FaPhoneAlt />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61573137238181&mibextid=ZbWKwL" target="_blank" rel="noreferrer" className="text-[#8B5A2B] hover:text-[#6B4226]">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/rokibwin?igsh=anU3ejd4dHFneDhi" target="_blank" rel="noreferrer" className="text-[#8B5A2B] hover:text-[#6B4226]">
              <FaInstagram />
            </a>
            <a href="https://wa.me/+97455760872" target="_blank" rel="noreferrer" className="text-[#8B5A2B] hover:text-[#6B4226]">
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
          <h2 className="text-2xl font-semibold text-[#6B4226] mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4226] bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
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
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4226] bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
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
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4226] bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#6B4226] text-white py-3 rounded-lg font-semibold hover:bg-[#8B5A2B] transition duration-300"
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
