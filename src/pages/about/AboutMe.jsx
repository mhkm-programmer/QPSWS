import {
  FaBuilding,
  FaChair,
  FaTools,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
  FaWindowRestore,
  FaHandshake,
} from "react-icons/fa";

import { motion } from "framer-motion";

const AboutMe = () => {
  const companyImages = [
    "https://8upload.com/image/67a7f2e935ad6/Projects_1.jpg",
    "https://8upload.com/image/67a7f2e90b2d7/Project_2.jpg",
    "https://8upload.com/image/67a7f2e8d7637/Projects_3.jpg",
    "https://8upload.com/image/67a7f2e8b0782/Projects_4.jpg",
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl font-bold text-[#6B4226] mb-4">
          Welcome to Curtains Furniture
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Redefining interior elegance with custom curtains, stylish blinds, and expert craftsmanship – made for homes and businesses across Qatar.
        </p>
      </div>

      {/* Company Mission, Vision, and Values */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center mb-12 px-4">
        {[
          {
            icon: <FaBuilding className="text-[#6B4226] text-4xl mx-auto mb-4" />,
            title: "Our Mission",
            description:
              "To deliver premium, made-to-measure window furnishings that elevate the comfort and look of every space.",
          },
          {
            icon: <FaHandshake className="text-[#6B4226] text-4xl mx-auto mb-4" />,
            title: "Our Vision",
            description:
              "To be Qatar’s most reliable name in curtains and blinds – trusted by homes, offices, and commercial interiors.",
          },
          {
            icon: <FaTools className="text-[#6B4226] text-4xl mx-auto mb-4" />,
            title: "Our Values",
            description:
              "Craftsmanship, integrity, fast service, and satisfaction-driven support in every curtain and blind we install.",
          },
        ].map((item, index) => (
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
          Curtains Furniture specializes in tailored window solutions – from elegant fabric curtains to functional motorized blinds.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center px-4">
        {["Custom Curtains", "Motorized Blinds", "Window Accessories"].map((service, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-lg rounded-xl">
            {service === "Custom Curtains" ? (
              <FaChair className="text-[#6B4226] text-4xl mx-auto mb-4" />
            ) : service === "Motorized Blinds" ? (
              <FaWindowRestore className="text-[#6B4226] text-4xl mx-auto mb-4" />
            ) : (
              <FaTools className="text-[#6B4226] text-4xl mx-auto mb-4" />
            )}
            <h3 className="text-xl font-semibold mb-2">{service}</h3>
            <p className="text-gray-600">
              {service === "Custom Curtains"
                ? "Elegant curtain designs tailored to match your interiors."
                : service === "Motorized Blinds"
                ? "Smart blinds for modern living and commercial spaces."
                : "Finishing touches and accessories that perfect your window setup."}
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
          We offer free consultation and quick site visits anywhere in Qatar. Let’s design your perfect window treatment.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:info.curtainsfurniture@gmail.com"
            className="text-[#6B4226] hover:text-[#8B5A2B] flex items-center gap-2"
          >
            <FaEnvelope size={24} /> info.curtainsfurniture@gmail.com
          </a>
          <a
            href="tel:+97466280037"
            className="text-[#6B4226] hover:text-[#8B5A2B] flex items-center gap-2"
          >
            <FaPhone size={24} /> +974 66280037
          </a>
          <a
            href="https://www.instagram.com/saadbinghanimfurniture?igsh=MWFrZGp2b21jeXpldA=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B4226] hover:text-[#8B5A2B] flex items-center gap-2"
          >
            <FaInstagram size={24} /> Instagram
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61563249227531&mibextid=rS40aB7S9Ucbxw6v"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B4226] hover:text-[#8B5A2B] flex items-center gap-2"
          >
            <FaFacebook size={24} /> Facebook
          </a>
          <a
            href="https://wa.me/97466280037"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B4226] hover:text-[#8B5A2B] flex items-center gap-2"
          >
            <FaWhatsapp size={24} /> WhatsApp
          </a>
        </div>
        <p className="text-sm text-gray-600 mt-4">Location: Mansoura, Doha</p>
      </div>
    </div>
  );
};

export default AboutMe;
