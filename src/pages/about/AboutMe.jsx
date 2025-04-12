import { FaBuilding, FaChair, FaCouch, FaEnvelope, FaFacebook, FaHandshake, FaInstagram, FaPhone, FaRuler, FaTools, FaWhatsapp } from "react-icons/fa";

import { motion } from "framer-motion";

const AboutUs = () => {
  const companyImages = [
    "https://8upload.com/image/67a7f2e935ad6/Projects_1.jpg", // Replace with actual furniture image URLs
    "https://8upload.com/image/67a7f2e90b2d7/Project_2.jpg",
    "https://8upload.com/image/67a7f2e8d7637/Projects_3.jpg",
    "https://8upload.com/image/67a7f2e8b0782/Projects_4.jpg",
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl font-bold text-[#6B4226] mb-4">Welcome to AL-FWZ Furniture Trading & Contracting</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Crafting timeless furniture pieces that blend elegance, comfort, and functionality. Your dream space starts here.
        </p>
      </div>

      {/* Company Mission, Vision, and Values */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center mb-12 px-4">
        {[{
          icon: <FaBuilding className="text-[#6B4226] text-4xl mx-auto mb-4" />, 
          title: "Our Mission", 
          description: "To create bespoke furniture that transforms spaces into havens of comfort and style."
        }, {
          icon: <FaHandshake className="text-[#6B4226] text-4xl mx-auto mb-4" />, 
          title: "Our Vision", 
          description: "To be the leading name in luxury furniture, inspiring beautiful living spaces worldwide."
        }, {
          icon: <FaTools className="text-[#6B4226] text-4xl mx-auto mb-4" />, 
          title: "Our Values", 
          description: "Craftsmanship, sustainability, and customer satisfaction are at the heart of everything we do."
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
          From custom furniture designs to premium home decor, we bring your vision to life.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center px-4">
        {["Custom Furniture", "Interior Design", "Home Decor"].map((service, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-lg rounded-xl">
            {service === "Custom Furniture" ? <FaChair className="text-[#6B4226] text-4xl mx-auto mb-4" /> :
             service === "Interior Design" ? <FaRuler className="text-[#6B4226] text-4xl mx-auto mb-4" /> :
             <FaCouch className="text-[#6B4226] text-4xl mx-auto mb-4" />}
            <h3 className="text-xl font-semibold mb-2">{service}</h3>
            <p className="text-gray-600">
              {service === "Custom Furniture" ? "Tailored furniture solutions designed to fit your unique style and space." :
              service === "Interior Design" ? "Expert interior design services to create cohesive and stunning spaces." :
              "A curated selection of premium home decor to elevate your living environment."}
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
              alt={`Furniture Project ${index + 1}`}
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
          Let’s create something beautiful together. Reach out to us today!
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

export default AboutUs;