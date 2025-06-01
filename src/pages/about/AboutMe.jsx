import { FaBuilding, FaChair, FaCouch, FaEnvelope, FaFacebook, FaHandshake, FaInstagram, FaPhone, FaRuler, FaTools, FaWhatsapp, FaWindowRestore } from "react-icons/fa";

import { motion } from "framer-motion";

const AboutMe = () => {
  const companyImages = [
    "https://8upload.com/image/67a7f2e935ad6/Projects_1.jpg", // Replace with actual curtains/blinds image URLs
    "https://8upload.com/image/67a7f2e90b2d7/Project_2.jpg",
    "https://8upload.com/image/67a7f2e8d7637/Projects_3.jpg",
    "https://8upload.com/image/67a7f2e8b0782/Projects_4.jpg",
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl font-bold text-[#6B4226] mb-4">Welcome to AL-FWZ Curtains & Blinds Trading</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Enhancing your spaces with stylish curtains and blinds that combine elegance, privacy, and light control.
        </p>
      </div>

      {/* Company Mission, Vision, and Values */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center mb-12 px-4">
        {[{
          icon: <FaBuilding className="text-[#6B4226] text-4xl mx-auto mb-4" />, 
          title: "Our Mission", 
          description: "To provide premium curtains and blinds that beautify and protect your living and working spaces."
        }, {
          icon: <FaHandshake className="text-[#6B4226] text-4xl mx-auto mb-4" />, 
          title: "Our Vision", 
          description: "To be the most trusted name in window furnishing solutions, recognized for quality and innovation."
        }, {
          icon: <FaTools className="text-[#6B4226] text-4xl mx-auto mb-4" />, 
          title: "Our Values", 
          description: "Quality craftsmanship, sustainability, and customer delight drive everything we do."
        }].map((item, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-lg rounded-xl">
            {item.icon}
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Services Section */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl font-bold text-[#6B4226] mb-6">Our Expertise</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          From custom curtain designs to automated blinds, we provide tailored solutions to enhance your windows.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center px-4">
        {["Custom Curtains", "Motorized Blinds", "Window Accessories"].map((service, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-lg rounded-xl">
            {service === "Custom Curtains" ? <FaChair className="text-[#6B4226] text-4xl mx-auto mb-4" /> :
             service === "Motorized Blinds" ? <FaWindowRestore className="text-[#6B4226] text-4xl mx-auto mb-4" /> :
             <FaTools className="text-[#6B4226] text-4xl mx-auto mb-4" />}
            <h3 className="text-xl font-semibold mb-2">{service}</h3>
            <p className="text-gray-600">
              {service === "Custom Curtains" ? "Elegant and durable curtains customized to match your décor and needs." :
              service === "Motorized Blinds" ? "Innovative automated blinds offering convenience and modern style." :
              "High-quality window accessories to complement and enhance your curtain and blind systems."}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Image Gallery */}
      <div className="mt-12 px-4">
        <h2 className="text-3xl font-semibold text-[#6B4226] text-center mb-8">Our Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {companyImages.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Curtains & Blinds Project ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center mt-16 px-4">
        <h2 className="text-3xl font-bold text-[#6B4226] mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Ready to transform your windows? Contact us today for a free consultation.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="mailto:qatarwintrading@gmail.com" className="text-[#6B4226] hover:text-[#8B5A2B] flex items-center gap-2">
            <FaEnvelope size={24} /> qatarwintrading@gmail.com
          </a>
          <a href="tel:+97455760872" className="text-[#6B4226] hover:text-[#8B5A2B] flex items-center gap-2">
            <FaPhone size={24} /> +97455760872
          </a>
          <a href="https://www.instagram.com/rokibwin?igsh=anU3ejd4dHFneDhi" target="_blank" rel="noopener noreferrer" className="text-[#6B4226] hover:text-[#8B5A2B] flex items-center gap-2">
            <FaInstagram size={24} /> Instagram
          </a>
          <a href="https://www.facebook.com/profile.php?id=61573137238181&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-[#6B4226] hover:text-[#8B5A2B] flex items-center gap-2">
            <FaFacebook size={24} /> Facebook
          </a>
          <a href="https://wa.me/+97455760872" target="_blank" rel="noopener noreferrer" className="text-[#6B4226] hover:text-[#8B5A2B] flex items-center gap-2">
            <FaWhatsapp size={24} /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
