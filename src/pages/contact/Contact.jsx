import { useState } from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import PageTitle from "../reusable/PageTitle";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const [activeTheme] = useThemeSwitcher();
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
      .sendForm(
        "service_7b92lcx",
        "template_k6p49ij",
        e.target,
        "wqQwMjjepKRfJ6ah-"
      )
      .then(
        () => {
          setStatus("Your message has been sent successfully.");
          setFormData({ name: "", email: "", message: "" });
          setErrors({});
        },
        (err) => {
          console.error("EmailJS error:", err);
          setStatus("Failed to send the message. Please try again later.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <div className="container mx-auto py-12 px-4 lg:px-8">
      <PageTitle title="F L M SUPER TRADING AND CONTRACTING | Contact" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-[#0A3C26] mb-2">
          F L M SUPER TRADING AND CONTRACTING
        </h1>
        <h2 className="text-xl font-medium text-[#3C6E47] mb-4">
          اف ال ام سوبر ترادينغ اند كونتراكتينغ
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
          CR No. 212381 | Rokcha No. 289601
          <br />
          Providing expert services in: Aluminium Fabrication & Installation, Glass & Mirror Works,
          Gypsum Partition & Ceiling, Printing, Parking Shade, UPVC Doors & Windows, MS Welding & Steel Fabrication,
          and Furniture & Upholstery across Qatar.
        </p>
      </motion.div>

      <section className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Map & Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col justify-between space-y-6 h-full"
        >
          <div className="h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
            <a
              href="https://www.google.com/maps/place/Zone+26,+Street+850,+Building+45,+Flat+2,+Apartment+No+5,+Doha,+Qatar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Location on Google Maps"
            >
              <img
                src="https://8upload.com/image/67ac615fe0e96/Screenshot_4.png"
                alt="Location map for F L M SUPER TRADING AND CONTRACTING"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </a>
          </div>

          <div className="bg-[#0A3C26] text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+97431602956" className="underline hover:text-[#70B77E]">
                +974 3160 2956
              </a>
            </p>
            <p>
              <strong>Location:</strong> Zone 26, Street 850, Building 45, Flat 2, Apartment No 5, Doha, Qatar
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:mobarakhossain23456@gmail.com" className="underline hover:text-[#70B77E]">
                mobarakhossain23456@gmail.com
              </a>
            </p>
            <div className="flex gap-6 mt-4">
              <a
                href="https://www.facebook.com/share/1Ez4QhtfFn/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[#70B77E]"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/mobarakmunna/profilecard/?igsh=MXYwMXdhdDhqNnRjOQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#70B77E]"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://wa.me/97431602956"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-[#70B77E]"
              >
                <FaWhatsapp size={24} />
              </a>
              <a href="tel:+97431602956" aria-label="Phone" className="hover:text-[#70B77E]">
                <FaPhoneAlt size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-8 rounded-xl shadow-xl flex flex-col justify-between"
        >
          <h2 className="text-3xl font-semibold text-[#0A3C26] mb-4">Get In Touch</h2>
          <p className="mb-6 text-gray-700">
            Fill out the form below for inquiries, quotes, or site visits. Our team will get back to you promptly.
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
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A3C26] ${
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
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A3C26] ${
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
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A3C26] ${
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
                  : "bg-[#0A3C26] hover:bg-[#2D6A4F] text-white"
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status && (
            <p
              className={`mt-5 text-center font-medium ${
                status.toLowerCase().includes("success") ? "text-green-600" : "text-red-600"
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
