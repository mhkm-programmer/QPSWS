import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaWrench
} from "react-icons/fa";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import CustomerReviews from "../pages/Home/CustomerReviews";

const Services = () => {
  const services = [
    {
      icon: <FaWrench size={40} className="text-yellow-400 mx-auto mb-4" />,
      title: "Emergency Plumbing",
      desc: "24/7 emergency plumbing services for homes and businesses. Fast response and reliable fixes.",
    },
    {
      icon: <FaWrench size={40} className="text-yellow-400 mx-auto mb-4" />,
      title: "Installation & Repairs",
      desc: "Professional installation of pipes, faucets, and fixtures. Full repair services for leaks, clogs, and water systems.",
    },
    {
      icon: <FaWrench size={40} className="text-yellow-400 mx-auto mb-4" />,
      title: "Maintenance & Inspection",
      desc: "Preventive maintenance and system inspections to ensure long-lasting plumbing performance.",
    },
  ];

  return (
    <main className="font-sans text-gray-900 bg-gray-50 dark:bg-gray-900">

      {/* SEO */}
      <PageTitle title="Doha Plumbing Service | Expert Plumbing Solutions in Doha" />

      {/* Hero Section with Parallax */}
      <ParallaxSection
        imagePath="https://via.placeholder.com/1600x600.png?text=Doha+Plumbing+Service"
        title="Professional Plumbing Services"
        subTitle="Reliable, Fast, & Trusted – خدمات السباكة الموثوقة"
        overlay="rgba(0,0,0,0.5)"
        titleClass="text-5xl md:text-6xl font-serif font-bold text-yellow-400"
        subTitleClass="text-xl md:text-2xl font-sans text-white mt-3"
      />

      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 dark:text-white">
          Your Trusted Plumber in Doha
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Doha Plumbing Service provides expert plumbing solutions, from emergency repairs to installations and maintenance. Our skilled team ensures fast, reliable, and professional service for homes and businesses across Qatar.
        </p>
      </section>

      {/* Services Grid */}
      <section className="bg-white dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {services.map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-900 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200 dark:border-gray-700"
            >
              {icon}
              <h3 className="text-2xl font-serif font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Optional Gallery Placeholder */}
      <section className="py-20 px-6 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-gray-900 dark:text-white">
          Our Plumbing Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img
                src={`https://via.placeholder.com/400x300.png?text=Project+${i}`}
                alt={`Project ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-900 text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Contact Doha Plumbing Service Today
        </h2>
        <p className="text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Schedule a service, request a quote, or get emergency plumbing help. Fast response guaranteed.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-lg">
          <a href="tel:+97431394550" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full shadow-lg font-semibold transition flex items-center justify-center">
            <FaPhoneAlt className="inline mr-2" /> 3139 4550
          </a>
          <a href="https://wa.me/97431394550" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full shadow-lg font-semibold transition flex items-center justify-center">
            <FaWhatsapp className="inline mr-2" /> WhatsApp
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 text-3xl">
          <a href="https://www.facebook.com/plumbingelectricdoha" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/plumbing9335/#" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
            <FaInstagram />
          </a>
          <a href="mailto:emergencyplumber39@gmail.com" className="hover:text-yellow-400 transition">
            <FaEnvelope />
          </a>
          <a href="https://www.youtube.com/@MaintenanceServicePlumberDoha" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
            <FaYoutube />
          </a>
          <a href="https://www.pinterest.com/plumbingelectricdoha/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
            <FaPinterest />
          </a>
        </div>
      </section>

      {/* Customer Reviews */}
      <CustomerReviews />
    </main>
  );
};

export default Services;
