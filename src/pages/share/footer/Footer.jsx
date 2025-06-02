import { FaFacebook, FaGoogle, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", to: "/" },
        { label: "About Us", to: "/about" },
        { label: "Gallery", to: "/gallery" },
        { label: "Contact Us", to: "/contact" },
      ],
    },
    {
      title: "Curtains",
      links: [
        { label: "Blackout Curtains", to: "/curtains/blackout" },
        { label: "Bedroom Curtains", to: "/curtains/bedroom" },
        { label: "Windows Curtains", to: "/curtains/windows" },
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
    <footer className="bg-black text-gray-300 mt-12">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Branding */}
          <div className="space-y-4">
            <NavLink to="/" className="flex items-center space-x-3">
              <div className="w-14 h-14 rounded-full bg-white flex justify-center items-center">
                <img
                  src="https://8upload.com/image/67979661192f3/AL-FWZ_Tradign_Contracting_Logo.png"
                  alt="Logo"
                  className="w-10"
                />
              </div>
              <span className="text-xl font-bold text-white">
                AL-FWZ Trading & Contracting
              </span>
            </NavLink>
            <p className="text-sm text-gray-400">
              All Kind of Furniture Trading and Upholstery Services
            </p>
          </div>

          {/* Dynamic Footer Links */}
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
                      className="text-gray-400 hover:text-violet-400 transition-colors duration-300"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-4 md:mb-0">
            &copy; 2025 <NavLink to="/">AL-FWZ Furniture Trading and Contracting</NavLink>. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="tel:+97455760872" className="hover:text-violet-400">
              <FaPhoneAlt size={20} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61573137238181&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400">
              <FaFacebook size={20} />
            </a>
            <a href="https://www.instagram.com/rokibwin?igsh=anU3ejd4dHFneDhi" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400">
              <FaInstagram size={20} />
            </a>
            <a href="https://wa.me/+97455760872" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400">
              <FaWhatsapp size={20} />
            </a>
            <a href="mailto:qatarwintrading@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400">
              <FaGoogle size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;