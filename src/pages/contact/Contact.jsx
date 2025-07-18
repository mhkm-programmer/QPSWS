import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';

const Contact = () => {
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
      .then(() => {
        setStatus('Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus('Failed to send the message. Please try again later.');
      });
  };

  return (
    <div className="container mx-auto py-12 px-4 lg:px-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-[#0A3C26] mb-3">
          F L M SUPER TRADING AND CONTRACTING
        </h1>
        <h2 className="text-xl font-medium text-[#3C6E47] mb-6">
          اف ال ام سوبر ترادينغ اند كونتراكتينغ
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 lg:px-18 leading-relaxed">
          CR No. 212381 | Rokcha No. 289601
          <br />
          Comprehensive Solutions in Aluminium Fabrication, Glass & Mirror Works, Gypsum Partition & Ceiling, Printing, Parking Shade, UPVC Doors & Windows, MS Welding & Steel Fabrication, Furniture & Upholstery.
        </p>
      </motion.div>

      <section className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col justify-between space-y-6 h-full"
        >
          <div className="h-[300px] sm:h-[400px] lg:h-[600px] w-full rounded-lg overflow-hidden shadow-lg">
            <a
              href="https://www.google.com/maps/place/Zone+26,+Street+850,+Building+45,+Flat+2,+Apartment+No+5,+Doha,+Qatar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Map Location"
            >
              <img
                src="https://8upload.com/image/67ac615fe0e96/Screenshot_4.png"
                alt="F L M Super Trading and Contracting Location Map"
                className="w-full h-full object-cover"
              />
            </a>
          </div>

          <div className="bg-[#0A3C26] text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
            <p><strong>Phone:</strong> <a href="tel:+97431602956" className="underline hover:text-[#70B77E]">+974 3160 2956</a></p>
            <p><strong>Location:</strong> Zone 26, Street 850, Building 45, Flat 2, Apartment No 5, Doha, Qatar</p>
            <p><strong>Email:</strong> <a href="mailto:info@flmtrading.qa" className="underline hover:text-[#70B77E]">info@flmtrading.qa</a></p>
            <div className="flex gap-6 mt-4">
              <a
                href="https://www.facebook.com/yourfacebookpage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[#70B77E]"
              >
                <FaFacebook size={28} />
              </a>
              <a
                href="https://www.instagram.com/yourinstagramprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#70B77E]"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://wa.me/97431602956"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-[#70B77E]"
              >
                <FaWhatsapp size={28} />
              </a>
              <a
                href="tel:+97431602956"
                aria-label="Phone"
                className="hover:text-[#70B77E]"
              >
                <FaPhoneAlt size={28} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-8 rounded-xl shadow-xl flex flex-col justify-between"
        >
          <h2 className="text-3xl font-semibold text-[#0A3C26] mb-6">Get In Touch</h2>
          <p className="mb-6 text-gray-700">
            Fill out the form below for inquiries, quotes, or site visits. We’ll respond promptly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A3C26]"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A3C26]"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A3C26]"
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full bg-[#0A3C26] text-white py-3 rounded-md font-semibold hover:bg-[#2D6A4F] transition-colors duration-300 ${
                activeTheme === 'dark' ? 'dark-mode-text' : ''
              }`}
            >
              Send Message
            </button>
          </form>

          {status && (
            <p className="mt-5 text-center text-gray-600 font-medium" role="alert">
              {status}
            </p>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
