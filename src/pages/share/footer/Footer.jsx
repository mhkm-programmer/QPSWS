import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", to: "/" },
        
        { label: "Gallery", to: "/gallery" },
        { label: "Contact Us", to: "/contact" },
      ],
    },
    {
      title: "Curtains",
      links: [
        { label: "Blackout Curtains", to: "/curtains/blackout" },
        { label: "Bedroom Curtains", to: "/curtains/bedroom" },
        { label: "Window Curtains", to: "/curtains/windows" },
        { label: "Hotel Curtains", to: "/curtains/hotel" },
        { label: "Wave Style Curtains", to: "/curtains/wave" },
        { label: "Living Room Curtains", to: "/curtains/livingroom" },
        { label: "Office Curtains", to: "/curtains/office" },
        { label: "Roller Curtains", to: "/curtains/roller" },
      ],
    },
    {
      title: "Blinds",
      links: [
        { label: "Blackout Blinds", to: "/blinds/blackout" },
        { label: "Venetian Blinds", to: "/blinds/venetian" },
        { label: "Roller Blinds", to: "/blinds/roller" },
        { label: "Office Blinds", to: "/blinds/office" },
        { label: "Vertical Blinds", to: "/blinds/vertical" },
        { label: "Window Blinds", to: "/blinds/window" },
      ],
    },
  ];

  return (
    <footer className="bg-[#1b1f24] text-gray-300 mt-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div className="space-y-4">
            <NavLink to="/" className="flex items-center space-x-3">
              <img
                src="https://8upload.com/image/6857c8c36af7b/Curtain_Logo.jpeg"
                alt="Curtains Furniture Logo"
                className="w-12 bg-white rounded-md p-1"
              />
              <span className="text-xl font-bold text-white">
                Curtains Furniture
              </span>
            </NavLink>
            <p className="text-sm text-gray-400">
              Specialized in premium Curtains, Blinds & Upholstery Solutions
              across Qatar. Free Consultation & Installation.
            </p>
            <p className="text-xs text-gray-500">
              📍 Mansoura, Doha | 📞 +974 6628 0037 <br />
              📧 info.curtainsfurniture@gmail.com
            </p>
          </div>

          {/* Footer Menus */}
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <NavLink
                      to={link.to}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()}{" "}
            <NavLink to="/" className="text-orange-400 hover:underline">
              Curtains Furniture Qatar
            </NavLink>
            . All rights reserved.
          </p>
          <div className="flex space-x-5">
            <a href="tel:+97466280037" className="hover:text-orange-400">
              <FaPhoneAlt size={18} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61563249227531&mibextid=rS40aB7S9Ucbxw6v"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/saadbinghanimfurniture?igsh=MWFrZGp2b21jeXpldA=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://wa.me/+97466280037"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400"
            >
              <FaWhatsapp size={18} />
            </a>
            <a
              href="mailto:info.curtainsfurniture@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400"
            >
              <FaGoogle size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
