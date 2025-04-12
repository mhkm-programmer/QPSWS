import { FaFacebook, FaGoogle, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import React from "react";

const Footer = () => {
  const footerItems = [
    {
      href: "/about",
      name: "About Me",
    },
    {
      href: "/terms",
      name: "Terms & Conditions",
    },
    {
      href: "/contact",
      name: "Hire Me",
    },
  ];

  return (
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto py-12 px-6">
        <div className="flex flex-wrap justify-between">
          {/* Branding */}
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <a href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white">
                <img
                  src="https://8upload.com/image/67979661192f3/AL-FWZ_Tradign_Contracting_Logo.png"
                  alt="Logo"
                />
              </div>
              <span className="text-2xl font-bold text-gray-100">
                AL-FWZ Trading and Contracting
              </span>
            </a>
            <p className="mt-4 text-sm text-gray-400">
              All Kind of Furniture Trading and Upholstery Services
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap w-full lg:w-2/3">
            <div className="w-1/2 md:w-1/4 mb-8">
              <h3 className="text-lg font-medium text-gray-100"></h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:text-violet-400 text-gray-400">
                    Home
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 mb-8">
              <h3 className="text-lg font-medium text-gray-100"></h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="/about" className="hover:text-violet-400 text-gray-400">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 mb-8">
              <h3 className="text-lg font-medium text-gray-100"></h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="/service" className="hover:text-violet-400 text-gray-400">
                    Our Services
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 mb-8">
              <h3 className="text-lg font-medium text-gray-100"></h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="/contact" className="hover:text-violet-400 text-gray-400">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 border-t border-gray-700 pt-6">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; 2025 <a href="/">AL-FWZ Furniture Trading and Contracting.</a> All rights reserved.
            </p>
            
            <div className="flex space-x-6">
  <a
    href="tel:+97455760872"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-violet-400 transition duration-300"
  >
    <FaPhoneAlt size={24} />
  </a>
  <a
    href="https://www.facebook.com/profile.php?id=61573137238181&mibextid=ZbWKwL"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-violet-400 transition duration-300"
  >
    <FaFacebook size={24} />
  </a>
  <a
    href="https://www.instagram.com/rokibwin?igsh=anU3ejd4dHFneDhi"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-violet-400 transition duration-300"
  >
    <FaInstagram size={24} />
  </a>
  <a
    href="https://wa.me/+97455760872"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-violet-400 transition duration-300"
  >
    <FaWhatsapp size={24} />
  </a>
  <a
    href="mailto:qatarwintrading@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-violet-400 transition duration-300"
  >
    <FaGoogle size={24} />
  </a>
</div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
