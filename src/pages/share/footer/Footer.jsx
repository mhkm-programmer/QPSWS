import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

// Contact Info
const contact = {
  address: "Mansoura, Doha, Qatar",
  phone: "+974 6628 0037",
  email: "info.curtainsfurniture@gmail.com",
};

// Social Links
const socialLinks = [
  {
    icon: <FaPhoneAlt size={18} />,
    label: "Phone",
    href: `tel:${contact.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: <FaFacebook size={18} />,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61563249227531&mibextid=rS40aB7S9Ucbxw6v",
  },
  {
    icon: <FaInstagram size={18} />,
    label: "Instagram",
    href: "https://www.instagram.com/saadbinghanimfurniture?igsh=MWFrZGp2b21jeXpldA==",
  },
  {
    icon: <FaWhatsapp size={18} />,
    label: "WhatsApp",
    href: `https://wa.me/${contact.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: <FaGoogle size={18} />,
    label: "Email",
    href: `mailto:${contact.email}`,
  },
];

// Footer Navigation Structure
const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", to: "/" },
      { label: "Services", to: "/service" },
      { label: "Gallery", to: "/gallery" },
      
    ],
  },
  {
    title: "FLM Services",
    links: [
      { label: "Aluminium", to: "/services/aluminium" },
      { label: "Glass", to: "/services/glass" },
      { label: "Gypsum & Printing", to: "/services/gypsum_printing" },
      { label: "Parking Shades", to: "/services/parking" },
      { label: "UPVC Doors & Windows", to: "/services/upvc" },
      { label: "MS Fabrication", to: "/services/ms_fabrication" },
    ],
  },
  {
    title: "Furniture",
    links: [{ label: "Curtains & Blinds", to: "/furniture" }],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1b1f24] text-gray-300 mt-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <NavLink to="/" className="flex items-center space-x-3">
              <img
                src="https://8upload.com/image/6857c8c36af7b/Curtain_Logo.jpeg"
                alt="Curtains Furniture Logo"
                className="w-12 bg-white rounded-md p-1"
                loading="lazy"
              />
              <span className="text-xl font-bold text-white">
                Curtains Furniture
              </span>
            </NavLink>
            <p className="text-sm text-gray-400">
              Transforming spaces across Qatar with elegant Curtains, Blinds,
              and Custom Furniture. Tailored designs, expert fitting & free consultations.
            </p>
            <address className="text-xs text-gray-500 not-italic leading-6">
              📍 {contact.address} <br />
              📞 {contact.phone} <br />
              📧{" "}
              <a
                href={`mailto:${contact.email}`}
                className="underline hover:text-orange-400"
              >
                {contact.email}
              </a>
            </address>
          </div>

          {/* Navigation Columns */}
          {footerLinks.map((section, index) => (
            <nav key={index} aria-labelledby={`footer-section-${index}`}>
              <h3
                id={`footer-section-${index}`}
                className="text-lg font-semibold text-white mb-4"
              >
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <NavLink
                      to={link.to}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear}{" "}
            <NavLink to="/" className="text-orange-400 hover:underline">
              Curtains Furniture Qatar
            </NavLink>
            . All rights reserved.
          </p>
          <div className="flex space-x-5">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="hover:text-orange-400"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
