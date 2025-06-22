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
        <h1 className="text-4xl font-semibold text-[#6B4226] mb-4">Contact Curtains Furniture</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 lg:px-18">
          At Curtains Furniture, we specialize in made-to-measure curtains, elegant blinds, and interior window solutions. Contact us for design, consultation, or installation anywhere in Qatar.
        </p>
      </motion.div>

      <section className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col justify-between space-y-6 h-full"
        >
          <div className="h-[300px] sm:h-[400px] lg:h-[600px] w-full rounded-lg overflow-hidden shadow-md">
            <a
              href="https://www.google.com/maps/place/25%C2%B016'10.9%22N+51%C2%B032'24.2%22E/@25.2698486,51.5399093,19.75z/data=!4m4!3m3!8m2!3d25.2696943!4d51.5400557?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Map"
            >
              <img
                src="https://8upload.com/image/67ac615fe0e96/Screenshot_4.png"
                alt="Curtains Furniture Map"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-6 sm:p-8 rounded-xl shadow-lg flex flex-col justify-between lg:min-h-[600px]"
        >
          <h2 className="text-2xl font-semibold text-[#6B4226] mb-4">Get in Touch</h2>
          <div className="mb-6 text-gray-700 space-y-2">
            <p><strong>Location:</strong> Mansoura, Doha</p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:info.curtainsfurniture@gmail.com" className="text-[#8B5A2B] hover:text-[#6B4226]">
                info.curtainsfurniture@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone & WhatsApp:</strong>{' '}
              <a href="tel:+97466280037" className="text-[#8B5A2B] hover:text-[#6B4226]">
                +974 6628 0037
              </a>
            </p>
            <p>
              <strong>Business Hours:</strong><br />
              Saturday - Thursday: 8:00 AM – 1:00 PM & 3:30 PM – 10:00 PM<br />
              Friday: 3:30 PM – 10:00 PM
            </p>
            <p className="font-semibold">Free consultations available across Qatar.</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6 my-6">
            <a href="tel:+97466280037" className="text-[#8B5A2B] hover:text-[#6B4226]" aria-label="Call us">
              <FaPhoneAlt size={32} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61563249227531&mibextid=rS40aB7S9Ucbxw6v"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B5A2B] hover:text-[#6B4226]"
              aria-label="Facebook"
            >
              <FaFacebook size={32} />
            </a>
            <a
              href="https://www.instagram.com/saadbinghanimfurniture?igsh=MWFrZGp2b21jeXpldA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B5A2B] hover:text-[#6B4226]"
              aria-label="Instagram"
            >
              <FaInstagram size={32} />
            </a>
            <a
              href="https://wa.me/97466280037"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B5A2B] hover:text-[#6B4226]"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={32} />
            </a>
          </div>

          <p className="text-gray-600 mb-4">
            Fill out the form below and we’ll get back to you shortly.
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
              />
            </div>

            <button
              type="submit"
              className={`w-full bg-[#6B4226] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#8B5A2B] transition duration-300 ${
                activeTheme === 'dark' ? 'dark-mode-text' : ''
              }`}
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

export default Contact;
