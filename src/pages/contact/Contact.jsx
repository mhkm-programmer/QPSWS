import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import PageTitle from "../reusable/PageTitle";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.email.trim()) errs.email = "Email is required.";
    else if (!EMAIL_REGEX.test(formData.email.trim())) errs.email = "Invalid email address.";
    if (!formData.message.trim()) errs.message = "Message cannot be empty.";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
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
    setFormData(trimmed);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      setStatus("Please fix the errors before submitting.");
      return;
    }

    setIsSending(true);
    setStatus(null);

    emailjs
      .sendForm("service_7b92lcx", "template_k6p49ij", e.target, "wqQwMjjepKRfJ6ah-")
      .then(
        () => {
          setStatus("✅ Your message has been sent successfully.");
          setFormData({ name: "", email: "", message: "" });
          setErrors({});
        },
        (err) => {
          console.error("EmailJS error:", err);
          setStatus("❌ Failed to send the message. Please try again later.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <div className="container mx-auto py-12 px-4 lg:px-8 font-sans">
      <PageTitle title="Doha Plumbing Service | Contact" />

      {/* Header */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-2">
          Doha Plumbing Service
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Professional <span className="font-semibold text-teal-700">Plumber</span> services across Doha.
        </p>
      </motion.div>

      <section className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col justify-between space-y-6 h-full"
        >
          <div className="h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
            <a
              href="https://www.google.com/maps/place/Zone+26,+Street+938,+Building+12,+Doha,+Qatar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Location on Google Maps"
            >
              <img
                src="https://via.placeholder.com/800x500.png?text=Doha+Plumbing+Location"
                alt="Location map for Doha Plumbing Service"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </a>
          </div>

          <div className="bg-blue-900 text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-serif font-semibold mb-4">Contact Details</h3>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+97431394550" className="underline hover:text-teal-400">
                +974 3139 4550
              </a>
            </p>
            <p>
              <strong>Location:</strong> Zone 26, Street 938, Building 12, Doha, Qatar
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:emergencyplumber39@gmail.com" className="underline hover:text-teal-400">
                emergencyplumber39@gmail.com
              </a>
            </p>
            <div className="flex gap-6 mt-4 text-2xl text-white">
              <a href="https://www.facebook.com/plumbingelectricdoha" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/plumbing9335/#" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
                <FaInstagram />
              </a>
              <a href="https://wa.me/97431394550" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
                <FaWhatsapp />
              </a>
              <a href="tel:+97431394550" className="hover:text-teal-400">
                <FaPhoneAlt />
              </a>
              <a href="https://www.youtube.com/@MaintenanceServicePlumberDoha" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
                <FaYoutube />
              </a>
              <a href="https://www.pinterest.com/plumbingelectricdoha/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
                <FaPinterest />
              </a>
              <a href="mailto:emergencyplumber39@gmail.com" className="hover:text-teal-400">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-8 rounded-xl shadow-xl flex flex-col justify-between"
        >
          <h2 className="text-3xl font-serif font-semibold text-blue-900 mb-4">Get In Touch</h2>
          <p className="mb-6 text-gray-700">
            Fill out the form for inquiries or emergency plumber service. We'll respond promptly.
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
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-700 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
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
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-700 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
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
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-700 ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-3 rounded-md font-semibold transition-colors duration-300 ${
                isSending
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-teal-700 hover:bg-teal-800 text-white"
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status && (
            <p
              className={`mt-5 text-center font-medium ${
                status.includes("✅") ? "text-green-600" : "text-red-600"
              }`}
              role="alert"
            >
              {status}
            </p>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
