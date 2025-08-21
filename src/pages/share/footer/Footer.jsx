import { NavLink } from "react-router-dom";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0A192F] text-gray-300 font-sans">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Doha Plumbing Service
          </h2>
          <p className="text-gray-400 text-sm">
            الدوحة لخدمات السباكة والكهرباء والصيانة
          </p>
         
          <p className="text-gray-400 text-sm">
            Location: Zone 26, Street 938, Building 12, Doha, Qatar
          </p>
          <div className="flex flex-col space-y-1 mt-2">
            <p className="flex items-center gap-2 hover:text-[#00B4D8] transition">
              <FaPhoneAlt className="text-[#00B4D8]" /> 31394550
            </p>
            <p className="flex items-center gap-2 hover:text-[#00B4D8] transition">
              <FaWhatsapp className="text-[#00B4D8]" /> 
              <a href="https://wa.me/97431394550" target="_blank" rel="noreferrer" className="underline">
                WhatsApp
              </a>
            </p>
            <p className="flex items-center gap-2 hover:text-[#00B4D8] transition">
              <FaEnvelope className="text-[#00B4D8]" /> 
              <a href="mailto:emergencyplumber39@gmail.com" className="underline">
                info.plumber360@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <NavLink to="/" className="hover:text-[#00B4D8] transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-[#00B4D8] transition">
                Our Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-[#00B4D8] transition">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Services & Social */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-gray-400 mb-6">
            <li>
              <NavLink to="/services/plumber" className="hover:text-[#00B4D8] transition">
                Plumber
              </NavLink>
            </li>
          </ul>

          {/* Social Media */}
          <div className="flex items-center gap-5">
            <a href="https://www.facebook.com/plumbingelectricdoha" target="_blank" rel="noreferrer" className="hover:text-[#00B4D8] transition text-lg">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/plumbing9335/#" target="_blank" rel="noreferrer" className="hover:text-[#00B4D8] transition text-lg">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@MaintenanceServicePlumberDoha" target="_blank" rel="noreferrer" className="hover:text-[#00B4D8] transition text-lg">
              <FaYoutube />
            </a>
            <a href="https://www.pinterest.com/plumbingelectricdoha/" target="_blank" rel="noreferrer" className="hover:text-[#00B4D8] transition text-lg">
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="flex items-center gap-2 hover:text-[#00B4D8] transition">
            <FaPhoneAlt className="text-[#00B4D8]" />
            <span>31394550</span>
          </div>
          <div className="flex items-center gap-2 hover:text-[#00B4D8] transition">
            <FaEnvelope className="text-[#00B4D8]" />
            <span>info.plumber360@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center gap-2 hover:text-[#00B4D8] transition">
          <FaMapMarkerAlt className="text-[#00B4D8]" />
          <span>Zone 26, Street 938, Building 12, Doha, Qatar</span>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-5 text-xs text-gray-500">
        © {new Date().getFullYear()} Doha Plumbing Service. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;