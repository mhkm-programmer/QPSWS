import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SubscribeContact = () => {
  const [activeTheme] = useThemeSwitcher();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.email.trim()) errs.email = 'Email is required.';
    else if (!EMAIL_REGEX.test(formData.email.trim())) errs.email = 'Please enter a valid email.';
    if (!formData.message.trim()) errs.message = 'Message cannot be empty.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
    setStatus(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSending) return;
    const trimmed = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };
    setFormData(trimmed); // normalize

    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      setStatus('Please fix the highlighted errors.'); 
      return;
    }

    setIsSending(true);
    setStatus(null);

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
          setErrors({});
        },
        (err) => {
          console.error('EmailJS error:', err);
          setStatus('Something went wrong while sending. Please try again later.');
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="container mx-auto py-16 px-4 max-w-6xl">
      {/* Header */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-2">
          Let’s Connect with F L M SUPER TRADING AND CONTRACTING
        </h1>
        <p className="text-sm italic text-gray-500 mb-4">
          اف ال ام سوبر ترادينغ اند كونتراكتينغ
        </p>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          We provide specialist services in Aluminium Fabrication & Installation, Glass & Mirror Works, Gypsum Partition & Ceiling, Printing, Parking Shade, UPVC Doors & Windows, MS Welding & Steel Fabrication, and Furniture & Upholstery. Whether you’re planning a commercial or residential project across Qatar, our team is ready to assist with precision and professionalism.
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
              <strong>Arabic Name:</strong> اف ال ام سوبر ترادينغ اند كونتراكتينغ
            </p>
            <p>
              <strong>Location:</strong> Zone 26, Street 850, Building 45, Flat 2, Apartment No 5, Doha, Qatar
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:mobarakhossain23456@gmail.com"
                className="text-emerald-700 hover:text-emerald-900 underline"
              >
                mobarakhossain23456@gmail.com
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
            <p>
              <strong>CR No:</strong> 212381
            </p>
            <p>
              <strong>Rokcha No:</strong> 289601
            </p>
            <div>
              <strong>Business Hours:</strong><br />
              Saturday – Thursday: 8:00 AM – 1:00 PM & 3:30 PM – 10:00 PM<br />
              Friday: 3:30 PM – 10:00 PM
            </div>
            <p className="font-semibold">
              Full-service solutions across: Aluminium, Glass, Gypsum, Printing, Parking Shade, UPVC, MS Welding, Furniture & Upholstery.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-6 text-2xl">
            <a href="https://wa.me/97431602956" target="_blank" rel="noreferrer" className="text-emerald-700 hover:text-emerald-900" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="tel:+97431602956" className="text-emerald-700 hover:text-emerald-900" aria-label="Phone">
              <FaPhoneAlt />
            </a>
            <a href="https://www.facebook.com/share/1Ez4QhtfFn/" target="_blank" rel="noreferrer" className="text-emerald-700 hover:text-emerald-900" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/mobarakmunna/profilecard/?igsh=MXYwMXdhdDhqNnRjOQ==" target="_blank" rel="noreferrer" className="text-emerald-700 hover:text-emerald-900" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="mailto:mobarakhossain23456@gmail.com" className="text-emerald-700 hover:text-emerald-900" aria-label="Email">
              <FaEnvelope />
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
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 ${
                  errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
              />
              {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 ${
                  errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
              />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 ${
                  errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
              />
              {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${
                isSending
                  ? 'bg-gray-400 cursor-not-allowed text-white'
                  : 'bg-emerald-800 hover:bg-emerald-900 text-white'
              }`}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {status && (
            <div className="text-center text-sm mt-4">
              <span
                className={
                  status.toLowerCase().includes('thank')
                    ? 'text-green-700 dark:text-green-400'
                    : 'text-red-600'
                }
              >
                {status}
              </span>
            </div>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default SubscribeContact;
