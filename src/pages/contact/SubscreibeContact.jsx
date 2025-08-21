import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaYoutube, FaPinterest } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SubscribeContact = () => {
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
        'service_7b92lcx', // replace with your service ID
        'template_k6p49ij', // replace with your template ID
        e.target,
        'wqQwMjjepKRfJ6ah-' // replace with your public key
      )
      .then(() => {
        setStatus('✅ Thank you! Your message has been sent.');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setStatus('❌ Something went wrong. Please try again.');
      })
      .finally(() => setIsSending(false));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 font-sans text-gray-800">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-3">
          Doha Plumbing Service
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Providing expert <span className="font-semibold text-teal-700">Plumber</span> services across Doha with reliability and professionalism.
        </p>
      </div>

      <section className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="p-8 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">Reach Us</h2>
          <div className="space-y-4 text-gray-700 text-base">
            <p><strong>Service:</strong> Plumber</p>
            <p><strong>Location:</strong> Zone 26, Street 938, Building 12, Doha, Qatar</p>
            <p><strong>Phone:</strong> <a href="tel:+97431394550" className="text-blue-800 hover:underline">+974 3139 4550</a></p>
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/97431394550" target="_blank" rel="noreferrer" className="text-green-600 hover:underline">Chat Now</a></p>
            <p><strong>Email:</strong> <a href="mailto:emergencyplumber39@gmail.com" className="text-blue-800 hover:underline">info.plumber360@gmail.com</a></p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 mt-6 text-2xl text-blue-800">
            <a href="https://www.facebook.com/plumbingelectricdoha" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com/plumbing9335/#" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/@MaintenanceServicePlumberDoha" target="_blank" rel="noreferrer"><FaYoutube /></a>
            <a href="https://www.pinterest.com/plumbingelectricdoha/" target="_blank" rel="noreferrer"><FaPinterest /></a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-3 rounded-lg font-semibold text-white transition duration-300 ${
                isSending ? 'bg-gray-400 cursor-not-allowed' : 'bg-teal-700 hover:bg-teal-800'
              }`}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {status && (
            <div className="text-center mt-4">
              <span className={status.includes('✅') ? 'text-green-700' : 'text-red-600'}>
                {status}
              </span>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SubscribeContact;
