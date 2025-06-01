import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import React, { useState } from 'react';

import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';

const Contact = () => {
  const [activeTheme] = useThemeSwitcher();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  // Update form data state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission via EmailJS service
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7b92lcx',       // Your EmailJS Service ID
        'template_k6p49ij',      // Your EmailJS Template ID
        e.target,
        'wqQwMjjepKRfJ6ah-'     // Your EmailJS Public Key
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
    <div className="container mx-auto py-12 px-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-[#6B4226] mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 lg:px-18">
          At AL-FWZ Furniture Trading, we specialize in crafting custom furniture, expert upholstery, and interior design solutions. 
          Let us help you create spaces that perfectly reflect your style and meet your functional needs.
        </p>
      </motion.div>

      <section className="grid lg:grid-cols-2 gap-8">
        {/* Left: Map and Shop Images */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="lg:h-[800px] h-auto w-full space-y-4 rounded-lg overflow-hidden"
        >
          {/* Google Map Link with Image */}
          <div className="h-[350px] w-full rounded-lg overflow-hidden">
            <a
              href="https://www.google.com/maps/place/25%C2%B016'10.9%22N+51%C2%B032'24.2%22E/@25.2698486,51.5399093,19.75z/data=!4m4!3m3!8m2!3d25.2696943!4d51.5400557?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View our location on Google Maps"
            >
              <img
                src="https://8upload.com/image/67ac615fe0e96/Screenshot_4.png"
                alt="Google Map Location"
                className="w-full h-full object-cover rounded-lg"
              />
            </a>
          </div>

          {/* Shop Image */}
          <div className="h-[450px] w-full rounded-lg overflow-hidden">
            <a
              href="https://www.google.com/maps/place/25%C2%B016'10.9%22N+51%C2%B032'24.2%22E/@25.2698486,51.5399093,19.75z/data=!4m4!3m3!8m2!3d25.2696943!4d51.5400557?entry=ttu&g_ep=EgoyMDIwNS4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View our shop location on Google Maps"
            >
              <img
                src="https://8upload.com/image/67ac615fba98c/WhatsApp_Image_2025-02-09_at_22.11.33_d335a3e9.jpg"
                alt="Shop Interior"
                className="w-full h-full object-contain rounded-lg"
              />
            </a>
          </div>
        </motion.div>

        {/* Right: Contact Details and Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-between"
        >
          {/* Contact Information */}
          <h2 className="text-2xl font-semibold text-[#6B4226] mb-4">Contact Information</h2>
          <div className="mb-6 text-gray-700">
            <p className="mb-2">
              <strong>Location:</strong> 26 Zone, 850 Al Mansoura Street, Building 34, Unit 17
            </p>
            <p className="mb-2">
              <strong>Email:</strong>{' '}
              <a
                href="mailto:qatarwintrading@gmail.com"
                className="text-[#8B5A2B] hover:text-[#6B4226]"
              >
                qatarwintrading@gmail.com
              </a>
            </p>
            <p className="mb-2">
              <strong>Phone:</strong>{' '}
              <a href="tel:+97455760872" className="text-[#8B5A2B] hover:text-[#6B4226]">
                +974 5576 0872
              </a>
            </p>
            <p className="mb-2">
              <strong>Business Hours:</strong> <br />
              Saturday - Thursday: 8:00 AM - 1:00 PM & 3:30 PM - 10:00 PM <br />
              Friday: 3:30 PM - 10:00 PM
            </p>
            <p className="mb-4 font-semibold">Available for consultations and project inquiries.</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6 my-6">
            <a
              href="tel:+97455760872"
              className="text-[#8B5A2B] hover:text-[#6B4226]"
              aria-label="Call us"
            >
              <FaPhoneAlt size={32} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61573137238181&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B5A2B] hover:text-[#6B4226]"
              aria-label="Facebook"
            >
              <FaFacebook size={32} />
            </a>
            <a
              href="https://www.instagram.com/rokibwin?igsh=anU3ejd4dHFneDhi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B5A2B] hover:text-[#6B4226]"
              aria-label="Instagram"
            >
              <FaInstagram size={32} />
            </a>
            <a
              href="https://wa.me/+97455760872"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B5A2B] hover:text-[#6B4226]"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={32} />
            </a>
          </div>

          {/* Contact Form Intro */}
          <p className="text-gray-600 mb-4">
            Please fill out the form below. Our team will respond promptly to your inquiry.
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="name" className="text-sm text-gray-600 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4226]"
                required
                aria-required="true"
                aria-describedby="nameHelp"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm text-gray-600 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4226]"
                required
                aria-required="true"
                aria-describedby="emailHelp"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm text-gray-600 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4226]"
                rows="4"
                required
                aria-required="true"
                aria-describedby="messageHelp"
              />
            </div>

            <button
              type="submit"
              className={`btn-hero w-full bg-[#6B4226] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#8B5A2B] transition duration-300 ${
                activeTheme === 'dark' ? 'dark-mode-text' : ''
              }`}
              aria-label="Send message"
            >
              Send Message
            </button>
          </form>

          {/* Status Message */}
          {status && <p className="text-center text-gray-600 mt-4">{status}</p>}
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
