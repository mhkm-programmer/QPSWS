import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import React, { useState } from 'react';

import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

const SubscribeContact = () => {
  const [activeTheme] = useThemeSwitcher();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7b92lcx', // Replace with your service ID
        'template_k6p49ij', // Replace with your template ID
        e.target, // Pass the form as the target
        'wqQwMjjepKRfJ6ah-' // Replace with your user ID (Public Key)
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-6xl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-[#6B4226] mb-4">Contact Us</h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          At Al-FWZ Furniture Trading, we specialize in crafting custom furniture, offering expert upholstery, and providing interior design solutions. Let’s create spaces that reflect your style and functionality needs.
        </p>
      </motion.div>

      <section className="grid md:grid-cols-2 justify-center gap-8">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="p-6 bg-[#F5F5DC] rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-[#6B4226] mb-4">Contact Information</h2>
          {/* <div className="text-gray-700 space-y-3">
            <p><strong>Location:</strong> 123 Woodland Ave, Suite 456, Springfield, IL, USA</p>
            <p><strong>Email:</strong> <a href="mailto:qatarwintrading@gmail.com" className="text-[#8B5A2B] hover:underline">info@luxefurnish.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+97455760872" className="text-[#8B5A2B] hover:underline">+97455760872</a></p>
            <p><strong>Business Hours:</strong> Mon - Fri: 9:00 AM - 6:00 PM</p>
          </div> */}
          <div className="mb-6 text-gray-700 space-y-3">
    <p className="mb-2">
      <strong>Location:</strong> 26 Zone, 850 Al Mansoura Street, 34 Building, 17 Unit
    </p>
    <p className="mb-2">
      <strong>Email:</strong>{' '}
      <a href="mailto:qatarwintrading@gmail.com" className="text-[#8B5A2B] hover:text-[#6B4226]">
        qatarwintrading@gmail.com
      </a>
    </p>
    <p className="mb-2">
      <strong>Phone:</strong>{' '}
      <a href="tel:+97455760872" className="text-[#8B5A2B] hover:text-[#6B4226]">
        +97455760872
      </a>
    </p>
    <p className="mb-2">
      <span><strong>Business Hours:</strong> Saturday - Thursday: 8:00 AM - 1:00 PM & 3:30 PM - 10:00 PM</span><br />
      <span><strong>Business Hours:</strong> Friday: 3:30 PM - 10:00 PM</span>
    </p>
    <p className="mb-4">
      <strong>Available for consultations and project inquiries.</strong>
    </p>
  </div>
          <div className="flex gap-6 mt-6 text-xl">
            <a href="tel:+97455760872" className="text-[#8B5A2B] hover:text-[#6B4226]"><FaPhoneAlt /></a>
            <a href="https://www.facebook.com/profile.php?id=61573137238181&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-[#8B5A2B] hover:text-[#6B4226]"><FaFacebook /></a>
            <a href="https://www.instagram.com/rokibwin?igsh=anU3ejd4dHFneDhi" target="_blank" rel="noopener noreferrer" className="text-[#8B5A2B] hover:text-[#6B4226]"><FaInstagram /></a>
            <a href="https://wa.me/+97455760872" target="_blank" rel="noopener noreferrer" className="text-[#8B5A2B] hover:text-[#6B4226]"><FaWhatsapp /></a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-[#6B4226] mb-4">Send Us a Message</h2>
          <p className="text-gray-600 mb-4">Fill out the form below, and we’ll get back to you soon.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-[#6B4226] focus:border-[#6B4226]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-[#6B4226] focus:border-[#6B4226]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-[#6B4226] focus:border-[#6B4226]"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#6B4226] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d35400] transition-all duration-300"
            >
              Send Message
            </button>
          </form>
          {status && <p className="text-center text-gray-600 mt-4">{status}</p>}
        </motion.div>
      </section>
    </div>
  );
};

export default SubscribeContact;